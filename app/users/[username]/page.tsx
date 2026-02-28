import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import data from "./data.json";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/ui/EditUser";
import { Progress } from "@/components/ui/progress";
import Cardlist from "@/components/ui/Cardlist";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLinechart from "@/components/ui/AppLinechart";
const page = () => {
  return (
    <div className="min-h-screen">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Destiny Helper</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-6 py-6">
          <SectionCards />

          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>

          <DataTable data={data} />

          {/* USER BADGES */}
          <div className="bg-primary-foreground p-6 rounded-xl shadow-sm border">
            <h1 className="text-xl font-semibold">User Badges</h1>

            <div className="flex flex-wrap gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-500/30 border border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage users
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    You have been awarded for contributions
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is popular
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* PROFILE + TRANSACTIONS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* USER PROFILE */}
            <div className="bg-primary-foreground p-6 rounded-xl shadow-sm border lg:col-span-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">User Information</h1>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>Edit User</Button>
                  </SheetTrigger>
                  <EditUser />
                </Sheet>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex flex-col gap-2 mb-6">
                  <p className="text-sm text-muted-foreground">
                    Profile Completion
                  </p>
                  <Progress value={66} />
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">Username:</span>
                  <span>Sir Drey</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">Email:</span>
                  <span>SirDrey@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">Phone number:</span>
                  <span>08105398413</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">Location:</span>
                  <span>Ilorin, Nigeria</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">Level:</span>
                  <Badge>Admin</Badge>
                </div>

                <p className="text-sm text-muted-foreground pt-2">
                  Joined on 2021.03.04
                </p>
              </div>
            </div>

            {/* RECENT TRANSACTIONS */}
            <div className="bg-primary-foreground p-6 rounded-xl shadow-sm border lg:col-span-2">
              <Cardlist title="Testimonies" />
            </div>
          </div>

          {/* USER BIO + ACTIVITY */}
          <div className="space-y-6">
            <div className="bg-primary-foreground p-6 rounded-xl shadow-sm border">
              <div className="flex items-center gap-6">
                <Avatar className="size-12">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-semibold">Sir Drey</h1>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ab ratione aliquid quia praesentium itaque cum
                voluptate facilis, ducimus blanditiis quaerat sit assumenda
                fugiat magni, dignissimos amet, vel rerum quisquam?
              </p>
            </div>

            <div className="bg-primary-foreground p-6 rounded-xl shadow-sm border">
              <h1 className="text-xl font-semibold mb-4">Analytics</h1>
              <AppLinechart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
