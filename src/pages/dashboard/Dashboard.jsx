import { ShoppingBag, User, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const cards = [
    {
      title: "Orders",
      desc: "View your previous purchases",
      icon: <ShoppingBag size={22} />,
      path: "/profile/orders",
    },
    {
      title: "Profile",
      desc: "Manage your account details",
      icon: <User size={22} />,
      path: "/profile",
    },
    {
      title: "Saved Items",
      desc: "Products you liked",
      icon: <Heart size={22} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Welcome back, {user?.username}
      </h1>
      <p className="text-white/60 mb-10">
        Manage your ALLiN account and activity
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            onClick={() => c.path && navigate(c.path)}
            className="
              group bg-[#111] border border-white/10 rounded-2xl p-6
              hover:border-green-400/50 transition
              cursor-pointer
            "
          >
            <div className="w-12 h-12 rounded-xl bg-green-400/10 text-green-400 flex items-center justify-center mb-4">
              {c.icon}
            </div>

            <h3 className="font-semibold text-lg mb-1">{c.title}</h3>
            <p className="text-white/60 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
