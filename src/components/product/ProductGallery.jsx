import { useState } from "react";

function ProductGallery({ medias = [] }) {
  const images = medias.map((m) => m.ProductMedia).filter(Boolean);

  // store only ID, not full object
  const [activeId, setActiveId] = useState(images[0]?.id || null);

  if (!images.length) {
    return (
      <div
        className="w-full aspect-square bg-[#111] rounded-2xl 
                      flex items-center justify-center text-white/50"
      >
        No images available
      </div>
    );
  }

  const activeImage = images.find((img) => img.id === activeId) || images[0];

  const activeUrl =
    activeImage.formats?.large?.url ||
    activeImage.formats?.medium?.url ||
    activeImage.url;

  return (
    <div className="flex flex-col gap-6">
      {/* ================= MAIN IMAGE ================= */}
      <div
        className="group relative w-full aspect-square bg-[#111] 
                      rounded-2xl overflow-hidden border border-white/10"
      >
        <img
          src={`http://localhost:1337${activeUrl}`}
          alt={activeImage.name}
          className="w-full h-full object-cover 
                     transition-transform duration-300 
                     group-hover:scale-105"
        />
      </div>

      {/* ================= THUMBNAILS ================= */}
      <div className="flex gap-4">
        {images.map((img) => {
          const thumb =
            img.formats?.thumbnail?.url || img.formats?.small?.url || img.url;

          return (
            <button
              key={img.id}
              onClick={() => setActiveId(img.id)}
              className={`w-20 h-20 rounded-xl overflow-hidden border
                ${
                  activeImage.id === img.id
                    ? "border-green-400"
                    : "border-white/10 hover:border-white/30"
                } transition`}
            >
              <img
                src={`http://localhost:1337${thumb}`}
                alt={img.name}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGallery;
