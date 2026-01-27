export function resolveImageUrl(url) {
  if (!url) return "/no-image.png";

  // Already absolute (Cloudinary)
  if (url.startsWith("http")) {
    return url;
  }

  // Relative → prefix with Render backend
  const base = import.meta.env.VITE_API_URL.replace("/api", "");
  return `${base}${url}`;
}
