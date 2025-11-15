import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
import { ProductCard, type Product } from "@/components/product-card";

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

export const FeaturedProducts = () => (
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
);
