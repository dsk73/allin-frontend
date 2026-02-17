//src/pages/dashboard/Profile.jsx
import { User, Mail } from "lucide-react";
import useAuth from "../../context/useAuth";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

      <div className="bg-[#111] border border-white/10 rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full bg-green-400/10
                          text-green-400 flex items-center justify-center"
          >
            <User size={24} />
          </div>

          <div>
            <p className="text-white/40 text-sm">Username</p>
            <p className="font-semibold text-lg">{user.username}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full bg-green-400/10
                          text-green-400 flex items-center justify-center"
          >
            <Mail size={22} />
          </div>

          <div>
            <p className="text-white/40 text-sm">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 text-sm text-white/50">
          Profile editing will be enabled in a future update.
        </div>
      </div>
    </div>
  );
}

export default Profile;
