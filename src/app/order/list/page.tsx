
'use client';

import * as React from 'react';
import {
  CaretSortIcon,
  ChevronDownIcon,
} from '@radix-ui/react-icons';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type OrderStatus = 'Pending' | 'Delivered' | 'Paid' | 'Returned' | 'Cancelled';

const data: Order[] = [
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

const getStatusBadgeVariant = (status: OrderStatus) => {
    switch (status) {
        case 'Paid':
        case 'Delivered':
            return 'default';
        case 'Pending':
            return 'secondary';
        case 'Returned':
        case 'Cancelled':
            return 'destructive';
        default:
            return 'outline';
    }
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderDate',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Order Date
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('orderDate')}</div>,
  },
  {
    accessorKey: 'bookNo',
    header: 'Book No',
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Name
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'salePrice',
    header: () => <div className="text-right">Sale Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('salePrice'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <Badge variant={getStatusBadgeVariant(row.getValue('status'))}>{row.getValue('status')}</Badge>,
  },
  {
    accessorKey: 'deliveryDate',
    header: 'Delivery Date',
    cell: ({ row }) => <div>{row.getValue('deliveryDate') || 'N/A'}</div>,
  },
  {
    accessorKey: 'paidDate',
    header: 'Paid Date',
    cell: ({ row }) => <div>{row.getValue('paidDate') || 'N/A'}</div>,
  },
  {
    accessorKey: 'returnDate',
    header: 'Return Date',
    cell: ({ row }) => <div>{row.getValue('returnDate') || 'N/A'}</div>,
  },
];

export default function OrderListPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-rose-50/20 p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-3xl font-bold font-headline">Order List</h1>
              <p className="text-muted-foreground">
                Browse and manage your orders.
              </p>
            </div>
            <Link href="/order/new" passHref>
                <Button>New Order</Button>
            </Link>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between py-4">
              <Input
                placeholder="Filter by name..."
                value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                onChange={(event) =>
                  table.getColumn('name')?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && 'selected'}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    