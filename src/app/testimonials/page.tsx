import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <div className="bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Putratour</div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/paket-wisata" className="text-gray-600 hover:text-blue-600">Paket Wisata</a>
            <a href="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</a>
            <a href="/testimonials" className="text-blue-600 font-bold">Testimonials</a>
            <a href="/outfit" className="text-gray-600 hover:text-blue-600">Outfit</a>
            <a href="/hubungi-kami" className="text-gray-600 hover:text-blue-600">Hubungi Kami</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Testimoni Pelanggan</h1>
          <p className="text-gray-500 mt-2">Apa kata mereka tentang kami.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Alex</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Pengalaman yang luar biasa! Pemandangannya menakjubkan."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sarah</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Tur yang terorganisir dengan baik. Pemandunya sangat berpengetahuan."</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
