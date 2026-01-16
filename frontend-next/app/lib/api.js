
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  color: string;
  size: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProduct(slug: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${slug}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}
