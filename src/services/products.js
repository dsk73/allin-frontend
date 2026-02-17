//src/services/products.js
import api from "./api";

export const fetchProducts = async () => {
  const res = await api.get(
    "/products" +
      "?populate[category]=true" +
      "&populate[product_reviews]=true" +
      "&populate[product_medias][populate]=ProductMedia",
  );

  return res.data.data;
};
