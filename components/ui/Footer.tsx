"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {


  return (
    <footer className="bg-muted/40 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Top Grid Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">DestinyHelper</h2>
            <p className="text-sm text-muted-foreground">
              Bridging the gap between the rich and the poor
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-foreground transition"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-foreground transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest updates.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground transition">
              Twitter
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              GitHub
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
