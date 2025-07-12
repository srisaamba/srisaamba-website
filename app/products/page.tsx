import { Metadata } from 'next';
import ProductsHero from '@/components/ProductsHero';
import FrippyProducts from '@/components/FrippyProducts';
import DrFiberProducts from '@/components/DrFiberProducts';
import UpcomingProductsPreview from '@/components/UpcomingProductsPreview';

export const metadata: Metadata = {
  title: 'Our Products - Sri Saamba Parmeshwara Industries',
  description: 'Discover our range of natural beverages including Frippy fruit drinks and Dr Fiber prebiotic sodas. All products made with natural ingredients.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProductsHero />
      <FrippyProducts />
      <DrFiberProducts />
      <UpcomingProductsPreview />
    </div>
  );
}