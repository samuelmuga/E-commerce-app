import { notFound } from "next/navigation";

async function getProduct(slug: string) {
  const res = await fetch(`https://api.yourbrand.com/products/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: any) {
  const product = await getProduct(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} | NOIR BLOOM`,
    description: product.description
  };
}

export default async function ProductPage({ params }: any) {
  const product = await getProduct(params.slug);
  if (!product) notFound();

  return (
    <section className="grid md:grid-cols-2 gap-24">
      <div className="bg-gray-100 h-[500px]" />
      <div className="space-y-8">
        <h1 className="text-4xl">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl">${product.price}</p>
        <button className="border px-10 py-4 hover:bg-black hover:text-white transition">
          Add to Cart
        </button>
      </div>
    </section>
  );
}