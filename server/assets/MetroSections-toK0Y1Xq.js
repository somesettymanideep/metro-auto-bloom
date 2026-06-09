import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Phone, X, Menu, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ChevronUp, Car, ShieldCheck, Users, Star, Award, CheckCircle2, ArrowRight, Calendar, Fuel, Settings2, Gauge, FileSearch, Tag, Banknote, Headphones, Search, ClipboardCheck, FileText, KeyRound, ChevronDown, VolumeX, Volume2, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
const url$c = "/__l5e/assets-v1/3ce4c91a-1762-4f4e-b482-97411a536e0a/metro-cars-logo.png";
const logoAsset = {
  url: url$c
};
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#inventory", label: "Inventory" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];
function MetroHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/95 backdrop-blur-xl border-b border-white/10 py-2" : "bg-transparent py-4"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "#home", className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logoAsset.url,
              alt: "Metro Cars Vijayawada",
              className: "h-16 lg:h-20 w-auto drop-shadow-[0_0_20px_rgba(255,90,0,0.4)]"
            }
          ) }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: l.href,
              className: "px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/90 hover:text-[var(--brand-orange)] transition-colors relative group",
              children: [
                l.label,
                /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--brand-orange)] transition-all group-hover:w-2/3" })
              ]
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:+919059987777",
                className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold transition-all",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "size-4" }),
                  " Call Now"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wa.me/919059987777",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,90,0,0.6)] transition-all hover:scale-105",
                style: { background: "var(--gradient-orange)" },
                children: [
                  /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "size-4", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.585 5.955L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                  "WhatsApp"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen((o) => !o),
              className: "lg:hidden text-white p-2",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsx(Menu, { className: "size-6" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: "lg:hidden bg-black border-t border-white/10",
            children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-4 flex flex-col gap-1", children: [
              links.map((l) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "px-3 py-3 text-white/90 hover:text-[var(--brand-orange)] font-semibold uppercase text-sm tracking-wide border-b border-white/5",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-3", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "tel:+919059987777",
                    className: "flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full bg-white/10 text-white font-semibold",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { className: "size-4" }),
                      " Call"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://wa.me/919059987777",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full text-white font-semibold",
                    style: { background: "var(--gradient-orange)" },
                    children: [
                      /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "size-4", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.585 5.955L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                      "WhatsApp"
                    ]
                  }
                )
              ] })
            ] })
          }
        )
      ]
    }
  );
}
const dealership = "/metro-auto-bloom/assets/dealership-emrG0ld5.jpg";
const carSedan = "/metro-auto-bloom/assets/car-sedan-D-FxHZQm.jpg";
const url$b = "/__l5e/assets-v1/0ebb8f9e-6c3c-4039-a8df-b44af4742fc4/sold-baleno.jpg";
const soldBaleno = {
  url: url$b
};
const url$a = "/__l5e/assets-v1/59d6bb9d-75c7-4724-b63c-2f16d594b712/sold-nexon.jpg";
const soldNexon = {
  url: url$a
};
const url$9 = "/__l5e/assets-v1/0f1af54a-3d22-42ff-b871-66ed1e17a255/sold-creta.jpg";
const soldCreta = {
  url: url$9
};
const url$8 = "/__l5e/assets-v1/70f728ce-99d0-4373-8084-1fdf4af67334/sold-innova.jpg";
const soldInnova = {
  url: url$8
};
const url$7 = "/__l5e/assets-v1/a0140478-9791-4b30-8f1b-735f8cbc7f36/sold-fortuner.jpg";
const soldFortuner = {
  url: url$7
};
const url$6 = "/__l5e/assets-v1/bf7f0b8b-eeaf-49c0-a827-540fc9a1ddaa/sold-alto.jpg";
const soldAlto = {
  url: url$6
};
const url$5 = "/__l5e/assets-v1/e9e3f40a-15f1-4fcc-8458-f1b22dd5c0ff/sold-grandi10.jpg";
const soldGrandi10 = {
  url: url$5
};
const carSuv = "/metro-auto-bloom/assets/car-suv-B2j0XY7c.jpg";
const carHatch = "/metro-auto-bloom/assets/car-hatch-DnprBIvR.jpg";
const carLuxury = "/metro-auto-bloom/assets/car-luxury-D89mYQCm.jpg";
const carInnova = "/metro-auto-bloom/assets/car-innova-DK6sgLcx.jpg";
const carKia = "/metro-auto-bloom/assets/car-kia-CNT7M9rN.jpg";
const ctaPremium = "/metro-auto-bloom/assets/cta-premium-Cwi-k9Qb.jpg";
const url$4 = "/__l5e/assets-v1/86bf2ac3-6fa2-4e56-a8c4-6f5fd2ef4d2c/faq-support.jpg";
const faqSupportAsset = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/0f34a7fe-c0c6-49ee-a053-afa4faf24a66/footer-bg.jpg";
const footerBg = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/a0db3f7e-f4d6-400d-ab2e-4c2190e08944/testimonial-1.mp4";
const testimonialVideo1 = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/3b3eff82-cf91-4831-b88b-3541b99d98a1/testimonial-2.mp4";
const testimonialVideo2 = {
  url: url$1
};
const url = "/__l5e/assets-v1/8b414a50-c9c6-40cc-b343-dacc850c05c8/testimonial-3.mp4";
const testimonialVideo3 = {
  url
};
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    val,
    suffix
  ] });
}
const stats = [
  { icon: Car, value: 500, suffix: "+", label: "Cars Sold" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Verified Vehicles" },
  { icon: Users, value: 1e3, suffix: "+", label: "Happy Customers" },
  { icon: Star, value: 5, suffix: "★", label: "Customer Satisfaction" }
];
function TrustBar() {
  return /* @__PURE__ */ jsx("section", { className: "relative -mt-16 z-20 container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 bg-black rounded-2xl p-4 lg:p-6 border border-white/10 shadow-2xl", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: i * 0.1 },
      className: "flex items-center gap-3 lg:gap-4 px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-white/5 transition-colors",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "size-12 lg:size-14 rounded-xl flex items-center justify-center shrink-0",
            style: { background: "var(--gradient-orange)" },
            children: /* @__PURE__ */ jsx(s.icon, { className: "size-6 text-white" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl lg:text-4xl font-extrabold text-white leading-none", children: /* @__PURE__ */ jsx(Counter, { to: s.value, suffix: s.suffix }) }),
          /* @__PURE__ */ jsx("div", { className: "text-xs lg:text-sm text-white/60 mt-1 uppercase tracking-wider", children: s.label })
        ] })
      ]
    },
    s.label
  )) }) });
}
const aboutFeatures = [
  "Certified Used Cars",
  "Vehicle History Reports",
  "Quality Inspection",
  "Easy Financing",
  "Transparent Pricing",
  "Customer Support"
];
function AboutSection() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-24 lg:py-32 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-[var(--brand-orange)]/10 rounded-3xl -rotate-2" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: dealership,
              alt: "Metro Cars dealership showroom",
              loading: "lazy",
              width: 1400,
              height: 1e3,
              className: "relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-4 lg:-right-8 glass-light rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "size-12 rounded-full flex items-center justify-center", style: { background: "var(--gradient-orange)" }, children: /* @__PURE__ */ jsx(Award, { className: "size-6 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-extrabold text-2xl", children: "10+" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-black/60", children: "Years of Trust" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-[var(--brand-orange)] font-bold uppercase tracking-[0.25em] text-sm mb-3", children: "About Us" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl lg:text-4xl uppercase leading-[0.95] text-black", children: [
            "About ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient-orange", children: "Metro Cars" }),
            " Vijayawada"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-black/70 text-lg leading-relaxed", children: "Metro Cars is a leading used car dealer in Vijayawada, offering a wide range of thoroughly inspected and certified pre-owned vehicles. Our mission is to provide customers with reliable cars, transparent pricing, and exceptional service throughout their buying journey." }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-2 gap-3", children: aboutFeatures.map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "size-5 text-[var(--brand-orange)] shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-black/90", children: f })
          ] }, f)) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#inventory",
              className: "mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-bold uppercase tracking-wide text-sm shadow-[0_15px_40px_-15px_rgba(255,90,0,0.6)] hover:scale-105 transition-transform",
              style: { background: "var(--gradient-orange)" },
              children: [
                "Learn More ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
const cars = [
  { img: carSedan, name: "Honda City VX", year: 2021, fuel: "Petrol", trans: "Automatic", km: "32,500 km", price: "₹9.85 L", cat: "Sedan" },
  { img: carSuv, name: "Hyundai Creta SX", year: 2022, fuel: "Diesel", trans: "Manual", km: "28,400 km", price: "₹13.20 L", cat: "SUV" },
  { img: carHatch, name: "Maruti Swift ZXI", year: 2020, fuel: "Petrol", trans: "Manual", km: "41,200 km", price: "₹6.45 L", cat: "Hatchback" },
  { img: carLuxury, name: "BMW 3 Series", year: 2019, fuel: "Petrol", trans: "Automatic", km: "38,900 km", price: "₹29.50 L", cat: "Luxury" },
  { img: carInnova, name: "Toyota Innova Crysta", year: 2021, fuel: "Diesel", trans: "Manual", km: "52,100 km", price: "₹17.90 L", cat: "SUV" },
  { img: carKia, name: "Kia Seltos HTX", year: 2022, fuel: "Petrol", trans: "Automatic", km: "21,800 km", price: "₹14.75 L", cat: "SUV" }
];
const tabs = ["All", "Sedan", "SUV", "Hatchback", "Luxury", "Budget"];
function InventorySection() {
  const [tab, setTab] = useState("All");
  const filtered = tab === "All" ? cars : tab === "Budget" ? cars.filter((c) => parseFloat(c.price.replace(/[^\d.]/g, "")) < 10) : cars.filter((c) => c.cat === tab);
  return /* @__PURE__ */ jsx("section", { id: "inventory", className: "py-24 lg:py-32 bg-[#fafafa]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[var(--brand-orange)] font-bold uppercase tracking-[0.25em] text-sm mb-3", children: "Featured Inventory" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl lg:text-4xl uppercase leading-[0.95] text-black", children: [
        "Explore Our ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-orange", children: "Premium" }),
        " Inventory"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-black/60 text-lg", children: "Choose from a wide range of quality pre-owned vehicles." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-12", children: tabs.map((t) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setTab(t),
        className: `px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${tab === t ? "text-white shadow-[0_10px_25px_-10px_rgba(255,90,0,0.7)]" : "bg-white text-black/70 hover:text-black border border-black/10"}`,
        style: tab === t ? { background: "var(--gradient-orange)" } : void 0,
        children: t
      },
      t
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8", children: filtered.map((c, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.05 },
        className: "group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-neutral-900 to-neutral-700", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: c.img,
                alt: c.name,
                loading: "lazy",
                width: 800,
                height: 600,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white", style: { background: "var(--gradient-orange)" }, children: "Certified" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur text-white text-xs font-semibold", children: c.cat })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base font-extrabold text-black uppercase tracking-tight", children: c.name }),
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-extrabold text-[var(--brand-orange)] shrink-0", children: c.price })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-sm", children: [
              /* @__PURE__ */ jsx(Spec, { icon: Calendar, text: String(c.year) }),
              /* @__PURE__ */ jsx(Spec, { icon: Fuel, text: c.fuel }),
              /* @__PURE__ */ jsx(Spec, { icon: Settings2, text: c.trans }),
              /* @__PURE__ */ jsx(Spec, { icon: Gauge, text: c.km })
            ] }),
            /* @__PURE__ */ jsxs("button", { className: "mt-6 w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white font-bold uppercase text-sm tracking-wide hover:bg-[var(--brand-orange)] transition-colors", children: [
              "View Details ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
            ] })
          ] })
        ]
      },
      c.name
    )) })
  ] }) });
}
function Spec({ icon: Icon, text }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-black/70", children: [
    /* @__PURE__ */ jsx(Icon, { className: "size-4 text-[var(--brand-orange)]" }),
    /* @__PURE__ */ jsx("span", { className: "font-medium", children: text })
  ] });
}
const features = [
  { icon: ShieldCheck, title: "Certified Quality", desc: "All cars inspected by experts." },
  { icon: FileSearch, title: "Vehicle History Verified", desc: "Transparent ownership records." },
  { icon: Tag, title: "Competitive Pricing", desc: "Best market value." },
  { icon: Banknote, title: "Finance Assistance", desc: "Easy loan support." },
  { icon: Award, title: "Trusted Dealership", desc: "Years of customer trust." },
  { icon: Headphones, title: "After-Sales Support", desc: "Continued customer care." }
];
function WhySection() {
  return /* @__PURE__ */ jsxs("section", { id: "why", className: "relative py-24 lg:py-32 bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--brand-orange)]/10 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[var(--brand-orange)] font-bold uppercase tracking-[0.25em] text-sm mb-3", children: "Why Choose Us" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl lg:text-4xl uppercase leading-[0.95] text-white", children: [
          "Why Choose ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-orange", children: "Metro Cars" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.07 },
          className: "group relative p-8 rounded-3xl glass-card hover:border-[var(--brand-orange)]/50 transition-all overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 size-32 rounded-full bg-[var(--brand-orange)]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "size-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform",
                  style: { background: "var(--gradient-orange)" },
                  children: /* @__PURE__ */ jsx(f.icon, { className: "size-7 text-white" })
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-extrabold text-white uppercase tracking-tight mb-2", children: f.title }),
              /* @__PURE__ */ jsx("p", { className: "text-white/60", children: f.desc })
            ] })
          ]
        },
        f.title
      )) })
    ] })
  ] });
}
const testimonials = [
  { id: "v1", src: testimonialVideo1.url },
  { id: "v2", src: testimonialVideo2.url },
  { id: "v3", src: testimonialVideo3.url }
];
function TestimonialsSection() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-testimonial-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-testimonial-card]");
    const step = card ? card.offsetWidth + 24 : 1;
    setActive(Math.round(el.scrollLeft / step));
  };
  const scrollToIndex = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-testimonial-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "testimonials",
      className: "py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-[0.06] pointer-events-none",
            style: {
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.5) 1px, transparent 0)",
              backgroundSize: "32px 32px"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -top-40 -right-40 size-[500px] rounded-full blur-3xl opacity-15",
            style: { background: "var(--brand-orange)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -bottom-40 -left-40 size-[500px] rounded-full blur-3xl opacity-10",
            style: { background: "var(--brand-orange)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center max-w-2xl mx-auto mb-10 sm:mb-14",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-[var(--brand-orange)] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm mb-3", children: "Testimonials" }),
                /* @__PURE__ */ jsxs("h2", { className: "text-xl sm:text-2xl lg:text-4xl uppercase leading-[1.05] text-black", children: [
                  "What Our ",
                  /* @__PURE__ */ jsx("span", { className: "text-gradient-orange", children: "Customers" }),
                  " Say"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-4 sm:mt-5 text-black/60 text-sm sm:text-base lg:text-lg px-2", children: "Real experiences from happy customers who found their perfect car with Metro Cars Vijayawada." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                ref: scrollerRef,
                onScroll,
                className: "flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 sm:px-6 scrollbar-hide lg:justify-center",
                style: { scrollbarWidth: "none" },
                children: testimonials.map((t, i) => /* @__PURE__ */ jsx(TestimonialCard, { src: t.src, index: i, muted, onToggleMute: () => setMuted((m) => !m) }, t.id))
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => scrollBy(-1),
                "aria-label": "Previous testimonial",
                className: "hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black text-white items-center justify-center shadow-xl hover:bg-[var(--brand-orange)] hover:text-white transition-colors",
                children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-5 rotate-180" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => scrollBy(1),
                "aria-label": "Next testimonial",
                className: "hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black text-white items-center justify-center shadow-xl hover:bg-[var(--brand-orange)] hover:text-white transition-colors",
                children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-6", children: testimonials.map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToIndex(i),
              "aria-label": `Go to testimonial ${i + 1}`,
              className: `h-2 rounded-full transition-all ${active === i ? "w-8 bg-[var(--brand-orange)]" : "w-2 bg-black/20"}`
            },
            i
          )) }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-10 sm:mt-12 px-4", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#enquiry",
              className: "inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wide text-xs sm:text-sm text-white shadow-[0_10px_40px_rgba(255,90,0,0.4)] hover:scale-105 transition-transform",
              style: { background: "var(--gradient-orange)" },
              children: [
                "View More Customer Reviews",
                /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
function TestimonialCard({
  src,
  index,
  muted,
  onToggleMute
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  return /* @__PURE__ */ jsx(
    motion.article,
    {
      "data-testimonial-card": true,
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { delay: index * 0.08, duration: 0.5 },
      className: "group snap-center shrink-0 w-[80vw] max-w-[300px] sm:w-[300px] md:w-[340px] md:max-w-[340px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-black/10 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(255,90,0,0.3)] hover:-translate-y-1 transition-all duration-500",
      children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[9/16] bg-black overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            ref: videoRef,
            src,
            playsInline: true,
            muted,
            loop: true,
            preload: "metadata",
            onClick: togglePlay,
            onPlay: () => setPlaying(true),
            onPause: () => setPlaying(false),
            className: "w-full h-full object-cover cursor-pointer"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onToggleMute();
            },
            "aria-label": muted ? "Unmute" : "Mute",
            className: "absolute top-4 right-4 size-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[var(--brand-orange)] transition-colors z-10",
            children: muted ? /* @__PURE__ */ jsx(VolumeX, { className: "size-4" }) : /* @__PURE__ */ jsx(Volume2, { className: "size-4" })
          }
        ),
        !playing && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: togglePlay,
            "aria-label": "Play video",
            className: "absolute inset-0 m-auto size-16 rounded-full flex items-center justify-center text-white shadow-[0_10px_40px_rgba(255,90,0,0.6)] group-hover:scale-110 transition-transform",
            style: { background: "var(--gradient-orange)" },
            children: /* @__PURE__ */ jsx(Play, { className: "size-6 fill-white ml-0.5" })
          }
        )
      ] })
    }
  );
}
const steps = [
  { n: "01", icon: Search, title: "Browse Inventory", desc: "Explore certified pre-owned cars online or visit our showroom to discover the perfect match." },
  { n: "02", icon: ClipboardCheck, title: "Schedule Inspection", desc: "Book a test drive and a detailed 150-point vehicle inspection at your convenience." },
  { n: "03", icon: FileText, title: "Finance & Documentation", desc: "Get easy financing with transparent paperwork and quick approvals from trusted partners." },
  { n: "04", icon: KeyRound, title: "Drive Home", desc: "Take delivery of your dream car and drive home with complete confidence and warranty." }
];
function ProcessSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-32 size-[420px] rounded-full bg-[var(--brand-orange)]/15 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 -right-32 size-[420px] rounded-full bg-[var(--brand-orange)]/10 blur-3xl" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.04]",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[var(--brand-orange)] font-bold uppercase tracking-[0.25em] text-sm mb-3", children: "Our Process" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl lg:text-4xl uppercase leading-[0.95] text-white", children: [
          "Buy Your Dream Car in ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-orange", children: "4 Easy Steps" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-white/60 text-lg", children: "A simple, transparent journey from browsing to driving home." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-[88px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--brand-orange)]/50 to-transparent" }),
        steps.map((s, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.12, duration: 0.5 },
            className: "group relative",
            children: /* @__PURE__ */ jsxs("div", { className: "relative h-full rounded-3xl p-7 lg:p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 size-40 rounded-full bg-[var(--brand-orange)]/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-5 text-6xl lg:text-7xl font-black text-white/[0.06] leading-none select-none group-hover:text-[var(--brand-orange)]/20 transition-colors", children: s.n }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "size-16 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(255,90,0,0.7)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500",
                    style: { background: "var(--gradient-orange)" },
                    children: /* @__PURE__ */ jsx(s.icon, { className: "size-8 text-white" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 size-6 rounded-full bg-black border-2 border-[var(--brand-orange)] flex items-center justify-center text-[10px] font-extrabold text-[var(--brand-orange)]", children: i + 1 })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "relative mt-6 text-base font-extrabold uppercase tracking-tight text-white", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "relative mt-3 text-white/60 text-sm leading-relaxed", children: s.desc }),
              i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:flex absolute -right-3 top-[76px] size-6 rounded-full bg-[var(--brand-orange)] items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10", children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5 text-white" }) })
            ] })
          },
          s.n
        ))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 text-center", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#contact",
          className: "inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-bold uppercase tracking-wide text-sm shadow-[0_15px_40px_-15px_rgba(255,90,0,0.7)] hover:scale-105 transition-transform",
          style: { background: "var(--gradient-orange)" },
          children: [
            "Start Your Journey ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
          ]
        }
      ) })
    ] })
  ] });
}
function EnquirySection() {
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "py-24 lg:py-32 bg-black relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 size-[500px] rounded-full bg-[var(--brand-orange)]/15 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[var(--brand-orange)] font-bold uppercase tracking-[0.25em] text-sm mb-3", children: "Get In Touch" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl lg:text-4xl uppercase leading-[0.95] text-white", children: [
          "Visit Our ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-orange", children: "Showroom" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden border border-white/10 min-h-[450px]", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            title: "Metro Cars Vijayawada Location",
            src: "https://www.google.com/maps?q=Vijayawada,Andhra+Pradesh&output=embed",
            className: "w-full h-full min-h-[450px] grayscale-[0.3] contrast-[1.1]",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        ) }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              alert("Thanks! We'll call you back shortly.");
            },
            className: "rounded-3xl p-8 lg:p-10 glass-card space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(Field, { label: "Full Name", name: "name", required: true }),
                /* @__PURE__ */ jsx(Field, { label: "Phone Number", name: "phone", type: "tel", required: true }),
                /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email" }),
                /* @__PURE__ */ jsx(Field, { label: "Interested Vehicle", name: "vehicle", placeholder: "e.g. Honda City" })
              ] }),
              /* @__PURE__ */ jsx(Field, { label: "Budget Range", name: "budget", placeholder: "₹5L - ₹10L" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-wider text-white/60 font-bold mb-2", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "message",
                    rows: 4,
                    className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--brand-orange)] focus:bg-white/10 transition-all resize-none",
                    placeholder: "Tell us what you're looking for..."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  className: "w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-white font-bold uppercase tracking-wide shadow-[0_15px_40px_-15px_rgba(255,90,0,0.7)] hover:scale-[1.02] transition-transform",
                  style: { background: "var(--gradient-orange)" },
                  children: [
                    "Request Callback ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Field({ label, name, type = "text", required, placeholder }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "block text-xs uppercase tracking-wider text-white/60 font-bold mb-2", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: name,
        name,
        type,
        required,
        placeholder,
        className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--brand-orange)] focus:bg-white/10 transition-all"
      }
    )
  ] });
}
const faqs = [
  { q: "How do you verify vehicles?", a: "Every vehicle undergoes a 150+ point inspection by certified technicians covering engine, transmission, suspension, electricals, and bodywork." },
  { q: "Do you provide finance assistance?", a: "Yes. We partner with leading banks and NBFCs to offer competitive interest rates and quick loan approvals tailored to your profile." },
  { q: "Can I schedule a test drive?", a: "Absolutely. Book a test drive online, by phone, or WhatsApp and our team will arrange a slot at your convenience." },
  { q: "Do you offer vehicle history reports?", a: "Yes. Every certified car comes with a transparent ownership, service, and accident history report." },
  { q: "Do you buy used cars?", a: "Yes, we purchase pre-owned cars at fair market value. Bring your car for a free evaluation and instant quote." }
];
function FAQSection() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-[#fafafa]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-12 lg:gap-16 items-start", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "lg:col-span-2 lg:sticky lg:top-28",
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-[var(--brand-orange)] font-bold uppercase tracking-[0.25em] text-sm mb-3", children: "FAQ" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl lg:text-4xl uppercase leading-[0.95] text-black mb-6", children: [
            "Frequently Asked ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient-orange", children: "Questions" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-black/60 leading-relaxed mb-8 max-w-md", children: "Everything you need to know about buying a certified used car at Metro Cars Vijayawada. Can't find your answer? Reach out to us directly." }),
          /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden mb-6 shadow-xl group", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: faqSupportAsset.url,
                alt: "Metro Cars Vijayawada support team helping a customer",
                loading: "lazy",
                width: 1024,
                height: 1280,
                className: "w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4 text-white", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)] font-bold mb-1", children: "We're here to help" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg font-bold leading-tight", children: "Real people. Real answers." })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "lg:col-span-3 space-y-3",
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.15 },
        children: faqs.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-white border border-black/5 overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setOpen(open === i ? null : i),
              className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold text-black text-lg", children: f.q }),
                /* @__PURE__ */ jsx(ChevronDown, { className: `size-5 text-[var(--brand-orange)] shrink-0 transition-transform ${open === i ? "rotate-180" : ""}` })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: false,
              animate: { height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 },
              transition: { duration: 0.3 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-5 text-black/70 leading-relaxed", children: f.a })
            }
          )
        ] }, i))
      }
    )
  ] }) }) });
}
function CTASection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const trustItems = [
    "Certified Vehicles",
    "Transparent Pricing",
    "Easy Financing",
    "Verified History Reports"
  ];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "relative w-full min-h-[350px] flex items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 -top-[15%] -bottom-[15%]",
            style: { y: bgY },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: ctaPremium,
                alt: "Luxury car on highway at sunset",
                className: "w-full h-full object-cover",
                loading: "lazy",
                width: 1920,
                height: 1080
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-black/60" }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-6 py-20 text-center", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs mb-5", children: "Metro Cars Vijayawada" }),
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight", children: [
                "Find Your Perfect",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-[var(--brand-orange)]", children: "Pre-Owned Car" }),
                " Today"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "max-w-2xl mx-auto mt-4 text-base md:text-lg text-white/80 leading-relaxed", children: "Explore our extensive collection of certified used vehicles and drive home with confidence." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mt-8", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#inventory",
                    className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider text-black transition-all duration-300 hover:scale-105",
                    style: {
                      background: "var(--gradient-orange)",
                      boxShadow: "0 10px 40px -10px rgba(255,90,0,0.5)"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.boxShadow = "0 0 40px rgba(255,90,0,0.7), 0 10px 40px -10px rgba(255,90,0,0.5)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.boxShadow = "0 10px 40px -10px rgba(255,90,0,0.5)";
                    },
                    children: [
                      "Browse Inventory",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#enquiry",
                    className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/80 text-white font-bold uppercase text-sm tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:border-white",
                    children: "Book Test Drive"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8", children: trustItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/80 text-sm font-medium", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "size-4 text-[var(--brand-orange)] shrink-0" }),
                item
              ] }, item)) })
            ]
          }
        ) })
      ]
    }
  );
}
function HappyCustomersSection() {
  const slides = [
    { src: soldBaleno.url, label: "Baleno Automatic" },
    { src: soldNexon.url, label: "Tata Nexon" },
    { src: soldCreta.url, label: "Hyundai Creta" },
    { src: soldInnova.url, label: "Toyota Innova" },
    { src: soldFortuner.url, label: "Toyota Fortuner" },
    { src: soldAlto.url, label: "Alto 800" },
    { src: soldGrandi10.url, label: "Grand i10" }
  ];
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const total = slides.length;
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1 >= total - slidesPerView + 1 ? 0 : i + 1);
    }, 4e3);
    return () => clearInterval(id);
  }, [total, slidesPerView]);
  const prev = () => setIndex((i) => i - 1 < 0 ? total - slidesPerView : i - 1);
  const next = () => setIndex((i) => i + 1 >= total - slidesPerView + 1 ? 0 : i + 1);
  const shiftPct = 100 / slidesPerView;
  return /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-28 bg-gradient-to-b from-white to-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-1.5 rounded-full bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] text-xs font-bold uppercase tracking-widest mb-4", children: "Happy Customers" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-black tracking-tight text-neutral-900", children: "Recently Sold at Metro Cars" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-neutral-600 max-w-2xl mx-auto", children: "Real customers, real deliveries. Join thousands who trusted us with their car journey." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl bg-white", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex gap-4 transition-transform duration-700 ease-out",
          style: { transform: `translateX(-${index * shiftPct}%)` },
          children: slides.map((s, i) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "min-w-[calc(100%-1rem)] md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-0.75rem)] flex items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: s.src,
                  alt: `Sold ${s.label} at Metro Cars Vijayawada`,
                  className: "w-full h-auto max-h-[400px] object-contain",
                  loading: "lazy"
                }
              )
            },
            i
          ))
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prev,
          "aria-label": "Previous",
          className: "absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white shadow-xl text-neutral-900 flex items-center justify-center hover:bg-[var(--brand-orange)] hover:text-white transition-colors",
          children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-5 rotate-180" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: next,
          "aria-label": "Next",
          className: "absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white shadow-xl text-neutral-900 flex items-center justify-center hover:bg-[var(--brand-orange)] hover:text-white transition-colors",
          children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-6", children: Array.from({ length: total - slidesPerView + 1 }).map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIndex(i),
          "aria-label": `Slide ${i + 1}`,
          className: `h-2 rounded-full transition-all ${i === index ? "w-8 bg-[var(--brand-orange)]" : "w-2 bg-neutral-300"}`
        },
        i
      )) })
    ] })
  ] }) });
}
function MetroFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-black text-white pt-20 pb-8 border-t border-white/5 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-30",
        style: {
          backgroundImage: `url(${footerBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-black/60" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: logoAsset.url, alt: "Metro Cars", className: "h-24 lg:h-28 w-auto mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: "Vijayawada's trusted destination for certified pre-owned cars, transparent pricing and exceptional service." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-extrabold uppercase tracking-wider mb-5 text-[var(--brand-orange)]", children: "Quick Links" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-white/70", children: ["Home", "About Us", "Inventory", "Why Choose Us", "Testimonials", "Contact"].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[var(--brand-orange)] transition-colors", children: l }) }, l)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-extrabold uppercase tracking-wider mb-5 text-[var(--brand-orange)]", children: "Inventory" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-white/70", children: ["Sedans", "SUVs", "Hatchbacks", "Luxury Cars", "Budget Cars", "MPVs"].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[var(--brand-orange)] transition-colors", children: l }) }, l)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-extrabold uppercase tracking-wider mb-5 text-[var(--brand-orange)]", children: "Contact" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-white/70 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(Phone, { className: "size-4 text-[var(--brand-orange)] shrink-0 mt-0.5" }),
              " 90599 87777"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(Mail, { className: "size-4 text-[var(--brand-orange)] shrink-0 mt-0.5" }),
              " info@metrocarsvjy.com"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "size-4 text-[var(--brand-orange)] shrink-0 mt-0.5" }),
              " Opp Government Hospital, Nagarjuna Nagar, Sri Ramachandra Nagar, Vijayawada, Andhra Pradesh - 520007"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(Clock, { className: "size-4 text-[var(--brand-orange)] shrink-0 mt-0.5" }),
              " Mon–Sun: 9:00 AM – 9:00 PM"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-sm", children: [
          "All Rights Reserved © 2026 by Metro Cars. Developed By",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://ayrondigitalsolutions.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-[var(--brand-orange)] font-bold hover:opacity-80 transition-opacity",
              children: "Ayrondigitalsolutions"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-5 text-sm", children: /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", className: "text-white/60 hover:text-[var(--brand-orange)] transition-colors font-semibold", children: "Privacy Policy" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [
          { Icon: Facebook, href: "#" },
          { Icon: Instagram, href: "#" },
          { Icon: Youtube, href: "#" },
          {
            Icon: () => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "size-4", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.585 5.955L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
            href: "https://wa.me/919059987777"
          }
        ].map(({ Icon, href }, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            "aria-label": "Social link",
            className: "size-10 rounded-full bg-white/5 hover:bg-[var(--brand-orange)] flex items-center justify-center transition-colors",
            children: /* @__PURE__ */ jsx(Icon, { className: "size-4" })
          },
          i
        )) })
      ] })
    ] })
  ] });
}
function StickyContact() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/919059987777",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "Chat on WhatsApp",
        className: "fixed bottom-5 right-5 z-40 size-14 rounded-full flex items-center justify-center text-white shadow-[0_15px_40px_-10px_rgba(34,197,94,0.6)] hover:scale-110 transition-transform",
        style: { background: "linear-gradient(135deg, #25d366, #128c7e)" },
        children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.585 5.955L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "tel:+919059987777",
        "aria-label": "Call now",
        className: "md:hidden fixed bottom-5 left-5 z-40 size-14 rounded-full flex items-center justify-center text-white shadow-[0_15px_40px_-10px_rgba(255,90,0,0.7)]",
        style: { background: "var(--gradient-orange)" },
        children: /* @__PURE__ */ jsx(Phone, { className: "size-6" })
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "Go to top",
        className: `fixed z-40 flex items-center justify-center rounded-full text-white transition-all duration-500 shadow-lg ${showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"} md:bottom-24 md:right-5 md:pl-3 md:pr-4 md:py-3 md:gap-2 md:w-auto bottom-20 right-3 size-12`,
        style: {
          background: "var(--gradient-orange)",
          boxShadow: "0 10px 30px -10px rgba(255,90,0,0.6)"
        },
        children: [
          /* @__PURE__ */ jsx(ChevronUp, { className: "size-5 md:size-4" }),
          /* @__PURE__ */ jsx("span", { className: "hidden md:inline font-bold uppercase tracking-wider text-xs", children: "Go to Top" })
        ]
      }
    )
  ] });
}
export {
  AboutSection as A,
  CTASection as C,
  EnquirySection as E,
  FAQSection as F,
  HappyCustomersSection as H,
  InventorySection as I,
  MetroHeader as M,
  ProcessSection as P,
  StickyContact as S,
  TrustBar as T,
  WhySection as W,
  MetroFooter as a,
  TestimonialsSection as b
};
