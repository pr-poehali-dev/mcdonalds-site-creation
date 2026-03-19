import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MenuSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </div>
  );
};

export default Index;
