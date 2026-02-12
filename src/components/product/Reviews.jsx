// src/components/product/Reviews.jsx
function Reviews({ reviews = [] }) {
  const approvedReviews = reviews.filter((r) => r.approved);

  /* ================= STAR RENDERER ================= */
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return Array.from({ length: 5 }).map((_, i) => {
      if (i < fullStars) {
        return (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      }
      if (i === fullStars && hasHalfStar) {
        return (
          <span key={i} className="text-yellow-400">
            ⯨
          </span>
        );
      }
      return (
        <span key={i} className="text-white/20">
          ★
        </span>
      );
    });
  };

  if (approvedReviews.length === 0) {
    return (
      <p className="text-white/60">
        No reviews yet. Be the first to share your thoughts.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {approvedReviews.map((review) => (
        <div
          key={review.id}
          className="bg-[#111] p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">{review.name}</h4>
            <div className="flex text-sm">{renderStars(review.rating)}</div>
          </div>

          <p className="text-white/70 leading-relaxed">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
