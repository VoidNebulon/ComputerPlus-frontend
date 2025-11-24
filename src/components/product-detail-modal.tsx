
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCart, type Product } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, ShoppingCart, Cpu, MemoryStick, HardDrive, Framer } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
      <DialogContent className="max-w-4xl grid-cols-1 md:grid-cols-2 gap-0 p-0">
        {/* Image Section */}
        <div className="relative h-64 md:h-full min-h-[450px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            data-ai-hint={product.imageHint}
          />
        </div>

        {/* Details Section */}
        <div className="p-8 flex flex-col">
          <div>
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold font-headline mb-2">{product.name}</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-2 mb-4">
              {product.isNew && <Badge>New Arrival</Badge>}
              {product.discount && <Badge variant="destructive">-{product.discount}%</Badge>}
            </div>
            <p className="text-muted-foreground text-sm mb-6">{product.description}</p>
            
            {product.features && product.features.length > 0 && (
              <>
                <Separator className="my-4" />
                <h4 className="font-semibold mb-3 text-md">Key Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="font-medium text-foreground/80">{feature.name}</span>
                      <span>{feature.value}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button size="lg" className="w-full text-lg h-12" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
