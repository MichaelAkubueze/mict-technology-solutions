import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Decorative background elements */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-green-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main message */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-semibold text-blue-200">
                Technology • Innovation • Growth
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology solutions that{" "}
              <span className="text-blue-400">move your business forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              MICT Technology Solutions delivers professional IT services,
              digital solutions, data-driven systems, business automation, and
              practical technology training designed for individuals and
              organizations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-900/30"
              >
                Explore IT Services
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/training"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-green-400 hover:bg-green-500/10"
              >
                Explore Training
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>Enterprise Solutions</span>
              <span>Data & Analytics</span>
              <span>Software Engineering</span>
              <span>Professional Training</span>
            </div>
          </div>

          {/* Visual capability panel */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur sm:p-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      MICT Capabilities
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-white">
                      Technology built around your goals
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 font-extrabold text-white">
                    M
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <CapabilityCard
                    title="Software"
                    description="Business applications"
                    accent="blue"
                  />

                  <CapabilityCard
                    title="Data"
                    description="Engineering & analytics"
                    accent="green"
                  />

                  <CapabilityCard
                    title="Automation"
                    description="Smarter workflows"
                    accent="green"
                  />

                  <CapabilityCard
                    title="Training"
                    description="Digital skills"
                    accent="blue"
                  />
                </div>

                <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-300">
                      IT Services
                    </span>
                    <span className="text-sm font-semibold text-green-400">
                      Training & E-Learning
                    </span>
                  </div>

                  <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="w-1/2 bg-blue-500" />
                    <div className="w-1/2 bg-green-500" />
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Two equal pillars powering technology delivery and
                    professional development.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-green-400/20 bg-green-500/10 px-5 py-4 backdrop-blur sm:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-300">
                Digital Transformation
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                Build • Transform • Grow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CapabilityCardProps {
  title: string;
  description: string;
  accent: "blue" | "green";
}

function CapabilityCard({
  title,
  description,
  accent,
}: CapabilityCardProps) {
  const accentClasses =
    accent === "blue"
      ? "border-blue-500/20 bg-blue-500/10"
      : "border-green-500/20 bg-green-500/10";

  return (
    <div className={`rounded-xl border p-4 ${accentClasses}`}>
      <p className="text-sm font-bold text-white">{title}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
    </div>
  );
}