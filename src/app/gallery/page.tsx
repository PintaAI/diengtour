import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Putratour</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/paket-wisata" className="text-gray-600 hover:text-blue-600">Paket Wisata</Link>
            <Link href="/gallery" className="text-blue-600 font-bold">Gallery</Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
            <Link href="/outfit" className="text-gray-600 hover:text-blue-600">Outfit</Link>
            <Link href="/hubungi-kami" className="text-gray-600 hover:text-blue-600">Hubungi Kami</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Galeri Dieng</h1>
          <p className="text-gray-500 mt-2">Beberapa momen tak terlupakan di Dieng.</p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/76/9a/93/dataran-tinggi-dieng.jpg?w=800&h=500&s=1" alt="Dieng" width={400} height={400} className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
        </section>
      </main>
    </div>
  );
}
