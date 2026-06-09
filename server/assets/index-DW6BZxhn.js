import { jsxs, jsx } from "react/jsx-runtime";
import { M as MetroHeader, T as TrustBar, A as AboutSection, I as InventorySection, W as WhySection, b as TestimonialsSection, P as ProcessSection, E as EnquirySection, F as FAQSection, C as CTASection, H as HappyCustomersSection, a as MetroFooter, S as StickyContact } from "./MetroSections-toK0Y1Xq.js";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "@tanstack/react-router";
const heroSedan = "/metro-auto-bloom/assets/hero-sedan-CrtIhbi0.jpg";
const heroSuv = "/metro-auto-bloom/assets/hero-suv-DyNCl_6v.jpg";
const heroHandover = "/metro-auto-bloom/assets/hero-handover-CrIxU4L-.jpg";
const slides = [
  {
    img: heroSedan,
    eyebrow: "Premium Pre-Owned",
    title: "Find Your Perfect Pre-Owned Car",
    desc: "Certified used cars with complete transparency and trusted quality in Vijayawada.",
    cta1: { label: "View Inventory", href: "#inventory" },
    cta2: { label: "Book Test Drive", href: "#contact" }
  },
  {
    img: heroSuv,
    eyebrow: "Inspected. Verified. Trusted.",
    title: "Drive Home With Confidence",
    desc: "Every vehicle is thoroughly inspected and verified before delivery.",
    cta1: { label: "Browse Cars", href: "#inventory" },
    cta2: { label: "Get Finance Assistance", href: "#contact" }
  },
  {
    img: heroHandover,
    eyebrow: "Vijayawada's #1 Dealer",
    title: "Trusted Used Car Dealer in Vijayawada",
    desc: "Hundreds of satisfied customers choose Metro Cars for reliability and value.",
    cta1: { label: "Explore Cars", href: "#inventory" },
    cta2: { label: "Contact Us", href: "#contact" }
  }
];
function MetroHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6e3);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 1.08 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 },
        transition: { duration: 1.4, ease: "easeOut" },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: s.img,
              alt: s.title,
              className: "w-full h-full object-cover",
              width: 1920,
              height: 1080
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" })
        ]
      },
      i
    ) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full container mx-auto px-4 lg:px-8 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl pt-20", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.8, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-[var(--brand-orange)] animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] font-semibold text-white", children: s.eyebrow })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-6xl text-white leading-[0.95] uppercase", children: s.title.split(" ").map((w, idx) => /* @__PURE__ */ jsxs("span", { className: idx === 2 ? "text-gradient-orange" : "", children: [
            w,
            " "
          ] }, idx)) }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed", children: s.desc }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: s.cta1.href,
                className: "group inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-bold uppercase tracking-wide text-sm transition-all hover:scale-105 shadow-[0_20px_50px_-15px_rgba(255,90,0,0.7)]",
                style: { background: "var(--gradient-orange)" },
                children: [
                  s.cta1.label,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-transform" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: s.cta2.href,
                className: "inline-flex items-center gap-2 px-7 py-4 rounded-full glass-card text-white font-bold uppercase tracking-wide text-sm hover:bg-white/15 transition-all",
                children: s.cta2.label
              }
            )
          ] })
        ]
      },
      i
    ) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 inset-x-0 z-10 container mx-auto px-4 lg:px-8 flex items-end justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: slides.map((_, idx) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setI(idx),
          "aria-label": `Slide ${idx + 1}`,
          className: "h-1 rounded-full bg-white/30 overflow-hidden transition-all",
          style: { width: idx === i ? 64 : 24 },
          children: idx === i && /* @__PURE__ */ jsx(
            motion.span,
            {
              initial: { width: 0 },
              animate: { width: "100%" },
              transition: { duration: 6, ease: "linear" },
              className: "block h-full bg-[var(--brand-orange)]"
            },
            i
          )
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setI((p) => (p - 1 + slides.length) % slides.length),
            className: "size-12 rounded-full glass-card text-white flex items-center justify-center hover:bg-white/20",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-5" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setI((p) => (p + 1) % slides.length),
            className: "size-12 rounded-full glass-card text-white flex items-center justify-center hover:bg-white/20",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-5" })
          }
        )
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(MetroHeader, {}),
    /* @__PURE__ */ jsx(MetroHero, {}),
    /* @__PURE__ */ jsx(TrustBar, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(InventorySection, {}),
    /* @__PURE__ */ jsx(WhySection, {}),
    /* @__PURE__ */ jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsx(ProcessSection, {}),
    /* @__PURE__ */ jsx(EnquirySection, {}),
    /* @__PURE__ */ jsx(FAQSection, {}),
    /* @__PURE__ */ jsx(CTASection, {}),
    /* @__PURE__ */ jsx(HappyCustomersSection, {}),
    /* @__PURE__ */ jsx(MetroFooter, {}),
    /* @__PURE__ */ jsx(StickyContact, {})
  ] });
}
export {
  Index as component
};
