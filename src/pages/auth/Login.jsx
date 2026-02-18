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
    <AuthLayout title="Welcome back">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="animate-shake rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Email or Username"
          required
          autoComplete="username"
          className="
            w-full rounded-full px-5 py-3
            bg-black/60 border border-white/20
            focus:outline-none focus:border-green-400
            focus:shadow-[0_0_0_3px_rgba(0,255,128,0.15)]
            transition-all
          "
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          autoComplete="current-password"
          className="
            w-full rounded-full px-5 py-3
            bg-black/60 border border-white/20
            focus:outline-none focus:border-green-400
            focus:shadow-[0_0_0_3px_rgba(0,255,128,0.15)]
            transition-all
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            relative w-full rounded-full py-3 font-bold text-black
            bg-green-400
            hover:bg-green-300
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all
            disabled:opacity-60
          "
        >
          {loading ? "Logging in…" : "Login"}
        </button>

        <p className="text-center text-sm text-white/60">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="relative text-green-400 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
          >
            Create one
          </Link>
        </p>
      </form>

      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-4px); }
            75% { transform: translateX(4px); }
          }

          .animate-shake {
            animation: shake 0.3s ease-in-out;
          }
        `}
      </style>
    </AuthLayout>
  );
}

export default Login;
