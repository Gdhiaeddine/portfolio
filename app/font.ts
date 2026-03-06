import { Lato, Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});
export const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
