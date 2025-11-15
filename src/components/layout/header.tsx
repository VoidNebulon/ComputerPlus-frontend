import Link from "next/link";
import {
  CircleUserRound,
  Cpu,
  Heart,
  Menu,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="#" className="mr-6 flex items-center gap-2">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="hidden font-bold font-headline sm:inline-block">Computer Plus</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
          <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Order</Link>
          <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Report</Link>
          <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Support</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button variant="ghost" size="icon" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <CircleUserRound className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                  <Cpu className="h-6 w-6 text-primary" />
                  <span className="font-headline">Computer Plus</span>
                </Link>
                <Link href="#" className="hover:text-foreground/80 text-foreground/60">Home</Link>
                <Link href="#" className="hover:text-foreground/80 text-foreground/60">Order</Link>
                <Link href="#" className="hover:text-foreground/80 text-foreground/60">Report</Link>
                <Link href="#" className="hover:text-foreground/80 text-foreground/60">Support</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );