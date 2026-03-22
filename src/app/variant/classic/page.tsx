import Navbar from '@/components/Navbar';
import { HeroVariantB } from '@/components/blocks/hero/HeroVariantB';
import { MenuVariantB } from '@/components/blocks/menu/MenuVariantB';

export default function ClassicVariant() {
  return (
    <div data-theme="classic" className="bg-background text-foreground min-h-screen font-serif">
      <Navbar />
      <HeroVariantB />
      <MenuVariantB />
    </div>
  );
}
