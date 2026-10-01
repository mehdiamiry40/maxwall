import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-porcelain">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-zinc-600">
              <Link href="/" className="transition hover:text-ochre">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Privacy Policy</span>
            </nav>
            <h1 className="mt-8 font-display text-4xl font-semibold text-bluestone sm:text-5xl">Privacy Policy</h1>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto max-w-3xl space-y-5 px-4 py-14 text-lg leading-relaxed text-zinc-700 sm:px-6 sm:py-16">
            <p>
              {site.legalName} (ABN {site.abn}) respects your privacy and handles personal information
              in line with the Australian Privacy Principles.
            </p>
            <p>
              When you request a quote we collect your name, mobile number, email (if provided),
              suburb and the details you give us about your job. We use this only to contact you about
              your quote and the work you ask us to do.
            </p>
            <p>
              We don&apos;t sell or share your details with anyone else, except where needed to carry out
              your job or where the law requires it.
            </p>
            <p>
              To see, correct or delete the information we hold about you, email{" "}
              <a href={`mailto:${site.email}`} className="text-ochre underline">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={phoneHref} className="text-ochre underline">
                {site.phone}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
