// src/pages/legal/Legal.jsx
import { Link } from "react-router-dom";

function Legal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Legal Information</h1>

      <p className="text-white/70 mb-10">
        This section contains important legal information related to the use of
        ALLiN, including our policies, terms, and conditions. Please review the
        documents below carefully.
      </p>

      <div className="space-y-4">
        <LegalLink to="/legal/terms" label="Terms of Use" />
        <LegalLink to="/legal/privacy" label="Privacy Policy" />
        <LegalLink to="/legal/trademark" label="Trademark" />
        <LegalLink to="/legal/promotions" label="Promotion Terms" />
      </div>
    </div>
  );
}

function LegalLink({ to, label }) {
  return (
    <Link
      to={to}
      className="block p-5 rounded-2xl border border-white/10 bg-[#111]
                 hover:border-green-400/60 hover:bg-white/5 transition"
    >
      <span className="text-lg font-semibold">{label}</span>
    </Link>
  );
}

export default Legal;
