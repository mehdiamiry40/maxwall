import type { Metadata } from "next";
import { Footer, Header } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy policy</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            {site.legalName} (ABN {site.abn}) respects your privacy and handles personal
            information in line with the Australian Privacy Principles.
          </p>
          <p>
            When you request a quote we collect your name, mobile number, email (if provided), suburb and the
            details you give us about your job. We use this only to contact you about your
            quote and the work you ask us to do.
          </p>
          <p>
            We don&apos;t sell or share your details with anyone else, except where needed
            to carry out your job or where the law requires it.
          </p>
          <p>
            To see, correct or delete the information we hold about you, email{" "}
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a> or call{" "}
            {site.phone}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
