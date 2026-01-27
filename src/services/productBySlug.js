import { api } from "./api";

export const fetchProductBySlug = async (slug) => {
  const res = await api.get(
    `/products?filters[slug][$eq]=${slug}` +
      "&populate[category]=true" +
      "&populate[product_reviews]=true" +
      "&populate[product_medias][populate]=ProductMedia",
  );

  return res.data.data[0];
};
