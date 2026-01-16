
"use client";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items } = useCart();

  return (
    <section className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-4xl">Your Selection</h1>

      {items.length === 0 && (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {items.map(item => (
        <div key={item.id} className="flex justify-between border-b pb-6">
          <div>
            <h2>{item.name}</h2>
            <p className="text-gray-500">Qty {item.quantity}</p>
          </div>
          <p>${item.price * item.quantity}</p>
        </div>
      ))}

      <a
        href="/checkout"
        className="inline-block border px-10 py-4 hover:bg-black hover:text-white transition"
      >
        Proceed to Checkout
      </a>
    </section>
  );
}
