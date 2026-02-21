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

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 p-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white">
      <Card className="bg-transparent shadow-none flex-1">
        <CardHeader className="space-y-4">
          <CardTitle className="text-5xl font-extrabold leading-tight">
            (username), welcome to Destiny Helper
          </CardTitle>
          <CardDescription className="text-lg text-white/80">
            Make earnings, track your progress, and stay on top of tasks
            effortlessly.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </CardContent>
      </Card>

      <div className="flex-1 flex justify-center lg:justify-end">
        <Image
          src="/hero-image.png"
          alt="Hero img"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
