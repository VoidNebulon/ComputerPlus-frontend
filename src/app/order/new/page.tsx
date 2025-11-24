'use client';

import * as React from 'react';
import {
  Search,
  X,
  Plus,
  Minus,
  ShoppingCart,
  Trash2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { placeHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

// Mock product data
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

const allProducts: Product[] = [
  { id: '1', name: 'QuantumCore i9 Processor', price: 499.99, imageUrl: placeHolderImages[0].imageUrl, imageHint: placeHolderImages[0].imageHint },
  { id: '2', name: 'AeroCool RGB Gaming Case', price: 89.99, imageUrl: placeHolderImages[1].imageUrl, imageHint: placeHolderImages[1].imageHint },
  { id: '3', name: 'GigaWave X-99 Motherboard', price: 219.99, imageUrl: placeHolderImages[2].imageUrl, imageHint: placeHolderImages[2].imageHint },
  { id: '4', name: 'HyperXtreme 32GB DDR5 RAM', price: 159.99, imageUrl: placeHolderImages[3].imageUrl, imageHint: placeHolderImages[3].imageHint },
  { id: '5', name: 'NVSword RTX 9090 GPU', price: 1999.99, imageUrl: placeHolderImages[4].imageUrl, imageHint: placeHolderImages[4].imageHint },
  { id: '6', name: 'SwiftRead 2TB NVMe SSD', price: 179.99, imageUrl: placeHolderImages[5].imageUrl, imageHint: placeHolderImages[5].imageHint },
  { id: '7', name: 'VoltMax 850W Gold PSU', price: 129.99, imageUrl: placeHolderImages[6].imageUrl, imageHint: placeHolderImages[6].imageHint },
  { id: '8', name: 'ArcticFreeze Liquid Cooler', price: 119.99, imageUrl: placeHolderImages[7].imageUrl, imageHint: placeHolderImages[7].imageHint },
  { id: '9', name: 'MechanoType Pro Keyboard', price: 99.99, imageUrl: placeHolderImages[8].imageUrl, imageHint: placeHolderImages[8].imageHint },
  { id: '10', name: 'GlidePoint Gaming Mouse', price: 59.99, imageUrl: placeHolderImages[9].imageUrl, imageHint: placeHolderImages[9].imageHint },
];

type CartItem = Product & {
  quantity: number;
};

export default function NewOrderPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<Product[]>([]);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchTerm]);
  
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-rose-50/20 p-4 md:p-8">
        <div className="container mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold font-headline">New Order</h1>
            <p className="text-muted-foreground">
              Create a new order by adding products from the catalog.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Search - Left Column */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Find Products</CardTitle>
                  <CardDescription>Search for products to add to the order.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search for a product..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <ScrollArea className="h-96 mt-4">
                    <div className="space-y-4 pr-4">
                      {searchResults.length > 0 ? (
                        searchResults.map((product) => (
                          <div key={product.id} className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50">
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              width={48}
                              height={48}
                              className="rounded-md object-cover"
                              data-ai-hint={product.imageHint}
                            />
                            <div className="flex-1">
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                            </div>
                            <Button size="icon" variant="outline" onClick={() => handleAddToCart(product)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        ))
                      ) : (
                        <div className="text-center text-sm text-muted-foreground pt-10">
                          {searchTerm ? 'No products found.' : 'Start typing to search.'}
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary - Right Column */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review the items in your order.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50%]">Product</TableHead>
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                        <TableHead className="text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell>
                              <div className="flex items-center justify-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <Input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value, 10) || 1)}
                                  className="h-8 w-14 text-center"
                                />
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                            <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="icon" onClick={() => handleRemoveFromCart(item.id)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={5} className="h-24 text-center">
                            Your cart is empty.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4} className="text-right font-bold text-lg">Total</TableCell>
                            <TableCell className="text-right font-bold text-lg">${totalAmount.toFixed(2)}</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableFooter>
                  </Table>
                  <Separator className="my-6" />
                  <div className="flex justify-end">
                      <Button size="lg" disabled={cartItems.length === 0} className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Place Order
                      </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
