// src/components/product/ProductBadge.jsx
function ProductBadge({ type }) {
  if (!type) return null;

  const styles = {
    NEW: "bg-green-400 text-black",
    FEATURED: "bg-purple-500 text-white",
    COMING_SOON: "bg-yellow-400 text-black",
  };

  const labels = {
    NEW: "NEW DROP",
    FEATURED: "FEATURED",
    COMING_SOON: "COMING SOON",
  };

  return (
    <span
      className={`absolute top-3 left-3 z-10 px-3 py-1 text-xs font-bold 
                  rounded-full tracking-wide ${styles[type]}`}
    >
      {labels[type]}
    </span>
  );
}

export default ProductBadge;
