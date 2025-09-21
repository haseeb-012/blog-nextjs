import Image from "next/image";

function AuthorSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 xl:px-0">
      <div className="overflow-hidden rounded-lg shadow-lg ">
        {/* Dark header section */}
        <div className="bg-gray-900 px-4 py-4 md:px-8 md:py-6">
          <div className="flex items-center justify-between">
            {/* Left side - Product info and pricing */}
            <div className="text-white">
              <h3 className="mb-2 text-base font-bold md:text-xl">
                #1 - Dr. RestRight Mouth Tape
              </h3>
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-lg font-bold text-green-400 md:text-2xl">
                  $23.99
                </span>
                <span className="text-sm text-red-400 line-through md:text-lg">
                  $29.99
                </span>
              </div>
            </div>

            {/* Right side - Visit Site button */}
            <button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-green-600 md:px-10 md:py-4 md:text-lg">
              VISIT SITE
            </button>
          </div>
        </div>

        {/* Author section */}
        <div className="bg-gray-100 px-4 py-4 md:px-8 md:py-8">
          {/* Author avatar and name section */}
          <div className="flex items-start space-x-3 md:space-x-6">
            {/* Author avatar */}
            <div className="flex-shrink-0">
              <Image
                src="/dr.png"
                alt="Mark Reynolds"
                width={80}
                height={80}
                className="h-16 w-16 rounded-full object-cover md:h-24 md:w-24"
                unoptimized
              />
            </div>

            {/* Author info only */}
            <div className="flex-1">
              <div className="mb-3 md:mb-4">
                <p className="mb-2 text-sm text-gray-600 md:text-lg">
                  Written by:{" "}
                  <span className="font-bold text-gray-900">Mark Reynolds</span>
                </p>

                {/* Star rating */}
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      className="h-4 w-4 md:h-6 md:w-6"
                      fill="#FFD700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Author bio - Full width below the avatar */}
          <div className="mt-4">
            <p className="text-sm leading-relaxed text-gray-700 md:text-lg md:leading-relaxed">
              Mark Reynolds is a wellness researcher and sleep product reviewer
              at The Tested List. With more than a decade of experience testing
              sleep aids and lifestyle solutions, he focuses on finding products
              that deliver both comfort and proven results. His reviews are
              designed to help adults — especially those navigating sleep
              challenges in their 40s, 50s, and beyond — cut through the noise,
              reduce snoring, and finally enjoy the kind of deep, restorative
              rest that makes every day feel better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorSection;
