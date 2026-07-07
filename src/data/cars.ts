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
import wagonr1 from "@/assets/car-wagonr-1.jpg";
import wagonr2 from "@/assets/car-wagonr-2.jpg";
import wagonr3 from "@/assets/car-wagonr-3.jpg";
import wagonr4 from "@/assets/car-wagonr-4.jpg";



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
    slug: "hyundai-venue-s-o",
    img: venue1,
    name: "Hyundai Venue S(O)",
    year: 2022,
    fuel: "Petrol",
    trans: "Manual",
    km: "1,07,000 km",
    price: "₹7.80 L",
    cat: "SUV",
    brand: "Hyundai",
    model: "Venue",
    variant: "S(O) Petrol MT",
    color: "White",
    bodyType: "Compact SUV",

    description:
      "Well-maintained Hyundai Venue S(O) petrol variant. Spacious compact SUV with modern features, comfortable interiors and excellent fuel efficiency. Perfect for city driving and highway cruising.",
    gallery: [venue1, venue2, venue3, venue4, venue5, venue6],
  },
  {
    slug: "maruti-wagonr-2024",
    img: wagonr1,
    name: "Maruti Suzuki WagonR",
    year: 2024,
    fuel: "Petrol",
    trans: "Automatic",
    km: "27,000 km",
    price: "₹6.25 L",
    cat: "Hatchback",
    brand: "Maruti Suzuki",
    model: "WagonR",
    variant: "Petrol AMT",
    bodyType: "Hatchback",
    description:
      "Almost new 2024 Maruti Suzuki WagonR petrol automatic. Spacious cabin, excellent mileage and easy city driving with AMT transmission. Well-maintained with low kilometres.",
    gallery: [wagonr1, wagonr2, wagonr3, wagonr4],
  },
];


export const getCarBySlug = (slug: string) => cars.find((c) => c.slug === slug);
