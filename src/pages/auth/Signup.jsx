//src/pages/auth/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import useAuth from "../../context/useAuth";

function Signup() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      await register(form.username, form.email, form.password);
      navigate("/", { replace: true });
    } catch {
      setError("Signup failed. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your ALLiN account"
      subtitle="Join the premium poker lifestyle"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* USERNAME */}
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
          autoComplete="username"
          className="w-full bg-black border border-white/20 rounded-full px-5 py-3
                     focus:outline-none focus:border-green-400 transition"
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          autoComplete="email"
          className="w-full bg-black border border-white/20 rounded-full px-5 py-3
                     focus:outline-none focus:border-green-400 transition"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          autoComplete="new-password"
          className="w-full bg-black border border-white/20 rounded-full px-5 py-3
                     focus:outline-none focus:border-green-400 transition"
        />

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-green-400 py-3 font-bold text-black
                     hover:bg-green-300 transition disabled:opacity-60"
        >
          {loading ? "Creating account…" : "Sign Up"}
        </button>

        {/* FOOTER */}
        <p className="text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Signup;
