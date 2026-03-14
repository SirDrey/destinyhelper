
import AppSidebar from "@/components/ui/AppSidebar";
import Nav from "@/components/ui/Nav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import Footer from "@/components/ui/Footer";
import { getUser } from "@/lib/require-user";



export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar-state")?.value === "true";

    const user = await getUser();
 

  return (
 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="w-full">
              <Nav user={user}/>
              <div className="px-4">{children}</div>
              <Footer />
            </main>
          </SidebarProvider>
        </ThemeProvider>
    
  );
}
