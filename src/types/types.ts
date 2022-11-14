export type Topic = {
    id: string;
    title: string;
  }
  export type Photo = {
    id: string;
    description: string;
    urls: {
      raw: string;
      regular: string;
      thumb: string;
    }
  }