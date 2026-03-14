"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { User } from "better-auth";

const HeroSection = ({ user }: { user: User | undefined }) => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 p-12 bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl text-white">
      <Card className="bg-transparent shadow-none flex-1 min-w-0 md:w-150">
        <CardHeader className="space-y-4">
          <CardTitle className="text-2xl font-extrabold leading-tight lg:text-5xl md:text-4xl max-w-xl wrap-break-word whitespace-normal">
            Welcome {user?.name.split(" ")[0]} to the destiny helper community
          </CardTitle>
          <CardDescription className="text-md text-white/80 md:text-lg max-w-xl wrap-break-word whitespace-normal">
            Make earnings, track your progress, and stay on top of tasks
            effortlessly.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex gap-4">
          <Button size="lg" asChild>
            <Link href="/signin">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="flex-1 flex justify-center lg:justify-end ">
        <Image
          src="/test1.jpg"
          alt="Destiny Helper"
          width={1200}
          height={1200}
          className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
