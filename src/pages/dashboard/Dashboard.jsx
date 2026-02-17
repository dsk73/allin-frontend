//src/pages/dashboard/Dashboard.jsx
import useAuth from "../../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">
        Welcome back, {user?.username}
      </h1>

      <p className="text-white/70 mb-8">
        This is your personal ALLiN dashboard.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-2">Orders</h3>
          <p className="text-white/60 text-sm">View your previous purchases</p>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-2">Profile</h3>
          <p className="text-white/60 text-sm">Manage your account details</p>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold mb-2">Saved Items</h3>
          <p className="text-white/60 text-sm">Products you liked</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
