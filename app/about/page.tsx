import { Metadata } from 'next';
import AboutHero from '@/components/AboutHero';
import CompanyMission from '@/components/CompanyMission';
import CompanyHistory from '@/components/CompanyHistory';
import QualityStandards from '@/components/QualityStandards';

export const metadata: Metadata = {
  title: 'About Us - Sri Saamba Parmeshwara Industries',
  description: 'Learn about Sri Saamba Parmeshwara Industries, our mission to transform the food and beverage industry with healthy, natural products.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      <CompanyMission />
      <CompanyHistory />
      <QualityStandards />
    </div>
  );
}