import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative flex h-[300px] items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat md:h-[400px]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">GET IN TOUCH</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-4 py-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
              We&apos;d love to hear from you! Whether you have questions, requests
              for product reviews, or need specific information, feel free to
              reach out—your feedback helps us grow.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
