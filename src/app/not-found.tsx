import { container, Footer, Header, Pill, TextLink } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-sandstone">
        <div className={`${container} py-32`}>
          <p className="font-display text-8xl text-ochre/70">404</p>
          <h1 className="mt-6 font-display text-5xl">This wall&apos;s not here</h1>
          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
            The page you&apos;re looking for has moved or doesn&apos;t exist.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Pill href="/">Back to home</Pill>
            <TextLink href="/services">Browse services</TextLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
