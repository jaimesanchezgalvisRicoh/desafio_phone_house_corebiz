import { useQuery } from "react-query";

export const useProductData = () => {
  const url = import.meta.env.VITE_GET_API_URL;
  return useQuery("myData", async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });
};
