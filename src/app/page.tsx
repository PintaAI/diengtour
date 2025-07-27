import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Dieng Tour
      </h1>
      <p className="text-center text-muted-foreground mt-4">
        The best tour in Dieng, Wonosobo, Central Java
      </p>
      <Button className="mt-8">
        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
          Contact Us on WhatsApp
        </a>
      </Button>
    </main>
  );
}
