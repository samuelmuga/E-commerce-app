export default function Home() {
  return (
    <section className="space-y-32">
      <header className="text-center space-y-8">
        <h1 className="text-6xl font-extralight">
          Faux Florals, Perfected
        </h1>
        <p className="max-w-xl mx-auto text-gray-600">
          Sculptural monochrome arrangements designed to outlast time.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-24">
        <div className="space-y-6">
          <h2 className="text-3xl">Minimal. Timeless.</h2>
          <p className="text-gray-600">
            Our faux flowers are crafted with obsessive attention to form,
            texture, and balance.
          </p>
        </div>
        <div className="bg-gray-100 h-[400px]" />
      </section>
    </section>
  );
}