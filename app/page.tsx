import Hero from "@/components/Hero";
import PolicyCards from "@/components/PolicyCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Hero />
      <PolicyCards />
      <Footer />
    </div>
  );
}
