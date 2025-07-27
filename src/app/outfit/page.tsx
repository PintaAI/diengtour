export default function Outfit() {
  return (
    <div className="bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Putratour</div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/paket-wisata" className="text-gray-600 hover:text-blue-600">Paket Wisata</a>
            <a href="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</a>
            <a href="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="/outfit" className="text-blue-600 font-bold">Outfit</a>
            <a href="/hubungi-kami" className="text-gray-600 hover:text-blue-600">Hubungi Kami</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Rekomendasi Outfit</h1>
          <p className="text-gray-500 mt-2">Pakaian yang nyaman untuk petualangan Anda di Dieng.</p>
        </section>

        <section>
          <p>
            Karena Dieng berada di dataran tinggi, suhu udara bisa menjadi sangat dingin, terutama di pagi dan malam hari.
            Kami merekomendasikan untuk membawa pakaian hangat seperti jaket, syal, dan topi.
          </p>
        </section>
      </main>
    </div>
  );
}
