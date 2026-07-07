import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Fuel,
  Settings2,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Share2,
  MapPin,
  Award,
} from "lucide-react";
import { getCarBySlug } from "@/data/cars";
import { MetroHeader } from "@/components/MetroHeader";
import { MetroFooter, StickyContact } from "@/components/MetroSections";
import bannerImg from "@/assets/car-details-banner.jpg";

export default function CarDetails() {
  const { slug = "" } = useParams();
  const car = getCarBySlug(slug);
  const gallery = car?.gallery && car.gallery.length ? car.gallery : car ? [car.img] : [];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (car) document.title = `${car.name} • Metro Cars`;
    window.scrollTo(0, 0);
  }, [car]);

  useEffect(() => {
    if (gallery.length <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % gallery.length);
    }, 3000);
    return () => clearInterval(id);
  }, [gallery.length]);


  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-extrabold uppercase">Car not found</h1>
        <p className="text-black/60 mt-2">The vehicle you're looking for is no longer available.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white font-bold uppercase text-sm"
        >
          <ArrowLeft className="size-4" /> Back to Inventory
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <MetroHeader />

      {/* Sub-page banner */}
      <section className="relative pt-28 lg:pt-32 h-[280px] lg:h-[360px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Metro Cars showroom banner"
          width={1920}
          height={720}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute -bottom-24 -right-24 size-[420px] rounded-full bg-[var(--brand-orange)]/25 blur-3xl" />
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-end pb-8 lg:pb-12">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white">Certified Pre-Owned</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold uppercase text-white leading-[0.95]">
            {car.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-white/80 text-sm">
            <Link to="/" className="hover:text-[var(--brand-orange)]">Home</Link>
            <span className="text-white/40">/</span>
            <Link to="/#inventory" className="hover:text-[var(--brand-orange)]">Inventory</Link>
            <span className="text-white/40">/</span>
            <span className="text-[var(--brand-orange)] font-semibold">{car.name}</span>
          </div>
        </div>
      </section>

      <main className="pt-10 lg:pt-14 pb-24">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Gallery */}
            <div className="lg:col-span-3">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-700 aspect-[4/3]">
                <img
                  src={gallery[active]}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                  style={{ background: "var(--gradient-orange)" }}
                >
                  Certified
                </div>


              </div>

              {gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                        active === i ? "border-[var(--brand-orange)]" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={g} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              {car.description && (
                <div className="mt-10 bg-white rounded-3xl p-7 border border-black/5">
                  <h2 className="text-xl font-extrabold uppercase tracking-tight">Overview</h2>
                  <p className="mt-3 text-black/70 leading-relaxed">{car.description}</p>
                </div>
              )}

              {/* Highlights */}
              {car.highlights && (
                <div className="mt-6 bg-white rounded-3xl p-7 border border-black/5">
                  <h2 className="text-xl font-extrabold uppercase tracking-tight flex items-center gap-2">
                    <Award className="size-5 text-[var(--brand-orange)]" /> Highlights
                  </h2>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                    {car.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-black/80">
                        <CheckCircle2 className="size-5 text-[var(--brand-orange)] shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {car.features && (
                <div className="mt-6 bg-white rounded-3xl p-7 border border-black/5">
                  <h2 className="text-xl font-extrabold uppercase tracking-tight">Features & Equipment</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {car.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-full bg-[#fafafa] border border-black/10 text-sm font-medium text-black/80"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-7 border border-black/5 shadow-sm lg:sticky lg:top-28">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  {car.brand ?? car.cat}
                </div>
                <h1 className="mt-2 text-2xl lg:text-3xl font-extrabold uppercase leading-tight">
                  {car.name}
                </h1>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="text-4xl font-extrabold text-[var(--brand-orange)]">{car.price}</div>
                  <div className="text-sm text-black/50 line-through">₹10.50 L</div>
                </div>
                <div className="mt-1 text-sm text-black/60">EMI starts at ₹17,499/mo*</div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <Spec icon={Calendar} label="Year" value={String(car.year)} />
                  <Spec icon={Fuel} label="Fuel" value={car.fuel} />
                  <Spec icon={Settings2} label="Transmission" value={car.trans} />
                  <Spec icon={Gauge} label="Driven" value={car.km} />
                </div>

                {(car.variant || car.color || car.owners || car.registration || car.engine || car.mileage || car.insurance) && (
                  <dl className="mt-6 divide-y divide-black/5 border-y border-black/5">
                    <Row label="Variant" value={car.variant} />
                    <Row label="Color" value={car.color} />
                    <Row label="Ownership" value={car.owners} />
                    <Row label="Registration" value={car.registration} />
                    <Row label="Engine" value={car.engine} />
                    <Row label="Mileage" value={car.mileage} />
                    <Row label="Insurance" value={car.insurance} />
                  </dl>
                )}

                <div className="mt-6 flex items-center gap-2 text-sm text-black/70">
                  <ShieldCheck className="size-4 text-[var(--brand-orange)]" />
                  <span>200+ point quality inspection</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-black/70">
                  <MapPin className="size-4 text-[var(--brand-orange)]" />
                  <span>Available at Metro Cars, Vijayawada</span>
                </div>

                <div className="mt-6 grid gap-3">
                  <a
                    href="tel:+919999999999"
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-white font-bold uppercase text-sm tracking-wide"
                    style={{ background: "var(--gradient-orange)" }}
                  >
                    <Phone className="size-4" /> Call Dealer
                  </a>
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I'm interested in the ${car.name} (${car.year}) listed at ${car.price}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white font-bold uppercase text-sm tracking-wide hover:bg-[var(--brand-orange)] transition-colors"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Enquiry
                  </a>
                  <Link
                    to="/#enquiry"
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-bold uppercase text-sm tracking-wide border border-black/10 hover:border-[var(--brand-orange)] transition-colors"
                  >
                    Schedule Test Drive
                  </Link>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: car.name, url: window.location.href }).catch(() => {});
                      } else {
                        navigator.clipboard?.writeText(window.location.href);
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-black/60 hover:text-[var(--brand-orange)]"
                  >
                    <Share2 className="size-4" /> Share this car
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <MetroFooter />
      <StickyContact />
    </div>
  );
}

function Spec({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#fafafa] border border-black/5">
      <Icon className="size-5 text-[var(--brand-orange)]" />
      <div>
        <div className="text-[11px] uppercase tracking-wider text-black/50 font-semibold">{label}</div>
        <div className="font-bold text-black text-sm">{value}</div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between py-3 text-sm">
      <dt className="text-black/60">{label}</dt>
      <dd className="font-semibold text-black text-right">{value}</dd>
    </div>
  );
}
