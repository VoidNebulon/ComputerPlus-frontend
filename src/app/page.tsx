import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CategoryNav } from "@/components/home/category-nav";
import { Products } from "@/components/home/products";


export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <CategoryNav />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
