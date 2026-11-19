import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Noto_Sans_Devanagari,
  Kalam,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-devanagari",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["devanagari", "latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Paygude Bandhu | Pune's Favourite Chaha & Snacks",
    template: "%s | Paygude Bandhu",
  },
  description:
    "Hot breakfast, tasty Maharashtrian snacks & freshly brewed cutting chaha across 10+ branches in Pune. खाऊ पिऊ पायगुडे बंधू — A true Pune experience!",
  keywords: [
    "Paygude Bandhu",
    "पायगुडे बंधू",
    "Pune Chaha",
    "Vada Pav Pune",
    "Kanda Pohe Pune",
    "Ghee Idli Pune",
    "Chai Franchise Pune",
    "Best Snacks in Pune",
  ],
  openGraph: {
    title: "Paygude Bandhu | Pune's Favourite Chaha & Snacks",
    description:
      "Hot breakfast. Tasty snacks. Freshly brewed chaha. Visit any of our 10 outlets across Pune!",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${devanagari.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#181715]">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
