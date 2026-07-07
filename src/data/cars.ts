import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carHatch from "@/assets/car-hatch.jpg";
import carLuxury from "@/assets/car-luxury.jpg";
import carInnova from "@/assets/car-innova.jpg";
import carKia from "@/assets/car-kia.jpg";
import venue1 from "@/assets/car-venue-1.jpg";
import venue2 from "@/assets/car-venue-2.jpg";
import venue3 from "@/assets/car-venue-3.jpg";
import venue4 from "@/assets/car-venue-4.jpg";
import venue5 from "@/assets/car-venue-5.jpg";
import venue6 from "@/assets/car-venue-6.jpg";


export type Car = {
  slug: string;
  img: string;
  name: string;
  year: number;
  fuel: string;
  trans: string;
  km: string;
  price: string;
  cat: string;
  // details
  brand?: string;
  model?: string;
  variant?: string;
  color?: string;
  owners?: string;
  registration?: string;
  engine?: string;
  mileage?: string;
  bodyType?: string;
  insurance?: string;
  description?: string;
  highlights?: string[];
  features?: string[];
  gallery?: string[];
};

export const cars: Car[] = [
  {
    slug: "honda-city-vx",
    img: carSedan,
    name: "Honda City VX",
    year: 2021,
    fuel: "Petrol",
    trans: "Automatic",
    km: "32,500 km",
    price: "₹9.85 L",
    cat: "Sedan",
    brand: "Honda",
    model: "City",
    variant: "VX CVT Petrol",
    color: "Platinum White Pearl",
    owners: "1st Owner",
    registration: "TS09 • Hyderabad",
    engine: "1498 cc • 119 bhp",
    mileage: "17.8 kmpl (ARAI)",
    bodyType: "Sedan",
    insurance: "Comprehensive • Valid till Mar 2026",
    description:
      "A meticulously maintained Honda City VX CVT in Platinum White Pearl. Single owner, non-accidental, complete service history at authorized service center. Drives like new with a smooth CVT gearbox, refined 1.5L i-VTEC engine and a premium cabin loaded with comfort and safety features.",
    highlights: [
      "Single Owner • Non-Accidental",
      "Full Honda Service History",
      "Original Paint • No Repaints",
      "All Tyres 80%+ Tread Life",
      "Smoke-free & Pet-free Cabin",
    ],
    features: [
      "Sunroof",
      "Push Button Start",
      "Cruise Control",
      "LED Projector Headlamps",
      "Touchscreen Infotainment",
      "Apple CarPlay & Android Auto",
      "Reverse Camera with Guidelines",
      "6 Airbags",
      "ABS with EBD",
      "Auto Climate Control",
      "Leather Wrapped Steering",
      "16\" Alloy Wheels",
    ],
    gallery: [carSedan, carLuxury, carKia, carSuv],
  },
  { slug: "hyundai-creta-sx", img: carSuv, name: "Hyundai Creta SX", year: 2022, fuel: "Diesel", trans: "Manual", km: "28,400 km", price: "₹13.20 L", cat: "SUV" },
  { slug: "maruti-swift-zxi", img: carHatch, name: "Maruti Swift ZXI", year: 2020, fuel: "Petrol", trans: "Manual", km: "41,200 km", price: "₹6.45 L", cat: "Hatchback" },
  { slug: "bmw-3-series", img: carLuxury, name: "BMW 3 Series", year: 2019, fuel: "Petrol", trans: "Automatic", km: "38,900 km", price: "₹29.50 L", cat: "Luxury" },
  { slug: "toyota-innova-crysta", img: carInnova, name: "Toyota Innova Crysta", year: 2021, fuel: "Diesel", trans: "Manual", km: "52,100 km", price: "₹17.90 L", cat: "SUV" },
  { slug: "kia-seltos-htx", img: carKia, name: "Kia Seltos HTX", year: 2022, fuel: "Petrol", trans: "Automatic", km: "21,800 km", price: "₹14.75 L", cat: "SUV" },
];

export const getCarBySlug = (slug: string) => cars.find((c) => c.slug === slug);
