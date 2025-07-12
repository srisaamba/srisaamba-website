import HeroCarousel from '@/components/HeroCarousel';
import ProductShowcase from '@/components/ProductShowcase';
import FactoryVideo from '@/components/FactoryVideo';
import FrippyShowcase from '@/components/FrippyShowcase';
import DrFiberShowcase from '@/components/DrFiberShowcase';
import UpcomingProducts from '@/components/UpcomingProducts';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <ProductShowcase />
      <FactoryVideo />
      <FrippyShowcase />
      <DrFiberShowcase />
      <UpcomingProducts />
    </div>
  );
}