import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NOIR BLOOM | Faux Floral Studio",
  description: "Monochrome luxury faux florals crafted with timeless elegance."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-light tracking-wide">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}