

// import Reveal from "../components/Reveal";

// import {
//   EmailOutlined,
//   PhoneOutlined,
//   LocationOnOutlined,
//   ArrowOutward,
//   Facebook,
//   Instagram,
//   LinkedIn,
//   X,
// } from "@mui/icons-material";

// const quickLinks = [
//   { label: "About Us", link: "/about" },
//   { label: "Services", link: "/services" },
//   { label: "Contact Us", link: "/contact" },
// ];

// const services = [
//   "Digital Marketing",
//   "SEO Optimization",
//   "AEO(Answer Engine Optimization)",
//   "Performance Marketing",
//   "Brand Strategy",
//   "Social Media Marketing",  
// ];

// export default function Footer() {
//   return (
//     <footer className="relative bg-[#0f0604] overflow-hidden text-white">

//       {/* Gradient Glow */}
//       <div className="absolute top-[-180px] left-[-100px] w-[420px] h-[420px] bg-[#D97757]/10 blur-3xl rounded-full" />

//       <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] bg-[#D97757]/10 blur-3xl rounded-full" />

//       {/* Dot Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage:
//               "radial-gradient(#D97757 1px, transparent 1px)",
//             backgroundSize: "24px 24px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-24 pb-8">

//         {/* TOP SECTION */}
//         <div className="grid lg:grid-cols-[1.5fr_1fr_1.2fr] gap-14 border-b border-white/10 pb-14">

//           {/* LEFT */}
//           <Reveal>
//             <div>

//               {/* Logo */}
//               <h2 className="text-3xl md:text-4xl font-black tracking-tight">
//                 <span className="text-primary">ThelocalHub</span>
//                 <span className="text-white"> Media</span>
//               </h2>

//               {/* Description */}
//               <p className="mt-6 text-white/65 leading-[2] max-w-lg text-[1rem]">
//                 Dynamic world of digital marketing. We help brands
//                 grow with AI-powered strategies, performance
//                 marketing, and creative branding.
//               </p>

//               {/* Social Icons */}
//               <div className="flex items-center gap-4 mt-9">

//                 {[
//                   <Facebook fontSize="small" />,
//                   <Instagram fontSize="small" />,
//                   <LinkedIn fontSize="small" />,
//                   <X fontSize="small" />,
//                 ].map((icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="
//                       w-11 h-11 rounded-xl
//                       border border-white/10
//                       bg-white/[0.03]
//                       flex items-center justify-center
//                       text-white/70
//                       hover:bg-primary
//                       hover:border-primary
//                       hover:text-white
//                       hover:-translate-y-1
//                       transition-all duration-300
//                     "
//                   >
//                     {icon}
//                   </a>
//                 ))}

//               </div>

//             </div>
//           </Reveal>

//           {/* QUICK LINKS */}
//           <Reveal delay={100}>
//             <div>

//               <h3 className="text-[1.15rem] font-semibold mb-8 relative inline-block">
//                 Quick Links

//                 <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-primary" />
//               </h3>

//               <div className="space-y-5">

//                {quickLinks.map((item, i) => (
//   <a
//     key={i}
//     href={item.link}
//     className="
//       group flex items-center gap-3
//       text-white/60 hover:text-white
//       transition
//     "
//   >
//     <ArrowOutward
//       sx={{ fontSize: 16 }}
//       className="
//         text-primary
//         opacity-0 -translate-x-2
//         group-hover:opacity-100
//         group-hover:translate-x-0
//         transition-all duration-300
//       "
//     />

//     {item.label}
//   </a>
// ))}

//               </div>

//             </div>
//           </Reveal>

//           {/* CONTACT */}
//           <Reveal delay={200}>
//             <div>

//               <h3 className="text-[1.15rem] font-semibold mb-8 relative inline-block">
//                 Contact Us

//                 <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-primary" />
//               </h3>

//               <div className="space-y-7">

//                 {/* EMAIL */}
//                 <div className="flex items-start gap-4">

//                   <div
//                     className="
//                       w-11 h-11 rounded-xl shrink-0
//                       bg-white/[0.03]
//                       border border-white/10
//                       flex items-center justify-center
//                       text-primary
//                     "
//                   >
//                     <EmailOutlined sx={{ fontSize: 20 }} />
//                   </div>

//                   <div>
//                     <p className="text-white/40 text-sm mb-1">
//                       Email
//                     </p>

//                     <a
//                       href="mailto:info@thelocalhubmedia.com"
//                       className="text-white/80 hover:text-primary transition break-all"
//                     >
//                       info@thelocalhubmedia.com
//                     </a>
//                   </div>

//                 </div>

//                 {/* PHONE */}
//                 <div className="flex items-start gap-4">

//                   <div
//                     className="
//                       w-11 h-11 rounded-xl shrink-0
//                       bg-white/[0.03]
//                       border border-white/10
//                       flex items-center justify-center
//                       text-primary
//                     "
//                   >
//                     <PhoneOutlined sx={{ fontSize: 20 }} />
//                   </div>

//                   <div>
//                     <p className="text-white/40 text-sm mb-1">
//                       Phone
//                     </p>

//                     <div className="space-y-1">

//                       <a
//                         href="tel:+14373135874"
//                         className="block text-white/80 hover:text-primary transition"
//                       >
//                         +1 437-313-5874
//                       </a>

//                       <a
//                         href="tel:+919999887009"
//                         className="block text-white/80 hover:text-primary transition"
//                       >
//                         +91 9999887009
//                       </a>

//                     </div>
//                   </div>

//                 </div>

//                 {/* ADDRESS */}
//                 <div className="flex items-start gap-4">

//                   <div
//                     className="
//                       w-11 h-11 rounded-xl shrink-0
//                       bg-white/[0.03]
//                       border border-white/10
//                       flex items-center justify-center
//                       text-primary
//                     "
//                   >
//                     <LocationOnOutlined sx={{ fontSize: 20 }} />
//                   </div>

//                   <div>
//                     <p className="text-white/40 text-sm mb-1">
//                       Address
//                     </p>

//                     <p className="text-white/70 leading-[1.9]">
//                       30 Fenley Drive,
//                       <br />
//                       Etobicoke, M9R 1M4,
//                       <br />
//                       Canada
//                     </p>
//                   </div>

//                 </div>

//               </div>

//             </div>
//           </Reveal>

//         </div>

//         {/* SERVICES STRIP */}
//         <div className="py-8 border-b border-white/10">

//           <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">

//             {services.map((item, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="
//                   text-white/45 text-sm tracking-wide
//                   hover:text-primary
//                   transition
//                 "
//               >
//                 {item}
//               </a>
//             ))}

//           </div>

//         </div>

//         {/* BOTTOM */}
//         <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

//           <p className="text-white/35 text-sm text-center md:text-left">
//             © 2026 ThelocalHub Media. All rights reserved.
//           </p>

//           <div className="flex items-center gap-6 text-sm text-white/35">

//             <a
//               href="#"
//               className="hover:text-primary transition"
//             >
//               Privacy Policy
//             </a>

//             <a
//               href="#"
//               className="hover:text-primary transition"
//             >
//               Terms & Conditions
//             </a>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }


import Reveal from "../components/Reveal";

import {
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
  ArrowOutward,
  Facebook,
  Instagram,
  LinkedIn,
  X,
} from "@mui/icons-material";

const quickLinks = [
  { label: "About Us", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Contact Us", link: "/contact" },
];

const services = [
  "Digital Marketing",
  "SEO Optimization",
  "AEO(Answer Engine Optimization)",
  "Performance Marketing",
  "Brand Strategy",
  "Social Media Marketing",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#f8fcff] overflow-hidden text-[#110429]">

      {/* Gradient Glow */}
      <div className="absolute top-[-180px] left-[-100px] w-[420px] h-[420px] bg-[#2096F3]/10 blur-3xl rounded-full" />

      <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] bg-[#2096F3]/10 blur-3xl rounded-full" />

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#2096F3 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-24 pb-8">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-[1.5fr_1fr_1.2fr] gap-14 border-b border-[#110429]/10 pb-14">

          {/* LEFT */}
          <Reveal>
            <div>

              {/* Logo */}
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                <span className="text-[#2096F3]">ThelocalHub</span>
                <span className="text-[#110429]"> Media</span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#110429]/65 leading-[2] max-w-lg text-[1rem]">
                Dynamic world of digital marketing. We help brands
                grow with AI-powered strategies, performance
                marketing, and creative branding.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-9">

                {[
                  <Facebook fontSize="small" />,
                  <Instagram fontSize="small" />,
                  <LinkedIn fontSize="small" />,
                  <X fontSize="small" />,
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      w-11 h-11 rounded-xl
                      border border-[#2096F3]/10
                      bg-white
                      flex items-center justify-center
                      text-[#110429]/70
                      hover:bg-[#2096F3]
                      hover:border-[#2096F3]
                      hover:text-white
                      hover:-translate-y-1
                      shadow-sm
                      transition-all duration-300
                    "
                  >
                    {icon}
                  </a>
                ))}

              </div>

            </div>
          </Reveal>

          {/* QUICK LINKS */}
          <Reveal delay={100}>
            <div>

              <h3 className="text-[1.15rem] font-semibold mb-8 relative inline-block text-[#110429]">
                Quick Links

                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#2096F3]" />
              </h3>

              <div className="space-y-5">

                {quickLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="
                      group flex items-center gap-3
                      text-[#110429]/65 hover:text-[#2096F3]
                      transition
                    "
                  >
                    <ArrowOutward
                      sx={{ fontSize: 16 }}
                      className="
                        text-[#2096F3]
                        opacity-0 -translate-x-2
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all duration-300
                      "
                    />

                    {item.label}
                  </a>
                ))}

              </div>

            </div>
          </Reveal>

          {/* CONTACT */}
          <Reveal delay={200}>
            <div>

              <h3 className="text-[1.15rem] font-semibold mb-8 relative inline-block text-[#110429]">
                Contact Us

                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#2096F3]" />
              </h3>

              <div className="space-y-7">

                {/* EMAIL */}
                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11 h-11 rounded-xl shrink-0
                      bg-white
                      border border-[#2096F3]/10
                      flex items-center justify-center
                      text-[#2096F3]
                      shadow-sm
                    "
                  >
                    <EmailOutlined sx={{ fontSize: 20 }} />
                  </div>

                  <div>
                    <p className="text-[#110429]/45 text-sm mb-1">
                      Email
                    </p>

                    <a
                      href="mailto:info@thelocalhubmedia.com"
                      className="text-[#110429]/80 hover:text-[#2096F3] transition break-all"
                    >
                      info@thelocalhubmedia.com
                    </a>
                  </div>

                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11 h-11 rounded-xl shrink-0
                      bg-white
                      border border-[#2096F3]/10
                      flex items-center justify-center
                      text-[#2096F3]
                      shadow-sm
                    "
                  >
                    <PhoneOutlined sx={{ fontSize: 20 }} />
                  </div>

                  <div>
                    <p className="text-[#110429]/45 text-sm mb-1">
                      Phone
                    </p>

                    <div className="space-y-1">

                      <a
                        href="tel:+14373135874"
                        className="block text-[#110429]/80 hover:text-[#2096F3] transition"
                      >
                        +1 437-313-5874
                      </a>

                      <a
                        href="tel:+919999887009"
                        className="block text-[#110429]/80 hover:text-[#2096F3] transition"
                      >
                        +91 9999887009
                      </a>

                    </div>
                  </div>

                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11 h-11 rounded-xl shrink-0
                      bg-white
                      border border-[#2096F3]/10
                      flex items-center justify-center
                      text-[#2096F3]
                      shadow-sm
                    "
                  >
                    <LocationOnOutlined sx={{ fontSize: 20 }} />
                  </div>

                  <div>
                    <p className="text-[#110429]/45 text-sm mb-1">
                      Address
                    </p>

                    <p className="text-[#110429]/70 leading-[1.9]">
                      30 Fenley Drive,
                      <br />
                      Etobicoke, M9R 1M4,
                      <br />
                      Canada
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </Reveal>

        </div>

        {/* SERVICES STRIP */}
        <div className="py-8 border-b border-[#110429]/10">

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">

            {services.map((item, i) => (
              <a
                key={i}
                href="#"
                className="
                  text-[#110429]/45 text-sm tracking-wide
                  hover:text-[#2096F3]
                  transition
                "
              >
                {item}
              </a>
            ))}

          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-[#110429]/35 text-sm text-center md:text-left">
            © 2026 ThelocalHub Media. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-[#110429]/35">

            <a
              href="#"
              className="hover:text-[#2096F3] transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-[#2096F3] transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}