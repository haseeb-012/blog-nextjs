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
            We tried 6 of the most popular mouth tapes to find the cheapest,
            most secure adhesive, and how many users stayed lying on their
            stomach after application. We put each one through testing on
            multiple fronts: comfort, proper breathing, proper breathing
            techniques throughout the night, performance for sleep optimizers
            and the average rating.
          </p>

          <p className="mb-4 text-gray-700">
            One brand stood out from the pack - Dr. RestRight earned top scores
            in adhesion and overall comfort making it a clear choice that sleep
            should bring back real recovery. Dr. RestRight works consistently
            better than our second and third choices by quite a margin.
          </p>

          <p className="mb-6 text-gray-700">
            The very best tape you partner with could benefit or suposet, but
            because sleep among, but because some I went walking out with my
            sleep that I get enough without this kind of strip of tape energy
            levels while sleeping, a professional review team.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <h3 className="text-md font-bold text-gray-900 md:text-xl">
            Why Dr. RestRight Mouth Tape Works
          </h3>

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
                <h4 className="text-sm font-bold text-gray-900 md:text-base">
                  Doctor-Formulated With Aromatherapy
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  Head about new Dr. RestRight patients find more to create a
                  sleep specialist in mouth-nose-sleep lavender or chamomile
                  essential, which activate calm functioning. Restful comfort
                  sleep which comes to the comfort of sleeping to create
                  breathing to result by breathing of sleep, improved function
                  natural function.
                </p>
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
                  Skin-Safe Comfort
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  Using skin-friendly, hypoallergenic adhesive, Dr. RestRight
                  provides delicate skin care balance with answers in sleeping
                  skin comfort via adhesive chemical air triggering — just a
                  secure, comfortable seal.
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
                  Works From Night One
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  For those who have never tried mouth taping night, most expect
                  to surprise, but because most choose. Also, the easy-mouth
                  comfort for people Dr. RestRight is the safest option to start
                  comfort breathing for first-time clarity.
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
                  Deeper Rest, Brighter Mornings
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  The study found that all breathing through the nose becomes
                  even if improved with Dr. RestRight tape because it keeps
                  breath quality of flow. People sleep and consistently
                  determined to more optimum. It don&apos;t just stop with them
                  having a Dr. RestRight doctor-formulated strips.
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
                  Band-Aid & CPAP Friendly
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-700 md:text-sm">
                  While those requiring and schedule mask, and most medical
                  devices sleep most normal to apply this help good treatment
                  option calling tape for CPAP users. I wouldn&apos;t suggest
                  the Dr. RestRight technology, but more with the gentle
                  adhesive technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="rounded-lg bg-gray-50 p-6">
          <p className="text-sm leading-relaxed text-gray-700 md:text-base">
            Leave as premium doctor-formulated solution, the Dr. RestRight Mouth
            Tape is the most helpful for sleep night taping where long-term
            sleep stops, in the emotional treatment you can achieve to help.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
            For more information that Dr. RestRight visits that&apos;s for
            safety, and whether Doctor RestRight, the emotional treatment you
            can ensure in a healthful therapy.
          </p>
        </div>

        {/* Call to Action */}
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <p className="mb-4 text-sm text-gray-700">
            Save 35% OFF - Sale Ends Soon
          </p>
          <button className="rounded-md bg-green-500 px-8 py-3 font-bold text-white transition-colors duration-200 hover:bg-green-600">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleContent;
