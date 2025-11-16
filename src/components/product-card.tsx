// import Image from "next/image";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Minus, Plus, ShoppingCart } from "lucide-react";

// export type Product = {
//   id: string;
//   name: string;
//   price: number;
//   imageUrl: string;
//   imageHint: string;
//   discount?: number;
//   isNew?: boolean;
// };

// type ProductCardProps = {
//   product: Product;
//   className?: string;
// };

// export function ProductCard({ product, className }: ProductCardProps) {
//   return (
//     <Link href="#" className="group block">
//       <Card
//         className={cn(
//           "overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
//           className
//         )}
//       >
//         <div className="relative aspect-square w-full overflow-hidden">
//           <Image
//             src={product.imageUrl}
//             alt={product.name}
//             fill
//             className="object-cover transition-transform duration-300 group-hover:scale-105"
//             data-ai-hint={product.imageHint}
//           />
//           {product.discount && (
//             <Badge variant="destructive" className="absolute top-3 left-3">
//               -{product.discount}%
//             </Badge>
//           )}
//           {product.isNew && (
//             <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground hover:bg-accent/80">
//               New
//             </Badge>
//           )}
//         </div>
//         <CardContent className="p-4">
//           <h3 className="text-base font-semibold font-headline truncate">
//             {product.name}
//           </h3>
//           <p className="mt-1 text-lg font-bold text-primary">
//             ${product.price.toFixed(2)}
//           </p>
//         </CardContent>
//       </Card>
//     </Link>
//   );
// }

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
          "overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-[320px]",
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
          <div className="flex items-center justify-between mt-1">
            {/* Quantity selector */}
            <div className="inline-flex items-center border rounded-md overflow-hidden text-sm">
              <button className="px-2 py-1 hover:bg-gray-100">
                <Minus size={14} />
              </button>
              <input
                type="number"
                defaultValue={1}
                className="w-10 text-center outline-none text-sm py-1"
              />
              <button className="px-2 py-1 hover:bg-gray-100">
                <Plus size={14} />
              </button>
            </div>

            {/* Cart icon */}
            <button className="p-2 bg-primary text-white rounded-md hover:bg-primary/90">
              <ShoppingCart size={16} />
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
