// src/pages/legal/Privacy.jsx
function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-white/40 mb-10">Last updated: July 2026</p>

      <Section title="1. Information We Collect">
        We may collect personal information such as name, email address, order
        details, reviews, and technical data like IP address and browser type.
      </Section>

      <Section title="2. How We Use Information">
        Information is used to process orders, improve user experience, provide
        support, and communicate updates or promotions.
      </Section>

      <Section title="3. Cookies">
        We use cookies to enhance site functionality and analytics. You may
        disable cookies through your browser settings.
      </Section>

      <Section title="4. Third-Party Services">
        We may use third-party services for payments, analytics, and logistics.
        These services follow their own privacy policies.
      </Section>

      <Section title="5. Data Security">
        Reasonable measures are taken to protect your data, but no method of
        transmission is completely secure.
      </Section>

      <Section title="6. Your Rights">
        You may request access, correction, or deletion of your data by
        contacting us.
      </Section>

      <Section title="7. Contact">
        For privacy concerns, email{" "}
        <span className="text-green-400">privacy@allin.com</span>.
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

export default Privacy;
