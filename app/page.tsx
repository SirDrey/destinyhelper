import AppAreachart from "@/components/ui/AppAreachart";
import AppbarChart from "@/components/ui/AppbarChart";
import AppPiechart from "@/components/ui/AppPiechart";
import Cardlist from "@/components/ui/Cardlist";
import Todolist from "@/components/ui/Todolist";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2 lg:col-span-2">
        <AppbarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Cardlist title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2 lg:col-span-1">
        <AppPiechart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Cardlist title="Popular Content" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2 lg:col-span-2">
        <AppAreachart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><Todolist/></div>
    </div>
  );
}
