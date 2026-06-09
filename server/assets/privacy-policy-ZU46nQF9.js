import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { M as MetroHeader, a as MetroFooter, S as StickyContact } from "./MetroSections-toK0Y1Xq.js";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import "react";
import "framer-motion";
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(MetroHeader, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-black text-white overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 size-[500px] rounded-full bg-[var(--brand-orange)]/20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 size-[500px] rounded-full bg-[var(--brand-orange)]/10 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative text-center max-w-3xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "size-4 text-[var(--brand-orange)]" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] font-bold", children: "Your Privacy Matters" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl lg:text-5xl uppercase leading-[0.95]", children: [
          "Privacy ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-orange", children: "Policy" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-white/70 text-lg", children: "Last updated: January 2026 — Metro Cars Vijayawada" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 lg:px-8 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("article", { className: "prose prose-lg max-w-none text-black/80 space-y-8", children: [
        /* @__PURE__ */ jsx(Block, { title: "1. Introduction", children: 'Metro Cars Vijayawada ("we", "our", "us") respects your privacy and is committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data when you visit our website or showroom.' }),
        /* @__PURE__ */ jsx(Block, { title: "2. Information We Collect", children: "We may collect your name, phone number, email address, vehicle preferences, budget range, and any details you provide via enquiry forms, calls, WhatsApp, or in-person visits. We also collect technical data such as your IP address and browser type for analytics." }),
        /* @__PURE__ */ jsx(Block, { title: "3. How We Use Your Information", children: "Your information is used to respond to enquiries, schedule test drives, process financing applications, share vehicle recommendations, and improve our services. We may also contact you with relevant offers if you opt in." }),
        /* @__PURE__ */ jsx(Block, { title: "4. Sharing of Information", children: "We do not sell your data. We may share necessary information with finance partners (banks/NBFCs), insurance providers, and RTO agents strictly to facilitate your purchase. All partners are bound by confidentiality." }),
        /* @__PURE__ */ jsx(Block, { title: "5. Cookies & Analytics", children: "Our website uses cookies to enhance browsing experience and analyse traffic. You can disable cookies in your browser settings; some features may not function correctly without them." }),
        /* @__PURE__ */ jsx(Block, { title: "6. Data Security", children: "We employ industry-standard security measures to protect your data from unauthorised access, alteration, or disclosure. However, no transmission over the internet is 100% secure." }),
        /* @__PURE__ */ jsx(Block, { title: "7. Your Rights", children: "You can request access, correction, or deletion of your personal data at any time by contacting us at info@metrocarsvjy.com. You may also opt out of marketing communications." }),
        /* @__PURE__ */ jsx(Block, { title: "8. Third-Party Links", children: "Our website may contain links to third-party sites. We are not responsible for the privacy practices of those external websites." }),
        /* @__PURE__ */ jsx(Block, { title: "9. Updates to This Policy", children: "We may revise this policy from time to time. The latest version will always be available on this page with the updated revision date." }),
        /* @__PURE__ */ jsxs(Block, { title: "10. Contact Us", children: [
          "For any privacy-related questions, contact Metro Cars Vijayawada at ",
          /* @__PURE__ */ jsx("strong", { children: "+91 99999 99999" }),
          " or email ",
          /* @__PURE__ */ jsx("strong", { children: "info@metrocarsvjy.com" }),
          ". Address: Benz Circle, Vijayawada, Andhra Pradesh."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-bold uppercase tracking-wide text-sm shadow-[0_15px_40px_-15px_rgba(255,90,0,0.6)] hover:scale-105 transition-transform", style: {
        background: "var(--gradient-orange)"
      }, children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }),
        " Back to Home"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(MetroFooter, {}),
    /* @__PURE__ */ jsx(StickyContact, {})
  ] });
}
function Block({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-[var(--brand-orange)] pl-6 py-2", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl lg:text-2xl font-extrabold uppercase text-black mb-3 tracking-tight", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-black/70 leading-relaxed", children })
  ] });
}
export {
  PrivacyPolicy as component
};
