import Footer from "../../components/Footer";

export default function StorePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="font-[var(--font-heading)] text-4xl tracking-tight md:text-5xl">
          Store
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
          Shop official merch and check out securely on Shopify.
        </p>
      </section>

      <Footer />
    </main>
  );
}
