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
  { id: '1', name: "QuantumCore i9 Processor", price: 499.99, imageUrl: "https://picsum.photos/seed/100/600/600", imageHint: "cpu processor", discount: 10, isNew: true },
  { id: '2', name: "AeroCool RGB Gaming Case", price: 89.99, imageUrl: "https://picsum.photos/seed/101/600/600", imageHint: "computer case", isNew: true },
  { id: '3', name: "GigaWave X-99 Motherboard", price: 219.99, imageUrl: "https://picsum.photos/seed/102/600/600", imageHint: "motherboard circuit", discount: 5 },
  { id: '4', name: "HyperXtreme 32GB DDR5 RAM", price: 159.99, imageUrl: "https://picsum.photos/seed/103/600/600", imageHint: "ram memory", isNew: false },
  { id: '5', name: "NVSword RTX 9090 GPU", price: 1999.99, imageUrl: "https://picsum.photos/seed/104/600/600", imageHint: "graphics card", discount: 15 },
  { id: '6', name: "SwiftRead 2TB NVMe SSD", price: 179.99, imageUrl: "https://picsum.photos/seed/105/600/600", imageHint: "ssd drive", isNew: true },
  { id: '7', name: "VoltMax 850W Gold PSU", price: 129.99, imageUrl: "https://picsum.photos/seed/106/600/600", imageHint: "power supply", isNew: false },
  { id: '8', name: "ArcticFreeze Liquid Cooler", price: 119.99, imageUrl: "https://picsum.photos/seed/107/600/600", imageHint: "cpu cooler", discount: 20 },
  { id: '9', name: "MechanoType Pro Keyboard", price: 99.99, imageUrl: "https://picsum.photos/seed/108/600/600", imageHint: "mechanical keyboard", isNew: true },
  { id: '10', name: "GlidePoint Gaming Mouse", price: 59.99, imageUrl: "https://picsum.photos/seed/109/600/600", imageHint: "gaming mouse", isNew: false },
  { id: '11', name: "CrystalView 4K 27\" Monitor", price: 449.99, imageUrl: "https://picsum.photos/seed/110/600/600", imageHint: "computer monitor", discount: 5 },
  { id: '12', name: "SoundScape Wireless Headset", price: 149.99, imageUrl: "https://picsum.photos/seed/111/600/600", imageHint: "gaming headset", isNew: true },
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="#" className="flex items-center gap-2 mb-4">
            <Cpu className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">Computer Plus</span>
          </Link>
          <div className="flex gap-4 mt-4">
            <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 text-muted-foreground hover:text-primary" fill="currentColor">
                <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <h4 className="font-headline font-semibold mb-4 text-center md:text-left">Legal</h4>
          <nav className="flex flex-col gap-2 text-sm text-center md:text-left">
            <Link href="#" className="text-muted-foreground hover:text-primary">Shipping Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Return Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">About Warranty</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
          </nav>
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
