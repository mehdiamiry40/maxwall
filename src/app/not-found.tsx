import { Button, container, Footer, Header, TextLink } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 bg-sandstone">
        <div className={`${container} py-28 sm:py-36`}>
          <p className="text-sm font-bold tracking-[0.2em] text-sky-ink uppercase">404</p>
          <h1 className="font-display mt-3 text-4xl font-bold sm:text-6xl text-bluestone">This wall&apos;s not here</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            The page you&apos;re looking for has moved or doesn&apos;t exist.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button href="/">Back to home</Button>
            <TextLink href="/services">Browse services</TextLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
