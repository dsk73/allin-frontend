//src/pages/auth/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import useAuth from "../../context/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      await login(identifier, password);
      navigate("/", { replace: true });
    } catch {
      setError("Invalid email/username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to continue your ALLiN journey"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* IDENTIFIER */}
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Email or Username"
          required
          autoComplete="username"
          className="w-full bg-black border border-white/20 rounded-full px-5 py-3
                     focus:outline-none focus:border-green-400 transition"
        />

        {/* PASSWORD */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          autoComplete="current-password"
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
          {loading ? "Logging in…" : "Login"}
        </button>

        {/* FOOTER */}
        <p className="text-center text-sm text-white/60">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Create one
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Login;
