import Navbar from "../components/LandingPage/Navbar";
import Hero from "../components/LandingPage/Hero";
import Features from "../components/LandingPage/Features";
import HowToOrder from "../components/LandingPage/HowToOrder";
import FeaturedMenu from "../components/LandingPage/FeaturedMenu";
import Footer from "../components/LandingPage/Footer";

export default function Home() {
  return (
    <div className="bg-[#F5EFE3] font-['Manrope'] text-[#23231F]">
      <Navbar />
      <Hero />
      <Features />
      <HowToOrder />
      <FeaturedMenu />
      <Footer />
    </div>
  );
}
