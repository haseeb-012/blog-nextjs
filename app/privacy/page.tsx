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
        <div className="mx-auto max-w-6xl">
          {/* Information We Collect */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              1. Information We Collect
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                <strong>Personal details you provide:</strong> Names, addresses,
                email addresses, payment information, order information and
                purchase content or accounts, consumer preferences, and other
                details you choose to provide.
              </p>
              <p>
                <strong>Technical information:</strong> IP address, browser type
                and version, time zone setting and location, browser plug-in
                types and versions, operating system and platform, and other
                technology on the devices you use to access this website.
              </p>
              <p>
                <strong>Marketing preferences:</strong> Your opt-in to receive
                commercial communications from us and third-party marketing
                partners, email open rates and click through rates.
              </p>
              <p>
                By providing this information to us directly or through our
                platform provider, you consent to the collection and use of your
                information as described below and in accordance with the
                applicable law.
              </p>
            </div>
          </section>

          {/* Consent */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              2. Consent
            </h2>
            <div className="text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                If we request your information to subscribe to special events we
                will receiving ads and other marketing information, we will
                utilize the personal information and preferences contained
                within that response to provide better recommendations and
                information to you.
              </p>
            </div>
          </section>

          {/* Use */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              3. Use
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We may choose your personal information if required to do so by
                law or if we believe that such action is necessary to: (a)
                conform to legal regulations or comply with legal process; (b)
                protect our rights or property; (c) prevent a crime or protect
                public safety; (d) protect the personal safety of users.
              </p>
              <p>
                If you make a purchase, your personal details are processed
                through a payment portal which processes payment in our US
                payment service(s) your data from the first transaction,
                however, is retained at all points and is shared automatically.
                We utilize a secure payment portal using all appropriate
                security protocols.
              </p>
            </div>
          </section>

          {/* Third-Party Services & Links */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              4. Third-Party Services & Links
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We may use trusted third-party services that collect, monitor,
                and analyze this type of information in order to increase our
                service&apos;s functionality. These third-party service
                providers have their own privacy policies addressing how they
                use such information.
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

          {/* Security */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              5. Security
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We have processes systems against these against unauthorized
                access, unauthorized alteration, disclosure or destruction of
                your data and will improve to use all necessary security
                measures to safeguard customer information against loss, theft
                and misuse, as well as against unauthorized access, alteration,
                disclosure or destruction.
              </p>
              <p>
                Personal information stored on a provider&apos;s server is
                secured by encryption and password, and the server is monitored
                24/7.
              </p>
              <p>
                By using this Site, you confirm that you agree to our terms for
                any or all instances and/or residents or that you alert the
                legal representatives if they are the legal owners and users of
                our information or if you operate any systems similar to ours.
                CONSUMER MUST FIRST CONFIRM.
              </p>
            </div>
          </section>

          {/* Contact & Appeals */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              6. Contact & Appeals
            </h2>
            <div className="text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                For any requests regarding this policy, please contact us at the
                contact information below. Do notify the legal manager if you
                prefer another contact option.
              </p>
            </div>
          </section>

          {/* Disclosure of Information */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              7. Disclosure of Information
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                In certain situations, we may be required to disclose personal
                data in response to lawful requests by public authorities,
                including to meet national security or law enforcement
                requirements.
              </p>
              <p>
                We may disclose your Personal Information in the good faith
                belief that such action is necessary to: comply with a legal
                obligation; protect and defend our rights or property; prevent
                or investigate possible wrongdoing in connection with the
                service; protect the personal safety of users of the service or
                the public; protect against legal liability.
              </p>
            </div>
          </section>

          {/* Retention */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              8. Retention
            </h2>
            <div className="text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We will retain your Personal Information only for as long as is
                necessary for the purposes set out in this Privacy Policy. We
                will retain and use your Personal Information to the extent
                necessary to comply with our legal obligations, resolve
                disputes, and enforce our legal agreements and policies.
              </p>
            </div>
          </section>

          {/* Third-Party Services & Uses */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              9. Third-Party Services & Uses
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                Our service may contain links to other sites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party&apos;s site. We strongly advise you
                to review the Privacy Policy of every site you visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party sites
                or services.
              </p>
            </div>
          </section>

          {/* Age of Consent */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              10. Age of Consent
            </h2>
            <div className="text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                By using this site, you represent that you are at least the age
                of majority in your state or province of residence, or that you
                are the age of majority in your state or province of residence
                and you have given us your consent to allow any of your minor
                dependents to use this site.
              </p>
            </div>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-8 rounded-lg p-6 md:mb-12">
            <h2 className="mb-4 text-center text-lg font-bold text-gray-800 md:text-xl">
              11. Changes to This Privacy Policy
            </h2>
            <div className="space-y-3 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;last updated&quot; date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
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
