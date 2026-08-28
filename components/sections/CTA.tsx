import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-blue-700 py-20 sm:py-24">
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
          Let&apos;s Build Something That Matters
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Have a technology challenge?
          <br />
          Let&apos;s turn it into a solution.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
          Whether you need a digital platform, business application, data
          solution, infrastructure, automation, mobile app or professional
          technology training, MICT can help you move from idea to execution.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Discuss Your Project
            <span className="ml-2">→</span>
          </Link>

          <Link
            href="/training"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Explore Training
            <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-blue-100">
          <span>✓ Technology Solutions</span>
          <span>✓ Professional Training</span>
          <span>✓ Business-Focused Delivery</span>
        </div>
      </div>
    </section>
  );
}