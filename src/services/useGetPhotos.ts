import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { Photo } from "../types/types";
import apiClient from "./apiClient";

const getPhotos = async (topic: string, page: number) => {
  return await apiClient.get<Photo[]>(`/topics/${topic}/photos?page=${page}&per_page=30`)
};

const useGetPhotos = (topic: string, page: number,) => {
  const {
    isLoading: isLoadingPhotos,
    data
  } = useQuery<AxiosResponse<Photo[]>, AxiosError>(
    ['photos', topic],
    () => getPhotos(topic, page),
    {
      enabled: !!topic
    }
  )

  const photos = data?.data ? data.data : [];

  return {
    isLoadingPhotos,
    photos,
  }
};
export default useGetPhotos;