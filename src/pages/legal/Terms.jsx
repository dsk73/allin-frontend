// src/pages/legal/Terms.jsx
function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
      <p className="text-sm text-white/40 mb-10">Last updated: July 2026</p>

      <Section title="1. Introduction">
        By accessing or using ALLiN, you agree to be bound by these Terms of
        Use. If you do not agree, please discontinue use of the website.
      </Section>

      <Section title="2. Eligibility">
        You must be at least 18 years old or have legal permission to use this
        website.
      </Section>

      <Section title="3. Use of Website">
        You agree to use this website only for lawful purposes and in a manner
        that does not harm or disrupt the platform.
      </Section>

      <Section title="4. Products & Orders">
        Product availability, pricing, and descriptions may change without
        notice. ALLiN reserves the right to refuse or cancel any order.
      </Section>

      <Section title="5. Intellectual Property">
        All content, designs, logos, images, and text on this website are the
        property of ALLiN and may not be used without prior written permission.
      </Section>

      <Section title="6. Limitation of Liability">
        ALLiN shall not be liable for any indirect or consequential damages
        arising from your use of the website.
      </Section>

      <Section title="7. Governing Principles">
        These terms are governed by generally accepted international commercial
        principles.
      </Section>

      <Section title="8. Contact">
        For questions regarding these terms, contact us at{" "}
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

export default Terms;
