import { api } from "./api";

export const fetchProducts = async () => {
  const res = await api.get(
    "/products?populate[product_medias][populate]=*&populate=category",
  );
  return res.data.data;
};
