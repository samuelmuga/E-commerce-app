import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://api.yourbrand.com/products", {
    cache: "no-store"
  });
  return res.json();
}

export default async function Shop() {
  const products = await getProducts();

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-16">
      <aside className="space-y-6">
        <h3 className="uppercase text-sm tracking-widest">Filter</h3>
        <button className="block">Color</button>
        <button className="block">Size</button>
        <button className="block">Price</button>
      </aside>

      <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

