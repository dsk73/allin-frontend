function ProductRating({ reviews = [], size = "sm", onClick }) {
  const approved = reviews.filter((r) => r.approved);
  if (!approved.length) return null;

  const avg = approved.reduce((sum, r) => sum + r.rating, 0) / approved.length;

  const fullStars = Math.floor(avg);
  const hasPartial = avg - fullStars > 0;

  const starSize = size === "lg" ? "text-lg" : "text-sm";
  const clickable = typeof onClick === "function";

  return (
    <div
      className={`flex items-center gap-2 ${starSize} ${
        clickable ? "cursor-pointer hover:opacity-90" : ""
      }`}
      onClick={onClick}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => {
          if (i <= fullStars) {
            return (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            );
          }

          if (i === fullStars + 1 && hasPartial) {
            return (
              <span key={i} className="text-yellow-400">
                ⯨
              </span>
            );
          }

          return (
            <span key={i} className="text-white/30">
              ★
            </span>
          );
        })}
      </div>

      {/* Rating text */}
      <span className="text-white/60 text-xs">
        {avg.toFixed(1)} ({approved.length})
      </span>
    </div>
  );
}

export default ProductRating;
