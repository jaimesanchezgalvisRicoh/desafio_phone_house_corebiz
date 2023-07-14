import { useQuery } from "react-query";

export const useProductData = () => {
  return useQuery("myData", async () => {
    const response = await fetch(
      "https://corebizchallenge-738fa69df9e3.herokuapp.com/api/v1/products"
    );
    const data = await response.json();
    return data;
  });
};
