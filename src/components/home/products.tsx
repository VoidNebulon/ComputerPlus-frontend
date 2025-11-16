import { ProductCard, type Product } from "@/components/product-card";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import { placeHolderImages } from "@/lib/placeholder-images";

const products: Omit<Product, 'imageUrl' | 'imageHint'>[] = [
    { id: '1', name: "QuantumCore i9 Processor", price: 499.99, discount: 10, isNew: true },
    { id: '2', name: "AeroCool RGB Gaming Case", price: 89.99, isNew: true },
    { id: '3', name: "GigaWave X-99 Motherboard", price: 219.99, discount: 5 },
    { id: '4', name: "HyperXtreme 32GB DDR5 RAM", price: 159.99, isNew: false },
    { id: '5', name: "NVSword RTX 9090 GPU", price: 1999.99, discount: 15 },
    { id: '6', name: "SwiftRead 2TB NVMe SSD", price: 179.99, isNew: true },
    { id: '7', name: "VoltMax 850W Gold PSU", price: 129.99, isNew: false },
    { id: '8', name: "ArcticFreeze Liquid Cooler", price: 119.99, discount: 20 },
    { id: '9', name: "MechanoType Pro Keyboard", price: 99.99, isNew: true },
    { id: '10', name: "GlidePoint Gaming Mouse", price: 59.99, isNew: false },
    { id: '11', name: "CrystalView 4K 27\" Monitor", price: 449.99, discount: 5 },
    { id: '12', name: "SoundScape Wireless Headset", price: 149.99, isNew: true },
    { id: '13', name: "GigaWave X-99 Motherboard", price: 219.99, discount: 5 },
    { id: '14', name: "HyperXtreme 32GB DDR5 RAM", price: 159.99, isNew: false },
    { id: '15', name: "NVSword RTX 9090 GPU", price: 1999.99, discount: 15 },
    { id: '16', name: "SwiftRead 2TB NVMe SSD", price: 179.99, isNew: true },
    { id: '17', name: "VoltMax 850W Gold PSU", price: 129.99, isNew: false },
    { id: '18', name: "ArcticFreeze Liquid Cooler", price: 119.99, discount: 20 },
    { id: '19', name: "MechanoType Pro Keyboard", price: 99.99, isNew: true },
    { id: '20', name: "GlidePoint Gaming Mouse", price: 59.99, isNew: false },
];

const productsWithImages: Product[] = products.map((product, index) => {
    const image = placeHolderImages[index % placeHolderImages.length];
    return {
        ...product,
        imageUrl: image.imageUrl,
        imageHint: image.imageHint,
    };
});


export const Products = () => (
    <section className="px-16 py-12">
        <div className="container">
            <h2 className="text-3xl font-bold font-headline mb-8">Products</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {productsWithImages.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            <Pagination className="mt-12">
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
    </section>
);
