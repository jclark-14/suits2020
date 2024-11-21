import FormalCasualGrid from '../components/FormalCasualGrid/FormalCasualGrid';
import HeroCarousel from '@/components/layout/HeroCarousel';
import CallToAction from '@/components/layout/CallToAction';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <FormalCasualGrid />
      <CallToAction
        title="Come Visit Us in Person"
        subtitle="Experience our personalized service and browse our wide selection of men's and boy's fashion. Our expert consultants are ready to help you find the perfect look."
        href="/location"
        label="Find Our Location"
        ariaLabel="Find our store location and visit us for personalized service"
      />
    </div>
  );
}
