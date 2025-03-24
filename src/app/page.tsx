import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedChefs from '@/components/FeaturedChefs';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <FeaturedChefs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
} 