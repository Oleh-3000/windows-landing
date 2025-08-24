import Header from "@/components/header";
import HeroSlider from "@/components/hero-slider";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import ReviewsCarousel from "@/components/reviews-carousel";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="font-sans bg-slate-50">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsCarousel />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
