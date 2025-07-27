import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HubungiKami() {
  return (
    <div className="bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Putratour</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/paket-wisata" className="text-gray-600 hover:text-blue-600">Paket Wisata</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
            <Link href="/outfit" className="text-gray-600 hover:text-blue-600">Outfit</Link>
            <Link href="/hubungi-kami" className="text-blue-600 font-bold">Hubungi Kami</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Hubungi Kami</h1>
          <p className="text-gray-500 mt-2">Kami siap membantu Anda merencanakan perjalanan impian Anda.</p>
          <Button className="mt-8">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              Hubungi Kami di WhatsApp
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
}
