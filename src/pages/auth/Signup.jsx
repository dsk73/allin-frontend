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
    <AuthLayout title="Create your ALLiN account">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="animate-shake rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
          className="w-full rounded-full px-5 py-3 bg-black/60 border border-white/20 focus:border-green-400 focus:outline-none transition-all"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full rounded-full px-5 py-3 bg-black/60 border border-white/20 focus:border-green-400 focus:outline-none transition-all"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full rounded-full px-5 py-3 bg-black/60 border border-white/20 focus:border-green-400 focus:outline-none transition-all"
        />

        <button
          type="submit"
          disabled={loading}
          className="
            w-full rounded-full py-3 font-bold text-black
            bg-green-400
            hover:bg-green-300
            hover:-translate-y-0.5
            transition-all
            disabled:opacity-60
          "
        >
          {loading ? "Creating account…" : "Sign Up"}
        </button>

        <p className="text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link
            to="/login"
            className="relative text-green-400 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Signup;
