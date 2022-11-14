import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { Topic } from "../types/types";
import apiClient from "./apiClient";
import { minutesToMillisecond } from "./util";

const getTopics = async () => {
  return await apiClient.get<Topic[]>('/topics?page=1')
};

const useGetTopics = () => {
  const {
    isLoading: isLoadingTopics,
    data
  } = useQuery<AxiosResponse<Topic[]>, AxiosError>(
    "topics",
    getTopics, {
      staleTime: minutesToMillisecond(10)
    }
  )

  const topics = data?.data ? data.data : [];

  return {
    isLoadingTopics,
    topics,
  }
};
export default useGetTopics;
