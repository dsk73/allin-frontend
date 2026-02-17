//src/pages/auth/AuthLayout.jsx
function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
