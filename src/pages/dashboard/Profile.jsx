//src/pages/dashboard/Profile.jsx
import useAuth from "../../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <div className="bg-[#111] border border-white/10 rounded-2xl p-6 space-y-4">
        <div>
          <p className="text-white/40 text-sm">Username</p>
          <p className="font-semibold">{user.username}</p>
        </div>

        <div>
          <p className="text-white/40 text-sm">Email</p>
          <p className="font-semibold">{user.email}</p>
        </div>

        <p className="text-white/50 text-sm">
          Profile editing will be enabled next.
        </p>
      </div>
    </div>
  );
}

export default Profile;
