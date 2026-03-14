import Todolist from "@/components/ui/Todolist";
import { getServerSession } from "@/lib/get-session";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) redirect("/signin");
  
  return (
    <div>
      <Todolist />
    </div>
  );
};

export default page;
