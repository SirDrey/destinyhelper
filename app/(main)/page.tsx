import AppAreachart from "@/components/ui/AppAreachart";
import AppbarChart from "@/components/ui/AppbarChart";
import AppPiechart from "@/components/ui/AppPiechart";
import Cardlist from "@/components/ui/Cardlist";
import HeroSection from "@/components/ui/Hero";
import Tasklist from "@/components/ui/Tasklist";
import { getUser } from "@/lib/require-user";

const Home = async () => {
  const user = await getUser();

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg">
        <HeroSection user={user} />
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
};

export default Home;
