import CardSection from '@/components/CardSection';
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import Navabar from "@/components/Navabar";


export default function Home() {
  return (
		<>
			<main>
				<Navabar />
				<HeroSection />
				<Info />
				<CardSection />
			</main>
		</>
	);
}


