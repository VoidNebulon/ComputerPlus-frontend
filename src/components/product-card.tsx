
'use client';

import * as React from 'react';
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart, Product } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => {
      const newQuantity = prev + amount;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your order.`,
    });
  };

  // Stop propagation on clicks inside the card to prevent link navigation
  const stopPropagation = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="group block">
      <Card
        className={cn(
          "overflow-hidden rounded-[20px] transition-all duration-400 hover:-translate-y-1 hover:opacity-95 hover:shadow-[0_0_30px_1px_rgba(255,74,110,0.35)] flex flex-col h-[320px]",
          className
        )}
      >
        {/* Image */}
        <div className="relative w-full h-[60%]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.imageHint}
          />
          {product.isNew && (
            <Badge className="absolute top-2 right-2 text-[10px] px-2 py-1 bg-primary text-white rounded-md">
              New Arrival
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-2 h-[40%] flex flex-col justify-between">
          {/* Product Name */}
          <h3 className="text-sm font-semibold truncate">{product.name}</h3>

          {/* Price + Discount */}
          <div className="flex items-center justify-between mt-1 text-sm font-bold text-primary">
            <span>${product.price.toFixed(2)}</span>
            {product.discount && (
              <Badge variant="destructive" className="text-[10px] px-2 py-0.5 bg-primary">
                -{product.discount}%
              </Badge>
            )}
          </div>

          {/* Quantity selector + Cart icon */}
          <div className="flex items-center justify-between mt-1" onClick={stopPropagation}>
            {/* Quantity selector (shrink-wrapped) */}
            <div className="inline-flex items-center border rounded-md overflow-hidden text-sm">
              <button
                className="px-2 py-1 hover:bg-gray-100"
                onClick={() => handleQuantityChange(-1)}
                type="button"
              >
                <Minus size={14} />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                className="w-10 text-center outline-none text-sm py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                className="px-2 py-1 hover:bg-gray-100"
                onClick={() => handleQuantityChange(1)}
                type="button"
              >
                <Plus size={14} />
              </button>
            </div>

            {/* Cart icon on right */}
            <button className="p-2 bg-primary text-white rounded-md hover:bg-primary/90" type="button" onClick={handleAddToCart}>
              <ShoppingCart size={16} />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
