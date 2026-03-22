import Navbar from '@/components/Navbar';
import { HeroVariantA } from '@/components/blocks/hero/HeroVariantA';
import { MenuVariantA } from '@/components/blocks/menu/MenuVariantA';

export default function ModernVariant() {
  return (
    <div data-theme="modern" className="bg-background text-foreground min-h-screen font-sans">
      <Navbar />
      <HeroVariantA />
      <MenuVariantA />
    </div>
  );
}
