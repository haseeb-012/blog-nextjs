import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative flex h-[250px] items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat md:h-[350px]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-2xl font-bold md:text-4xl">
            ABOUT THE TESTED LIST
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          {/* Built on Trust Section */}
          <section className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-xl font-bold text-gray-800 md:text-2xl">
              Built on Trust, Made for You
            </h2>
            <div className="space-y-4 text-center text-sm leading-relaxed text-gray-600 md:text-base">
              <p>
                At The Tested List, we understand how overwhelming the online
                marketplace can feel — especially when every product claims to
                be &quot;the best&quot; and countless reviews can&apos;t be trusted. For adults
                45 and older who take their health, comfort, and money
                seriously, that confusion isn&apos;t just frustrating — it&apos;s costly.
              </p>
              <p>
                That&apos;s why we created The Tested List: a platform dedicated to
                real reviews, expert insights, and honest product comparisons.
                Our goal is simple — to help you cut through the noise and make
                confident decisions about the products that truly improve your
                daily life.
              </p>
            </div>
          </section>

          {/* Why We Exist Section */}
          <section className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-xl font-bold text-gray-800 md:text-2xl">
              Why We Exist
            </h2>
            <div className="space-y-4 text-center text-sm leading-relaxed text-gray-600 md:text-base">
              <p>
                Too often, online reviews are fake, misleading, or written by
                people who haven&apos;t even used the product. That leaves shoppers
                guessing — and too often, disappointed. The Tested List was
                founded to change that.
              </p>
              <p>
                We focus on clarity, transparency, and rigorous testing so that
                you don&apos;t waste time or money on products that don&apos;t work.
                Whether it&apos;s a sleep aid, a wellness tool, or a household
                essential, our reviews are designed to give you the single point
                of truth you can rely on.
              </p>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-xl font-bold text-gray-800 md:text-2xl">
              Our Mission
            </h2>
            <div className="space-y-4 text-center text-sm leading-relaxed text-gray-600 md:text-base">
              <p className="font-semibold text-gray-800">
                To empower adults 45+ with trusted reviews that simplify buying
                decisions and ensure lasting value.
              </p>
              <p>
                We believe you deserve more than hype. You deserve clear
                evaluations, unbiased comparisons, and trustworthy
                recommendations that help you live better, sleep better, and buy
                smarter. At The Tested List, we put integrity first — so you can
                shop with confidence.
              </p>
            </div>
          </section>

        </div>
      </div>
          <Footer />
    </div>
  );
}
