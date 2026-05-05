export default function ContactCTA() {
  return (
    <section className="w-full bg-[#161412] text-white py-20 px-6 md:px-12 font-main">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Ready to Improve Your{" "}
          <span className="text-[#D97757]">Digital Performance?</span>
        </h2>

        <p className="text-white/60 mt-4 text-sm md:text-base">
          Get a free consultation and learn how we optimise every channel for growth
        </p>

        {/* FORM */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-white/10 rounded-lg px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D97757] transition w-full md:w-auto"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent border border-white/10 rounded-lg px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D97757] transition w-full md:w-auto"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="bg-transparent border border-white/10 rounded-lg px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D97757] transition w-full md:w-auto"
          />

          <input
            type="text"
            placeholder="Website (Optional)"
            className="bg-transparent border border-white/10 rounded-lg px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D97757] transition w-full md:w-auto"
          />

          {/* BUTTON */}
          <button className="bg-[#D97757] text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-[#c86545] transition whitespace-nowrap">
            SUBMIT
          </button>
        </div>

        {/* STATS */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-white/70">

          <div className="flex items-center gap-2">
            <span className="text-[#D97757]">★</span>
            <span>16000+ Happy Clients</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#D97757]">🏆</span>
            <span>Award Winning Agency</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#D97757]">🚀</span>
            <span>7+ Years Experience</span>
          </div>

        </div>

      </div>
    </section>
  );
}