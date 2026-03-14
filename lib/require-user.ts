import { redirect } from "next/navigation";
import { getServerSession } from "./get-session";

export async function requireUser() {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) {
    redirect("/signin");
  }

  return user;
}

export async function getUser() {
  const session = await getServerSession();
  return session?.user;
}
