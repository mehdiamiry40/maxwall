import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="bg-porcelain">
        <div className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-ochre">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-bluestone sm:text-6xl">This wall&apos;s not here</h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-zinc-600">
            The page you&apos;re looking for has moved or doesn&apos;t exist.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="bg-ochre px-7 py-4 text-base font-semibold text-white transition hover:bg-ochre-dark">
              Back to home
            </Link>
            <Link
              href="/#services"
              className="border border-ochre px-7 py-4 text-base font-semibold text-ochre transition hover:bg-white"
            >
              Browse services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
