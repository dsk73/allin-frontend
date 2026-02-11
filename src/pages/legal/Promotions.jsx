// src/pages/legal/Promotions.jsx
function Promotions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Promotion Terms</h1>
      <p className="text-sm text-white/40 mb-10">Last updated: July 2026</p>

      <Section title="1. Eligibility">
        Promotions are available only to eligible users as specified in the
        promotion details.
      </Section>

      <Section title="2. Promotion Period">
        Each promotion is valid only for the duration mentioned.
      </Section>

      <Section title="3. Offer Conditions">
        Promotions are non-transferable, subject to availability, and cannot be
        combined unless stated otherwise.
      </Section>

      <Section title="4. Coupons">
        Coupons must be applied at checkout and cannot be redeemed for cash.
      </Section>

      <Section title="5. Modifications">
        ALLiN reserves the right to modify or cancel promotions at any time.
      </Section>

      <Section title="6. Final Decision">
        All decisions related to promotions are final and binding.
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-white/70 leading-relaxed">{children}</p>
    </div>
  );
}

export default Promotions;
