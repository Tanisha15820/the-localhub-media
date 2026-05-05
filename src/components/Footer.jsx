import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white font-main">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* BRAND */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-[#D97757] mb-4">
            thelocalHub media
          </h2>

          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Dynamic world of digital marketing. We help brands grow with AI-powered strategies,
            performance marketing, and creative branding.
          </p>

          {/* CONTACT */}
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <p>
              <span className="text-[#D97757]">Email:</span> info@thelocalhubmedia.com
            </p>
            <p>
              <span className="text-[#D97757]">Phone:</span> +1 437-313-5874
            </p>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-4 hover:text-[#D97757] transition">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="hover:text-[#D97757] cursor-pointer transition">About</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">Team</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">Career</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4 hover:text-[#D97757] transition">
            Support
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="hover:text-[#D97757] cursor-pointer transition">Help Center</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">Contact Sales</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">Product Knowledge</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4 hover:text-[#D97757] transition">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="hover:text-[#D97757] cursor-pointer transition">Projects</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">Testimonials</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">Our Process</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">Pricing</li>
            <li className="hover:text-[#D97757] cursor-pointer transition">FAQs</li>
          </ul>
        </div>
      </div>

      {/* SOCIAL + COPYRIGHT SECTION */}
      <div className="border-t border-white/10 py-10 relative before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#D97757] before:to-transparent">

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* SOCIAL ICONS */}
          <div className="flex gap-8">

            <a href="#" className="text-white/60 hover:text-[#D97757] transition text-3xl">
              <FaInstagram />
            </a>

            <a href="#" className="text-white/60 hover:text-[#D97757] transition text-3xl">
              <FaFacebookF />
            </a>

            <a href="#" className="text-white/60 hover:text-[#D97757] transition text-3xl">
              <FaXTwitter />
            </a>

          </div>

          {/* COPYRIGHT */}
          <p className="text-white/40 text-sm text-center">
            © thelocalHub media. All Rights Reserved.
          </p>
        </div>
      </div>

    

    </footer>
  );
}