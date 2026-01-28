// src/components/product/ReviewForm.jsx
import { useState } from "react";
import { api } from "../../services/api";

function ReviewForm({ productId, onSubmitted }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    setLoading(true);

    try {
      await api.post("/product-reviews", {
        data: {
          name,
          rating,
          comment,
          approved: false,

          // ✅ STRAPI v5 RELATION LINK (THIS FIXES IT)
          product: {
            connect: [productId],
          },

          // Draft & Publish ON → keep unpublished
          publishedAt: null,
        },
      });

      setSuccess(true);

      // Keep success message visible for 3 seconds
      setTimeout(() => {
        setSuccess(false);
        if (onSubmitted) onSubmitted();
      }, 3000);

      setName("");
      setRating(5);
      setComment("");
    } catch (err) {
      console.error("❌ Review submit error:", err);
      alert("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Write a Review</h3>

      {success && (
        <p className="mb-4 text-green-400">
          Thank you! Your review will appear after approval.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-6 rounded-2xl border border-white/10 space-y-4 max-w-xl"
      >
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-black border border-white/20 rounded-lg px-4 py-3"
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full bg-black border border-white/20 rounded-lg px-4 py-3"
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              {r} Stars
            </option>
          ))}
        </select>

        <textarea
          placeholder="Your review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full bg-black border border-white/20 rounded-lg px-4 py-3"
        />

        <button
          disabled={loading}
          className="px-8 py-3 bg-green-400 text-black rounded-full font-semibold disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
