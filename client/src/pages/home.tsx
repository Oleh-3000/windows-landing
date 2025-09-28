import Header from "@/components/header";
import HeroSlider from "@/components/hero-slider";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import ReviewsCarousel from "@/components/reviews-carousel";
import PartnersCarousel from "@/components/partners-carousel";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import ContactButton from "@/components/contact-button";

export default function Home() {
  return (
    <div className="font-sans bg-slate-50">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsCarousel />
      <PartnersCarousel />
      <ContactSection />
      <Footer />
      <ContactButton />
      <BackToTop />
    </div>
  );
}
