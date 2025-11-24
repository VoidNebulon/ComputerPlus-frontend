
'use client';

import * as React from 'react';
import { ProductCard } from "@/components/product-card";
import { ProductDetailModal } from "@/components/product-detail-modal";
import type { Product } from "@/context/cart-context";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import { placeHolderImages } from "@/lib/placeholder-images";

const products: Omit<Product, 'imageUrl' | 'imageHint' | 'description' | 'features'>[] = [
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
        description: image.description,
        features: image.features,
    };
});


export const Products = () => {
    const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

    return (
        <section className="px-16 py-12">
            <div className="container">
                <h2 className="text-3xl font-bold font-headline mb-8">Products</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {productsWithImages.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onCardClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>

                {/* Modern Pagination */}
                <div className="mt-8 flex justify-center">
                    <Pagination>
                        <PaginationContent className="flex space-x-1">
                            {/* Previous Button */}
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-primary transition-colors"
                                />
                            </PaginationItem>

                            {/* Page Numbers */}
                            {[1, 2, 3, 4].map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href="#"
                                        isActive={page === 1} // Page 1 active by default
                                        className={`
                                            px-3 py-1 rounded border transition-colors
                                            ${page === 1 ? "bg-primary text-white border-primary" : "border-gray-300 text-gray-600 hover:bg-primary"}
                                            `}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            {/* Next Button */}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-primary transition-colors"
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
             {selectedProduct && (
                <ProductDetailModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onOpenChange={(isOpen) => {
                        if (!isOpen) {
                            setSelectedProduct(null);
                        }
                    }}
                />
            )}
        </section>
    );
}
