import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  CircleUserRound,
  Cpu,
  Facebook,
  Heart,
  Instagram,
  Menu,
  Search,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ProductCard, type Product } from "@/components/product-card";
import { placeHolderImages } from "@/lib/placeholder-images";


const products: Product[] = [
  { id: '1', name: "QuantumCore i9 Processor", price: 499.99, imageUrl: placeHolderImages[0].imageUrl, imageHint: placeHolderImages[0].imageHint, discount: 10, isNew: true },
  { id: '2', name: "AeroCool RGB Gaming Case", price: 89.99, imageUrl: placeHolderImages[1].imageUrl, imageHint: placeHolderImages[1].imageHint, isNew: true },
  { id: '3', name: "GigaWave X-99 Motherboard", price: 219.99, imageUrl: placeHolderImages[2].imageUrl, imageHint: placeHolderImages[2].imageHint, discount: 5 },
  { id: '4', name: "HyperXtreme 32GB DDR5 RAM", price: 159.99, imageUrl: placeHolderImages[3].imageUrl, imageHint: placeHolderImages[3].imageHint, isNew: false },
  { id: '5', name: "NVSword RTX 9090 GPU", price: 1999.99, imageUrl: placeHolderImages[4].imageUrl, imageHint: placeHolderImages[4].imageHint, discount: 15 },
  { id: '6', name: "SwiftRead 2TB NVMe SSD", price: 179.99, imageUrl: placeHolderImages[5].imageUrl, imageHint: placeHolderImages[5].imageHint, isNew: true },
  { id: '7', name: "VoltMax 850W Gold PSU", price: 129.99, imageUrl: placeHolderImages[6].imageUrl, imageHint: placeHolderImages[6].imageHint, isNew: false },
  { id: '8', name: "ArcticFreeze Liquid Cooler", price: 119.99, imageUrl: placeHolderImages[7].imageUrl, imageHint: placeHolderImages[7].imageHint, discount: 20 },
  { id: '9', name: "MechanoType Pro Keyboard", price: 99.99, imageUrl: placeHolderImages[8].imageUrl, imageHint: placeHolderImages[8].imageHint, isNew: true },
  { id: '10', name: "GlidePoint Gaming Mouse", price: 59.99, imageUrl: placeHolderImages[9].imageUrl, imageHint: placeHolderImages[9].imageHint, isNew: false },
  { id: '11', name: "CrystalView 4K 27\" Monitor", price: 449.99, imageUrl: placeHolderImages[10].imageUrl, imageHint: placeHolderImages[10].imageHint, discount: 5 },
  { id: '12', name: "SoundScape Wireless Headset", price: 149.99, imageUrl: placeHolderImages[11].imageUrl, imageHint: placeHolderImages[11].imageHint, isNew: true },
];

const categories = ["CPUs", "Cases", "Motherboards", "RAM", "GPUs", "Storage"];

const Header = () => (
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

const Footer = () => (
  <footer className="border-t bg-background/80">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
        <div className="col-span-2 md:col-span-1">
          <Link href="#" className="flex items-center gap-2 mb-4">
            <Cpu className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">Computer Plus</span>
          </Link>
          <p className="text-sm text-muted-foreground">High-performance parts, unbeatable prices.</p>
        </div>
        <div>
          <h4 className="font-headline font-semibold mb-4">Legal</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">Shipping Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Return Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">About Warranty</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-headline font-semibold mb-4">Socials</h4>
          <div className="flex gap-4">
            <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
          </div>
        </div>
      </div>
      <div className="py-6 border-t">
        <p className="text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Computer Plus. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
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

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight font-headline mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
