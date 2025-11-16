import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  discount?: number;
  isNew?: boolean;
};

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link href="#" className="group block">
      <Card
        className={cn(
          "overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className
        )}
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.imageHint}
          />
          {product.discount && (
            <Badge variant="destructive" className="absolute top-3 left-3">
              -{product.discount}%
            </Badge>
          )}
          {product.isNew && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground hover:bg-accent/80">
              New
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-base font-semibold font-headline truncate">
            {product.name}
          </h3>
          <p className="mt-1 text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
