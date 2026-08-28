import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Technology background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-green-600/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-red-600/10 blur-3xl" />

        {/* Subtle technology grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Network lines */}
        <div className="absolute left-[8%] top-[24%] h-px w-40 rotate-[18deg] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="absolute right-[8%] top-[30%] h-px w-48 -rotate-[22deg] bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
        <div className="absolute bottom-[18%] left-[28%] h-px w-56 rotate-[12deg] bg-gradient-to-r from-transparent via-red-400/20 to-transparent" />

        {/* Network nodes */}
        <div className="absolute left-[12%] top-[22%] h-2 w-2 rounded-full bg-blue-400/60 shadow-[0_0_20px_rgba(96,165,250,0.7)]" />
        <div className="absolute left-[24%] top-[28%] h-1.5 w-1.5 rounded-full bg-green-400/60" />
        <div className="absolute right-[13%] top-[27%] h-2 w-2 rounded-full bg-green-400/60 shadow-[0_0_20px_rgba(74,222,128,0.7)]" />
        <div className="absolute right-[25%] top-[38%] h-1.5 w-1.5 rounded-full bg-blue-400/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main message */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
              <span className="text-sm font-semibold text-blue-200">
                Technology • Innovation • Growth
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology solutions that{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-green-400 bg-clip-text text-transparent">
                move your business forward.
              </span>
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
                className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-900/30"
              >
                Explore IT Services
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/training"
                className="group inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:border-green-400 hover:bg-green-500/10"
              >
                Explore Training
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
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
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              {/* Top accent */}
              <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

              <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      MICT Capabilities
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-white">
                      Technology built around your goals
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-lg shadow-blue-900/20">
                    <Image
                      src="/images/branding/mict-technology-solutions-logo.png"
                      alt="MICT Technology Solutions"
                      width={44}
                      height={44}
                      className="h-full w-full object-contain"
                    />
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

                {/* Equal business pillars */}
                <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-slate-300">
                      IT Services
                    </span>

                    <span className="text-right text-sm font-semibold text-green-400">
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

                {/* Status indicators */}
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <StatusIndicator label="Technology" />
                  <StatusIndicator label="Innovation" />
                  <StatusIndicator label="Growth" />
                </div>
              </div>
            </div>

            {/* Floating transformation badge */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-green-400/20 bg-slate-900/90 px-5 py-4 shadow-xl shadow-black/20 backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-300">
                    Digital Transformation
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Build • Transform • Grow
                  </p>
                </div>
              </div>
            </div>

            {/* Small decorative node */}
            <div className="absolute -right-3 top-10 hidden h-6 w-6 rounded-full border border-blue-400/30 bg-blue-500/10 shadow-[0_0_25px_rgba(59,130,246,0.35)] sm:block">
              <div className="m-auto mt-[7px] h-2 w-2 rounded-full bg-blue-400" />
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
      ? "border-blue-500/20 bg-blue-500/10 hover:border-blue-400/40 hover:bg-blue-500/15"
      : "border-green-500/20 bg-green-500/10 hover:border-green-400/40 hover:bg-green-500/15";

  return (
    <div
      className={`group rounded-xl border p-4 transition-all duration-300 ${accentClasses}`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            accent === "blue" ? "bg-blue-400" : "bg-green-400"
          }`}
        />

        <p className="text-sm font-bold text-white">{title}</p>
      </div>

      <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
    </div>
  );
}

function StatusIndicator({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
      <span className="text-[10px] font-medium text-slate-400">{label}</span>
    </div>
  );
}