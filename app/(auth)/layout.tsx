import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getServerSession } from "@/lib/get-session";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();
  const user = session?.user;

  if (user) redirect("/dashboard");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="w-full">
        <div className="px-4">{children}</div>
      </main>
    </ThemeProvider>
  );
}
