import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative flex h-[300px] items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat md:h-[400px]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            PRIVACY POLICY
          </h1>
          <p className="text-sm text-neutral-50 md:text-base">
            Last Updated - 15 Sept 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Information We Collect */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              1. Information We Collect
            </h2>
            <div className="text-center">
              <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                When you interact with the Site, we may collect:
              </p>
              <ul className="mb-6 list-inside list-disc space-y-3 text-sm leading-relaxed text-gray-700 md:text-base">
                <li>
                  <strong>Personal details you provide</strong> (name, address,
                  email, phone, payment information) when you make a purchase,
                  create an account, or contact us.
                </li>
                <li>
                  <strong>Technical information</strong> such as your IP
                  address, browser type, device, and operating system when you
                  browse the Site.
                </li>
                <li>
                  <strong>Usage data</strong> including pages visited, time
                  spent, clicks, and referring websites.
                </li>
                <li>
                  <strong>Marketing preferences</strong> if you opt-in to
                  receive newsletters, product updates, or promotional offers.
                </li>
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-gray-700 md:text-base">
                We may disclose information to law enforcement or government
                authorities if required by law or to comply with a valid legal
                request.
              </p>
            </div>
          </section>

          {/* Consent */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              2. Consent
            </h2>
            <div className="text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p className="mb-4">
                When you provide personal information to complete a transaction,
                verify a payment, arrange a delivery, or request a service, you
                consent to our collection and use of that information for that
                specific purpose only.
              </p>
              <p className="mb-6">
                If we request your information for secondary purposes (such as
                marketing), we will ask for your explicit consent or provide you
                with the option to decline.
              </p>
              <div className="mb-4">
                <h3 className="mb-2 font-semibold text-gray-800">
                  How to withdraw consent:
                </h3>
                <p>
                  If you change your mind, you can withdraw consent at any time
                  by contacting us at privacy@thetestedlist.com.
                </p>
              </div>
            </div>
          </section>

          {/* Disclosure of Information */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              3. Disclosure of Information
            </h2>
            <div className="text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We may disclose your personal information if required by law, if
                you violate our Terms of Use, or in connection with protecting
                our rights, property, or safety.
              </p>
            </div>
          </section>

          {/* Payments */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              4. Payments
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                If you make a purchase, your payment details are processed
                through secure third-party payment gateways that comply with
                PCI-DSS standards (set by Visa, Mastercard, American Express,
                Discover). We do not store your full credit card details.
              </p>
              <p>
                Our site may link to external websites that are not operated by
                us. Please be aware that we have no control over the content and
                policies of those sites, and cannot accept responsibility or
                liability for their respective practices.
              </p>
              <p>
                If our site or this document contains links to other sites and
                resources provided by third parties, do not communicate with the
                providers or operators of those external sites through our site.
              </p>
            </div>
          </section>

          {/* Third-Party Services & Links */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              5. Third-Party Services & Links
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We may use trusted third-party providers (e.g., hosting,
                analytics, advertising, or payment processors). These providers
                collect, use, and disclose your information only as necessary to
                perform their services.
              </p>
              <p>
                However, some providers may be located in jurisdictions
                different from Spain. If you engage in a transaction with such
                providers, your information may be subject to those
                jurisdictions’ laws.
              </p>
              <p>
                Our Site may link to external websites. Once you leave our Site,
                this Privacy Policy no longer applies. We are not responsible
                for the practices of third-party websites. Please review their
                privacy policies.
              </p>
            </div>
          </section>

          {/* Security */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              6. Security
            </h2>
            <div className="text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We use industry-standard safeguards to protect your personal
                information against loss, misuse, unauthorized access,
                disclosure, alteration, or destruction. Sensitive data such as
                credit card details are encrypted via SSL and stored with
                AES-256 encryption.
              </p>
              <p>
                Please note that no method of transmission or storage over the
                Internet is 100% secure. While we follow PCI-DSS and industry
                best practices, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Age of Consent */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              7. Age of Consent
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                By using this Site, you confirm that you are at least the legal
                age of majority in your country of residence, or that you are
                the legal age of majority and have provided consent for any
                minor dependents to use this Site.
              </p>
            </div>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              8. Changes to This Privacy Policy
            </h2>
            <div className="text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We reserve the right to update this Privacy Policy at any time.
                Changes will take effect immediately upon posting. If we make
                material updates, we will post a notice on this page.
              </p>
              <p>
                If The Tested List, S.L. is acquired or merged with another
                company, your information may be transferred to the new entity
                so that we may continue providing services to you.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
