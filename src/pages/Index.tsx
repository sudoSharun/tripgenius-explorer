
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Nav from "@/components/Nav";

const Index = () => {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <FeaturesSection />
      </main>
    </>
  );
};

export default Index;
