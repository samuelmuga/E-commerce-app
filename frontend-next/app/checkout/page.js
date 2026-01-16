
export default function Checkout() {
  return (
    <section className="max-w-xl mx-auto space-y-10">
      <h1 className="text-4xl">Checkout</h1>

      <p className="text-gray-600">
        You’ll be redirected to our secure payment partner.
      </p>

      <form method="POST" action="https://api.yourbrand.com/checkout">
        <button
          type="submit"
          className="w-full border py-4 hover:bg-black hover:text-white transition"
        >
          Continue to Payment
        </button>
      </form>
    </section>
  );
}
