import AppAreachart from "@/components/ui/AppAreachart";
import AppbarChart from "@/components/ui/AppbarChart";
import AppPiechart from "@/components/ui/AppPiechart";
import Cardlist from "@/components/ui/Cardlist";
import { SectionCards } from "@/components/ui/SectionCards";
import Todolist from "@/components/ui/Todolist";

export default function Home() {
  return (
    <div>
       <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
            </div>
          </div>
        </div>


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
        <div className="bg-primary-foreground p-4 rounded-lg">
          <Todolist />
        </div>
      </div>
    </div>
  );
}
