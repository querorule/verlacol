import { useState } from "react";

import Navbar from "../../components/layout/Navbar";
import {
  BackgroundEffects,
  ChatWidget,
  HeroSection,
  StatsSection,
  ProblemSection,
  FeaturesSection,
  FooterSection,
  ProductsSection,
} from "./components";

// Página Home con diseño moderno tipo Superhuman
// Ubicación: src/ui/pages/home/Home.tsx
export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />

      {/* Chat widget */}
      <ChatWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />

      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Companies Section */}
      {/* <CompaniesSection companies={companies} /> */}

      {/* Stats Section */}
      <StatsSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
