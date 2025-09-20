import Image from "next/image";

function DisclaimerSection() {
  return (
    <div className="bg-[#E9E9E9] px-4 pt-8  md:px-8 md:py-6">
      <div className="mx-auto max-w-7xl">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <Image
            src="/logo.png"
            alt="The Tested List"
            width={120}
            height={40}
            className="h-8 w-auto md:h-10"
          />
        </div>

        {/* Health Disclaimer */}
        <div className="mb-6 md:mb-8">
          <h3 className="mb-3 text-sm font-bold text-gray-800 md:text-base">
            Health Disclaimer:
          </h3>
          <p className="text-xs leading-relaxed text-gray-600 md:text-sm md:leading-relaxed">
            The information provided on this website is for educational and
            informational purposes only and should not be taken as medical
            advice. It is not intended to replace consultation, diagnosis, or
            treatment from your physician or other qualified healthcare
            professional. Always speak with your doctor before starting,
            changing, or stopping any treatment or health regimen. The author
            and publisher are not responsible for any misuse or misunderstanding
            of the information on this site, nor for any direct or indirect
            loss, damage, or injury that may result. The U.S. Food and Drug
            Administration has not evaluated the statements on this site.
            Products and information discussed here are not intended to
            diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        {/* Marketing Disclosure */}
        <div className="mb-6 md:mb-8">
          <h3 className="mb-3 text-sm font-bold text-gray-800 md:text-base">
            Marketing Disclosure:
          </h3>
          <p className="text-xs leading-relaxed text-gray-600 md:text-sm md:leading-relaxed">
            This website may earn commissions from qualifying purchases made
            through Amazon or other affiliate links. The site owner has a
            financial relationship with some of the products and services
            mentioned, and may receive compensation when readers click links or
            make purchases.
          </p>
        </div>

        {/* Advertising Disclosure */}
        <div className="mb-6 md:mb-8">
          <h3 className="mb-3 text-sm font-bold text-gray-800 md:text-base">
            Advertising Disclosure:
          </h3>
          <p className="text-xs leading-relaxed text-gray-600 md:text-sm md:leading-relaxed">
            This website is an advertising marketplace, not a news publication.
            Any references to products or services are for comparison and
            informational purposes. Photographs of people shown on the site are
            models and not actual users unless otherwise stated. The site owner
            provides a platform where consumers can learn about and compare
            products; the owner does not manufacture or directly sell the
            products featured.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-2 md:mb-2">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600 md:justify-start md:gap-6 md:text-sm">
            <a href="/about" className="underline hover:text-gray-800">
              About Us
            </a>
            <a href="/contact" className="underline hover:text-gray-800">
              Get In Touch
            </a>
            <a href="/privacy" className="underline hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="/terms" className="underline hover:text-gray-800">
              Terms of Use
            </a>
          </div>
        </div>

        {/* Border line after navigation */}
        <div className="border-t border-gray-300"></div>
      </div>
    </div>
  );
}

export default DisclaimerSection;
