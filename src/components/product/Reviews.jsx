function Reviews({ reviews = [] }) {
  const approvedReviews = reviews.filter((r) => r.approved);

  if (approvedReviews.length === 0) {
    return (
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-4">Reviews</h3>
        <p className="text-white/60">
          No reviews yet. Be the first to share your thoughts.
        </p>
      </div>
    );
  }

  const avgRating =
    approvedReviews.reduce((sum, r) => sum + r.rating, 0) /
    approvedReviews.length;

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

  return (
    <section className="mt-24">
      <h3 className="text-2xl font-bold mb-6">
        Reviews ({approvedReviews.length})
      </h3>

      {/* ================= AVERAGE RATING ================= */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-4xl font-bold text-green-400">
          {avgRating.toFixed(1)}
        </span>

        <div className="flex text-xl">{renderStars(avgRating)}</div>
      </div>

      {/* ================= REVIEWS LIST ================= */}
      <div className="space-y-6">
        {approvedReviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#111] p-6 rounded-2xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">{review.name}</h4>

              <div className="flex text-sm">{renderStars(review.rating)}</div>
            </div>

            <p className="text-white/70 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
