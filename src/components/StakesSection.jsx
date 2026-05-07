import stakesImg from "../assets/stakes.png";
import SectionHeader from "./SectionHeader";

export default function StakesSection() {
  return (
    <section className="bg-bgMain py-20 md:py-24 px-6 md:px-16 font-main">

      {/* TOP CENTER HEADING */}
      <SectionHeader
  tag="Stakes"
  title="This isn't just growth."
  highlight="It's survival."
  subtitle="The brands building systems today are the ones dominating tomorrow."
/>


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