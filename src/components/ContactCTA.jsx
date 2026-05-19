
// import SectionHeader from "./SectionHeader";
// import Reveal from "./Reveal";

// export default function CTASection() {
//   return (
//     <section className="py-16 md:py-20 px-6 md:px-16 font-main" style={{ background: "#EBD2C1" }}>

//       <div className="max-w-4xl mx-auto text-center">

//         <SectionHeader
//           tag="Call to Action"
//           title="Ready to build something that"
//           highlight="compounds?"
//           subtitle="Book a free strategy call. We'll audit your digital presence and show you exactly where the growth is."
//         />

//         {/* Button + subtext */}
//         <Reveal delay={100}>
//           <div className="mt-8">
//  <a
//   href=" https://calendly.com/connect-kushgupta/screening-meeting"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="hdr-cta-btn inline-block bg-primary text-white px-7 py-3 rounded-full text-sm font-semibold shadow-md"
// >
//   Book your free strategy call
// </a>
//             <p className="text-textSecondary text-sm mt-3">
//               No pitch. No pressure. Just clarity on what's next.
//             </p>
//           </div>
//         </Reveal>

//         {/* Benefits */}
//         <Reveal delay={200}>
//           <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 text-xs md:text-sm text-[#5f5f5f]">

//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-primary"></span>
//               <span>No long-term lock-ins</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-primary"></span>
//               <span>Response within 24 hrs</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-primary"></span>
//               <span>ROI-first approach</span>
//             </div>

//           </div>
//         </Reveal>

//       </div>
//     </section>
//   );
// }




import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section
      className="py-16 md:py-20 px-6 md:px-16 font-main"
      style={{
        background:
          "linear-gradient(180deg, #f8fcff 0%, #eef7ff 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">

        <SectionHeader
          tag="Call to Action"
          title="Ready to build something that"
          highlight="compounds?"
          subtitle="Book a free strategy call. We'll audit your digital presence and show you exactly where the growth is."
        />

        {/* Button + subtext */}
        <Reveal delay={100}>
          <div className="mt-8">
            <a
              href="https://calendly.com/connect-kushgupta/screening-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
              style={{
                background: "#2096F3",
                color: "#FFFFFF",
                boxShadow: "0 12px 30px rgba(32,150,243,0.25)",
              }}
            >
              Book your free strategy call
            </a>

            <p
              className="text-sm mt-3"
              style={{ color: "#5f6b7a" }}
            >
              No pitch. No pressure. Just clarity on what's next.
            </p>
          </div>
        </Reveal>

        {/* Benefits */}
        <Reveal delay={200}>
          <div
            className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 text-xs md:text-sm"
            style={{ color: "#4b5563" }}
          >

            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#2096F3" }}
              ></span>
              <span>No long-term lock-ins</span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#2096F3" }}
              ></span>
              <span>Response within 24 hrs</span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#2096F3" }}
              ></span>
              <span>ROI-first approach</span>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}