import Navbar from '@/components/Navbar';
import { HeroVariantC } from '@/components/blocks/hero/HeroVariantC';
import { MenuVariantC } from '@/components/blocks/menu/MenuVariantC';

export default function CasualVariant() {
  return (
    <div data-theme="casual" className="bg-background text-foreground min-h-screen font-sans">
      <Navbar />
      <HeroVariantC />
      <MenuVariantC />
    </div>
  );
}
