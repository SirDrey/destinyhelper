import AppAreachart from "@/components/ui/AppAreachart";
import AppbarChart from "@/components/ui/AppbarChart";
import AppPiechart from "@/components/ui/AppPiechart";
import Cardlist from "@/components/ui/Cardlist";
import HeroSection from "@/components/ui/Hero";
import Tasklist from "@/components/ui/Tasklist";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg">
        <HeroSection />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppbarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Cardlist title="Testimonies" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPiechart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Cardlist title="Ratings" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppAreachart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Tasklist />
      </div>
    </div>
  );
}
