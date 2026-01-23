import { api } from "./api";

export const fetchTestimonials = async () => {
  const response = await api.get("/testimonials?populate=*");
  return response.data.data;
};
