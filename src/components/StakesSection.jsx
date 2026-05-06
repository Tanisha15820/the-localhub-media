import stakesImg from "../assets/stakes.png";

export default function StakesSection() {
  return (
    <section className="bg-bgMain py-20 md:py-24 px-6 md:px-16 font-main">

      {/* TOP CENTER HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
        
        <div style={{ marginBottom: 20 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(217,119,87,0.10)",
            border: "1px solid rgba(217,119,87,0.25)",
            borderRadius: 999,
            padding: "6px 18px",
            marginBottom: 16
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
              Stakes
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(2rem,4vw,3.2rem)",
            fontWeight: 800,
            color: "#1A1A1A",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            margin: "0 0 12px"
          }}>
            This isn't just growth. <br />
            <span style={{ color: "#D97757" }}>
              It's survival.
            </span>
          </h2>

          <p style={{
            color: "#8C8C8C",
            fontSize: "1rem",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7
          }}>
            The brands building systems today are the ones dominating tomorrow.
          </p>
        </div>
      </div>


      {/* BOTTOM GRID (CONTENT + IMAGE) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center -mt-4">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-5">
            Every month without a system is a month your competitor compounds.
          </p>

          <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-5">
            D2C is not slowing down — it's consolidating. The brands investing in{" "}
            <span className="text-textPrimary font-semibold">
              full-stack digital infrastructure
            </span>{" "}
            today will own the category in 18 months.
          </p>

          <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-8">
            The ones patching tactics will{" "}
            <span className="text-primary font-semibold">
              spend more to grow less.
            </span>
          </p>

          {/* Final Punch Line */}
          <p className="text-textPrimary text-lg md:text-xl font-semibold leading-snug mb-10">
            The question isn't whether you can afford to build this. <br />
            <span className="text-primary">
              It's whether you can afford not to.
            </span>
          </p>

          {/* CTA */}
          <button className="bg-primary text-white px-7 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
            Book a Strategy Call
          </button>
        </div>


        {/* RIGHT IMAGE */}
       <div className="relative flex justify-center md:justify-end -mt-12 md:-mt-20">
          
          {/* Glow effect */}
          <div className="absolute w-100 h-110 bg-primary/10 rounded-full blur-3xl"></div>

          <img
            src={stakesImg}
            alt="Growth visual"
            className="relative z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain animate-fadeUp hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}