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

const categories = ["CPUs", "Cases", "Motherboards", "RAM", "GPUs", "Storage"];

export const CategoryNav = () => (
    <section className="border-b">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                All Categories
                <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuItem>All Categories</DropdownMenuItem>
                {categories.map(category => (
                <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            </DropdownMenu>
            <nav className="hidden items-center gap-4 md:flex">
            {categories.slice(0, 4).map(category => (
                <Link href="#" key={category} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {category}
                </Link>
            ))}
            </nav>
        </div>
        <div className="relative w-full max-w-xs">
            <Input type="search" placeholder="Search products..." className="w-full pl-10" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        </div>
    </section>
);
