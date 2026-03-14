import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./button";
import { authClient } from "@/lib/auth-client";

type SignOutProps = {
  children?: ReactNode;
};

export const SignOut = ({ children }: SignOutProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function SignoutEverywhere() {
    setLoading(true);
    const { error } = await authClient.revokeSessions();
    setLoading(false);

    if (error) {
      toast.error(error.message || "Failed to log out");
    } else {
      toast.success("User logged out");
      router.push("/signin");
    }
  }

  return (
    <Button
      onClick={SignoutEverywhere}
      className="w-full hover:bg-destructive"
    >
      {loading ? "Signing Out..." : (children ?? "Signout")}
    </Button>
  );
};
