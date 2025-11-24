
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCart, type Product } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailModal({ product, isOpen, onOpenChange }: ProductDetailModalProps) {
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  React.useEffect(() => {
    if (isOpen) {
      setQuantity(1); // Reset quantity when modal opens
    }
  }, [isOpen]);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: 'Added to cart',
      description: `${quantity} x ${product.name} added to your order.`,
    });
    onOpenChange(false); // Close modal after adding to cart
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl grid-cols-1 md:grid-cols-2 gap-8 p-0">
        {/* Image Section */}
        <div className="relative h-64 md:h-full min-h-[300px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            data-ai-hint={product.imageHint}
          />
           <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 text-white rounded-full"
            >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-headline mb-2">{product.name}</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-2 mb-4">
              {product.isNew && <Badge>New Arrival</Badge>}
              {product.discount && <Badge variant="destructive">-{product.discount}%</Badge>}
            </div>
            <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-bold w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
