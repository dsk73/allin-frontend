// src/components/product/ProductGallery.jsx
import { useState, useMemo } from "react";
import { resolveImageUrl } from "../../utils/media";

function ProductGallery({ medias = [] }) {
  /* ================= NORMALIZE ================= */
  const items = useMemo(() => {
    return medias
      .filter((m) => m.ProductMedia)
      .sort((a, b) => (b.ProductMedia?.id || 0) - (a.ProductMedia?.id || 0));
  }, [medias]);

  /* ================= ACTIVE MEDIA ================= */
  const [activeMediaId, setActiveMediaId] = useState(() => {
    if (!items.length) return null;
    const primary = items.find((m) => m.isPrimary) || items[0];
    return primary.ProductMedia.id;
  });

  if (!items.length) {
    return (
      <div className="w-full aspect-square bg-[#111] rounded-2xl flex items-center justify-center text-white/50">
        No images available
      </div>
    );
  }

  const activeItem =
    items.find((m) => m.ProductMedia.id === activeMediaId) || items[0];

  const activeImage = activeItem.ProductMedia;

  const activeUrl = resolveImageUrl(
    activeImage.formats?.large?.url ||
      activeImage.formats?.medium?.url ||
      activeImage.url,
  );

  return (
    <div className="flex flex-col gap-6">
      {/* ================= MAIN IMAGE ================= */}
      <div
        className="relative w-full aspect-square bg-[#111]
                   rounded-2xl overflow-hidden border border-white/10"
      >
        <img
          key={activeMediaId}
          src={activeUrl}
          alt={activeImage.name}
          className="
            w-full h-full object-cover
            opacity-0 scale-[0.98]
            transition-all duration-500 ease-out
            animate-[fadeIn_0.5s_ease-out_forwards]
          "
        />
      </div>

      {/* ================= THUMBNAILS ================= */}
      <div className="flex gap-4">
        {items.map((item) => {
          const img = item.ProductMedia;

          const thumb = resolveImageUrl(
            img.formats?.thumbnail?.url || img.formats?.small?.url || img.url,
          );

          const isActive = img.id === activeMediaId;

          return (
            <button
              key={img.id}
              onClick={() => setActiveMediaId(img.id)}
              className={`
                w-20 h-20 rounded-xl overflow-hidden
                border transition-all duration-300
                ${
                  isActive
                    ? "border-green-400"
                    : "border-white/10 hover:border-white/30"
                }
              `}
            >
              <img
                src={thumb}
                alt={img.name}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}

export default ProductGallery;
