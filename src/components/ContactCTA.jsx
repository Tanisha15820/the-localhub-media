export default function CTASection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-16 font-main" style={{ background: "#EBD2C1" }}>

      <div className="max-w-4xl mx-auto text-center">

        {/* Top Label */}
        <div style={{ marginBottom: 18 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(217,119,87,0.12)",
            border: "1px solid rgba(217,119,87,0.25)",
            borderRadius: 999,
            padding: "5px 16px",
            marginBottom: 14
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#D97757"
            }} />
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#D97757",
              letterSpacing: "0.14em",
              textTransform: "uppercase"
            }}>
              Call to action
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: "clamp(1.8rem,4vw,3rem)",
            fontWeight: 800,
            color: "#1A1A1A",
            lineHeight: 1.15,
            margin: "0 0 10px"
          }}>
            Ready to build something that{" "}
            <span style={{ color: "#D97757" }}>
              compounds?
            </span>
          </h2>

          {/* Subtext */}
          <p style={{
            color: "#6F6F6F",
            fontSize: "0.95rem",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Book a free strategy call. We'll audit your digital presence and
            show you exactly where the growth is.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="bg-primary text-white px-7 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.05] transition-all duration-300">
            Book your free strategy call
          </button>

          <p className="text-textSecondary text-sm mt-3">
            No pitch. No pressure. Just clarity on what's next.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 text-xs md:text-sm text-[#5f5f5f]">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>No long-term lock-ins</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>Response within 24 hrs</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>ROI-first approach</span>
          </div>

        </div>

      </div>
    </section>
  );
}