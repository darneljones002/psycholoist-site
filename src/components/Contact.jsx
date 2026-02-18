import headshot from "../assets/jones.jpg";

const PROVIDER = {
  secureIntakeUrl: "https://REPLACE-WITH-YOUR-SECURE-INTAKE-LINK",
  embedUrl: "",
  phone: "(770) 953-4744",
  email: "bgjones@pfpaga.com",
};

export default function Contact() {
  const hasEmbed = Boolean(PROVIDER.embedUrl);

  return (
    <section id="contact" className="py-16 bg-[var(--brand-sky)]/40">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold">Secure Contact / Intake</h2>

        {/* Provider Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6 border border-gray-100">
          <img
            src={headshot}
            alt="Bryana Gadis-Jones, PsyD"
            className="w-28 h-28 rounded-2xl object-cover ring-1 ring-black/10"
          />

          <div className="text-center sm:text-left">
            <h3 className="text-xl font-extrabold">
              Bryana Gadis-Jones, PsyD
            </h3>
            <p className="text-gray-600 font-semibold">
              Child & Adolescent Therapy
            </p>

            <p className="mt-2 text-gray-700">
              If you’re unsure whether therapy is appropriate, you’re welcome to
              reach out through the secure intake portal. Families will receive a
              response with next steps and availability.
            </p>
          </div>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">
          To protect your privacy, this website does not collect clinical
          information. Please use the secure portal below to submit an inquiry.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={PROVIDER.secureIntakeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Start Secure Intake
          </a>

          <a
            href={`tel:${PROVIDER.phone.replace(/[^\d+]/g, "")}`}
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 font-semibold"
          >
            Call Office
          </a>

          <a
            href={`mailto:${PROVIDER.email}`}
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 font-semibold"
          >
            Email (non-clinical)
          </a>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6 border border-gray-100">
          <h3 className="text-lg font-bold">Privacy Notice</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>• Please don’t include medical or behavioral details by email.</li>
            <li>• Use the secure intake portal for confidential information.</li>
            <li>• In an emergency, call 911 or go to the nearest emergency room.</li>
          </ul>
        </div>

        {/* Optional embedded secure form */}
        {hasEmbed && (
          <div className="mt-8 bg-white rounded-2xl shadow overflow-hidden border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <p className="font-bold">Secure Intake Form</p>
              <p className="text-sm text-gray-600">
                Hosted by our HIPAA-compliant provider. If it does not load,
                please use the button above.
              </p>
            </div>

            <div className="aspect-[3/4] md:aspect-[16/10]">
              <iframe
                title="Secure Intake"
                src={PROVIDER.embedUrl}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

        <p className="mt-8 text-gray-600">
          Phone: {PROVIDER.phone} • Email:{" "}
          <a className="underline" href={`mailto:${PROVIDER.email}`}>
            {PROVIDER.email}
          </a>
        </p>
      </div>
    </section>
  );
}       