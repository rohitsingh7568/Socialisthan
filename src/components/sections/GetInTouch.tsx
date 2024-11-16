import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage: "url('/images/cta-bg.jpg')", // Replace with your actual image path
      }}
      aria-label="cta"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <p className="text-lg font-semibold text-white mb-2">So What is Next?</p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 text-center">
          Are You Ready? Let's Get to Work!
        </h2>
        <Link
          href="#"
          className="inline-block px-6 py-3 bg-sky-500 text-white font-medium text-lg rounded-lg shadow hover:bg-sky-600 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
