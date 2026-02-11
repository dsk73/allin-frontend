// src/pages/legal/Trademark.jsx
function Trademark() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Trademark</h1>
      <p className="text-sm text-white/40 mb-10">Last updated: July 2026</p>

      <Section title="Ownership">
        ALLiN, including its name, logo, designs, and branding elements, are
        trademarks owned by ALLiN.
      </Section>

      <Section title="Restrictions">
        You may not use, reproduce, imitate, or modify ALLiN trademarks without
        prior written consent.
      </Section>

      <Section title="No License">
        Nothing on this website grants any license or right to use ALLiN
        trademarks.
      </Section>

      <Section title="Reporting Misuse">
        To report trademark misuse, contact{" "}
        <span className="text-green-400">legal@allin.com</span>.
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

export default Trademark;
