

// import { useEffect, useRef, useState } from "react";

// export default function Reveal({ children, delay = 0, style = {}, className = "" }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       { threshold: 0.05 }
//     );

//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible
//           ? "translateY(0px) scale(1)"
//           : "translateY(60px) scale(0.97)",
//         transition: `
//           opacity   0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
//           transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
//         `,
//         willChange: "opacity, transform",
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, style = {}, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px) scale(1)"
          : "translateY(60px) scale(0.97)",
        transition: `
          opacity   0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
        `,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}