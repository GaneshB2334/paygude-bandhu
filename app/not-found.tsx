import Link from "next/link";
import { Coffee, Home, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20 bg-[#FFFDF4]">
      <div className="max-w-md w-full text-center space-y-5">
        <div className="w-20 h-20 rounded-full bg-[#FACC15] text-[#111111] flex items-center justify-center mx-auto shadow-md">
          <Coffee className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-black text-[#111111]">Page Not Found</h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Looks like this page stepped out for a quick cutting chaha! Let&apos;s
          bring you back to Pune&apos;s favourite flavours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-6 py-3 text-sm font-extrabold text-[#111111] hover:bg-[#eab308] transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/branches"
            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-extrabold text-white hover:bg-stone-800 transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#FACC15]" />
            Find Branch
          </Link>
        </div>
      </div>
    </main>
  );
}
