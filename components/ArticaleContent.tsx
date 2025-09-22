import Image from "next/image";

function ArticleContent() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 xl:px-0">
      <div className="space-y-8 md:space-y-12">
        {/* Main Heading */}
        <div className="text-start">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
            We Tested the Most Popular Mouth Tapes, Here&apos;s Why{" "}
            <span className="block">Dr. RestRight Ranked #1</span>
          </h2>
        </div>

        {/* Hero Image - Single image from public folder */}
        <div className="flex justify-center">
          <div className="w-full max-w-7xl overflow-hidden rounded-lg md:rounded-xl">
            <Image
              src="/MouthTape.jpg"
              alt="Mouth tape testing comparison"
              width={300}
              height={300}
              className="h-auto w-full rounded-lg object-cover md:rounded-xl"
              // style={{ width: "auto", height: "auto" }}
              unoptimized
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-gray max-w-none text-sm leading-relaxed md:text-base md:leading-relaxed">
          <p className="mb-4 text-gray-700">
            I’ve tried it all: nose strips that peeled off by 2am, chin straps
            that made me look ridiculous, and those bulky mouth guards that
            shoved my jaw forward until it ached. So when I first heard about
            mouth tape, I thought it was just another TikTok fad.
          </p>

          <p className="mb-4 text-gray-700">
            But after testing Dr. RestRight, I realized this wasn’t a gimmick,
            it was the first product that actually delivered on every promise.
            It didn’t just silence the snoring; it turned bedtime into something
            I looked forward to. After a month, I can’t imagine sleeping without
            it.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Doctor Formulated */}
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="pt-2 text-sm font-bold text-gray-900 md:text-base">
                  Works From Night One
                </h4>
                <div className="px-0">
                  <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                    The very first night, my partner nudged me awake in
                    surprise, not because I was snoring, but because I wasn’t. I
                    woke up with no dry mouth, no morning headache, and, for the
                    first time in years, steady energy that lasted all day.
                  </p>
                </div>
              </div>
            </div>

            {/* Skin Safe Comfort */}
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 md:text-base">
                  Deeper Rest, Brighter Mornings
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  I never realized how broken my sleep had become until it
                  improved. With Dr. RestRight, I stopped waking up through the
                  night, and mornings no longer start with grogginess or endless
                  coffee.
                </p>
              </div>
            </div>

            {/* Works From Night One */}
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 md:text-base">
                  Doctor-Formulated With Aromatherapy
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  Here’s what sets Dr. RestRight apart. Each strip is infused
                  with lavender or chamomile-lavender, scents proven to calm the
                  nervous system and signal the body that it’s time to rest.
                  What began as tape turned into a nightly ritual I actually
                  looked forward to.
                </p>
              </div>
            </div>

            {/* Deeper Rest, Brighter Mornings */}
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 md:text-base">
                  Skin-Safe Comfort
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  With dermatologist-tested, hypoallergenic adhesive, Dr.
                  RestRight protects delicate skin. Even testers with eczema or
                  thinning skin reported no redness, irritation, or tugging —
                  just a secure, comfortable seal.
                </p>
              </div>
            </div>

            {/* Band-Aid & CPAP Friendly */}
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 md:text-base">
                  Breathe Easy, All Night
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  The breathable & stretchable design allows micro-airflow, so
                  you’ll never feel trapped if your nose clogs during the night.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 md:text-base">
                  Beard & CPAP Friendly
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  Unlike harsh tapes that yank at facial hair, Dr. RestRight
                  holds firm yet peels away gently without pulling hairs. For
                  CPAP users, it seals securely to prevent air leaks, making it
                  the perfect partner for uninterrupted therapy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="rounded-lg bg-gray-50 p-6">
          <p className="text-sm leading-relaxed text-gray-700 md:text-base">
            Even as a premium, doctor-formulated solution, Dr. RestRight still
            costs less than many competitors. And with{" "}
            <strong>bundles up to 50% OFF</strong>
            today, it’s the smartest investment you can make in your sleep this
            year.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
            For adults over 45 who want reliable relief and a calming bedtime
            ritual, Dr. RestRight stands above every other option.
          </p>
        </div>

        {/* Call to Action */}
        <div className=" bg-green-50 p-6 text-center">
          <button className="rounded-md bg-green-500 px-8 py-3 font-bold text-white transition-colors duration-200 hover:bg-green-600">
            Check Availability
          </button>
          <p className="mb-4 mt-2 text-sm text-gray-700">
            Save 35% OFF - Sale Ends Soon
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleContent;
