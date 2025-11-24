
'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

// Types
export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  description: string;
  discount?: number;
  isNew?: boolean;
};

export type CartItem = Product & {
  quantity: number;
};

export type OrderStatus = 'Pending' | 'Delivered' | 'Paid' | 'Returned' | 'Cancelled';

export type Order = {
  id: string;
  bookNo: string;
  name: string;
  address: string;
  price: number;
  salePrice: number;
  orderDate: string;
  status: OrderStatus;
  deliveryDate: string | null;
  paidDate: string | null;
  returnDate?: string | null;
};


interface CartContextType {
  cartItems: CartItem[];
  orders: Order[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
  placeOrder: () => string;
  totalAmount: number;
  totalItems: number;
}

const initialOrders: Order[] = [
    { id: 'ORD001', bookNo: 'A-123', name: 'John Doe', address: '123 Main St, Anytown', price: 150.00, salePrice: 140.00, orderDate: '2023-10-01', status: 'Delivered', deliveryDate: '2023-10-05', paidDate: '2023-10-06' },
    { id: 'ORD002', bookNo: 'B-456', name: 'Jane Smith', address: '456 Oak Ave, Otherville', price: 200.00, salePrice: 200.00, orderDate: '2023-10-02', status: 'Paid', deliveryDate: '2023-10-07', paidDate: '2023-10-07' },
    { id: 'ORD003', bookNo: 'C-789', name: 'Peter Jones', address: '789 Pine Ln, Sometown', price: 75.50, salePrice: 70.00, orderDate: '2023-10-03', status: 'Pending', deliveryDate: null, paidDate: null },
    { id: 'ORD004', bookNo: 'D-101', name: 'Mary Johnson', address: '101 Elm Rd, Yourtown', price: 300.00, salePrice: 280.00, orderDate: '2023-10-04', status: 'Returned', deliveryDate: '2023-10-08', paidDate: '2023-10-09', returnDate: '2023-10-12' },
    { id: 'ORD005', bookNo: 'E-112', name: 'David Williams', address: '112 Birch Blvd, Theirtown', price: 50.00, salePrice: 50.00, orderDate: '2023-10-05', status: 'Delivered', deliveryDate: '2023-10-10', paidDate: null },
    { id: 'ORD006', bookNo: 'F-131', name: 'Susan Brown', address: '131 Cedar Ct, Anotherville', price: 95.25, salePrice: 95.25, orderDate: '2023-10-06', status: 'Pending', deliveryDate: null, paidDate: null },
    { id: 'ORD007', bookNo: 'G-141', name: 'Michael Davis', address: '141 Spruce St, Lastown', price: 120.00, salePrice: 110.00, orderDate: '2023-10-07', status: 'Cancelled', deliveryDate: null, paidDate: null, returnDate: null },
    { id: 'ORD008', bookNo: 'H-151', name: 'Linda Miller', address: '151 Maple Ave, Finaltown', price: 250.00, salePrice: 250.00, orderDate: '2023-10-08', status: 'Paid', deliveryDate: '2023-10-15', paidDate: '2023-10-15' },
    { id: 'ORD009', bookNo: 'I-161', name: 'Robert Wilson', address: '161 Ash Pl, Somewhere', price: 180.75, salePrice: 180.75, orderDate: '2023-10-09', status: 'Delivered', deliveryDate: '2023-10-16', paidDate: null },
    { id: 'ORD010', bookNo: 'J-171', name: 'Patricia Moore', address: '171 Willow Way, Nowhere', price: 45.00, salePrice: 40.00, orderDate: '2023-10-10', status: 'Pending', deliveryDate: null, paidDate: null },
    { id: 'ORD011', bookNo: 'K-181', name: 'Jennifer Taylor', address: '181 Poplar Dr, Everywhere', price: 500.00, salePrice: 480.00, orderDate: '2023-10-11', status: 'Paid', deliveryDate: '2023-10-18', paidDate: '2023-10-18' },
];


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    const orderId = `ORD${(orders.length + 1).toString().padStart(3, '0')}`;
    const newOrder: Order = {
      id: orderId,
      bookNo: `Z-${Math.floor(Math.random() * 900) + 100}`,
      name: 'Customer Name', // Placeholder
      address: 'Customer Address', // Placeholder
      price: totalAmount,
      salePrice: totalAmount, // Assuming no discount for simplicity
      orderDate: new Date().toISOString().split('T')[0],
      status: 'Pending',
      deliveryDate: null,
      paidDate: null,
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    clearCart();
    return orderId;
  };


  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    orders,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    placeOrder,
    totalAmount,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
