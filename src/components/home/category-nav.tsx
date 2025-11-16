import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories = ["CPUs", "Cases", "Motherboards", "RAM", "GPUs", "Storage"];

export const CategoryNav = () => {
  return (
    <section className="border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4 px-16">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">

          {/* DROPDOWN */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="group relative flex items-center gap-2 border border-border/40 hover:border-primary transition-all duration-300 hover:bg-primary/5 active:scale-[0.97]"
              >
                All Categories
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="animate-in fade-in-0 zoom-in-95 duration-200 w-48"
            >
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* NAV LINKS */}
          <nav className="hidden items-center gap-6 md:flex">
            {categories.slice(0, 4).map((category) => (
              <Link
                href="#"
                key={category}
                className={cn(
                  "relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                )}
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>

        {/* SEARCH BAR */}
        <div className="relative w-full max-w-sm group">
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full pl-10 pr-3 transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:outline-none group-focus-within:shadow-md"
          />

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-all duration-300 group-focus-within:translate-x-1 group-focus-within:text-primary"
          />
        </div>
      </div>
    </section>
  );
};
