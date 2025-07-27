import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { HomeIcon, Package, Image as ImageIcon, Star, Shirt, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Putratour</div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="flex items-center text-blue-600 font-bold"><HomeIcon className="w-4 h-4 mr-2" />Home</Link>
            <Link href="/paket-wisata" className="flex items-center text-gray-600 hover:text-blue-600"><Package className="w-4 h-4 mr-2" />Paket Wisata</Link>
            <Link href="/gallery" className="flex items-center text-gray-600 hover:text-blue-600"><ImageIcon className="w-4 h-4 mr-2" />Gallery</Link>
            <Link href="/testimonials" className="flex items-center text-gray-600 hover:text-blue-600"><Star className="w-4 h-4 mr-2" />Testimonials</Link>
            <Link href="/outfit" className="flex items-center text-gray-600 hover:text-blue-600"><Shirt className="w-4 h-4 mr-2" />Outfit</Link>
            <Link href="/hubungi-kami" className="flex items-center text-gray-600 hover:text-blue-600"><Phone className="w-4 h-4 mr-2" />Hubungi Kami</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Paket Dieng Sesuai Liburmu</h1>
          <p className="text-gray-500 mt-2">Trip privat, fleksibel & bisa request destinasi</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white rounded-xl shadow-md overflow-hidden">
            <CardHeader className="p-0">
              <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/76/9a/93/dataran-tinggi-dieng.jpg?w=800&h=500&s=1" alt="One Day Tour Dieng" width={400} height={250} className="w-full" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold">One Day Tour Dieng</CardTitle>
              <CardDescription className="text-gray-600 mt-2">Paket wisata Dieng satu hari penuh. Sunrise, destinasi utama, dan kembali di hari yang sama.</CardDescription>
              <p className="text-gray-800 font-bold mt-4">Harga mulai Rp275.000/orang</p>
            </CardContent>
            <CardFooter className="p-6">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Detail Paket Wisata <ChevronRight className="w-4 h-4 ml-2" /></Button>
            </CardFooter>
          </Card>

          <Card className="bg-white rounded-xl shadow-md overflow-hidden">
            <CardHeader className="p-0">
              <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/76/9a/93/dataran-tinggi-dieng.jpg?w=800&h=500&s=1" alt="Paket 2 Hari 1 Malam" width={400} height={250} className="w-full" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold">Paket 2 Hari 1 Malam</CardTitle>
              <CardDescription className="text-gray-600 mt-2">Trip santai dengan satu malam menginap. Cukup waktu untuk explore spot terbaik Dieng.</CardDescription>
              <p className="text-gray-800 font-bold mt-4">Harga mulai Rp750.000/orang</p>
            </CardContent>
            <CardFooter className="p-6">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Detail Paket Wisata <ChevronRight className="w-4 h-4 ml-2" /></Button>
            </CardFooter>
          </Card>

          <Card className="bg-white rounded-xl shadow-md overflow-hidden">
            <CardHeader className="p-0">
              <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/76/9a/93/dataran-tinggi-dieng.jpg?w=800&h=500&s=1" alt="Paket 3 Hari 2 Malam" width={400} height={250} className="w-full" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold">Paket 3 Hari 2 Malam</CardTitle>
              <CardDescription className="text-gray-600 mt-2">Paket lengkap untuk full eksplorasi. Sunrise, hidden gem, wisata alam, budaya & kuliner.</CardDescription>
              <p className="text-gray-800 font-bold mt-4">Harga mulai Rp975.000/orang</p>
            </CardContent>
            <CardFooter className="p-6">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Detail Paket Wisata <ChevronRight className="w-4 h-4 ml-2" /></Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>
  );
}
