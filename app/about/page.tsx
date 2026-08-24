import Link from "next/link";

const strengths = [
  {
    title: "Technology Solutions",
    description:
      "We design and develop practical technology solutions that help organizations improve operations, customer experiences, information management and decision-making.",
  },
  {
    title: "Data & Intelligence",
    description:
      "We combine data engineering, analytics, business intelligence and executive dashboards to help organizations turn information into actionable insight.",
  },
  {
    title: "Digital Transformation",
    description:
      "We help organizations move from manual and fragmented processes toward connected digital platforms, automation and scalable technology environments.",
  },
  {
    title: "Training & E-Learning",
    description:
      "We provide professional ICT training and digital learning solutions designed to develop practical technology skills for individuals, teams and organizations.",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the business",
    description:
      "Technology should solve a clearly understood business or operational problem. We begin by understanding the requirement before defining the solution.",
  },
  {
    number: "02",
    title: "Design for practical use",
    description:
      "Our solutions are designed around usability, maintainability, scalability and the realities of the organizations that will operate them.",
  },
  {
    number: "03",
    title: "Build with discipline",
    description:
      "We apply structured engineering, data and project practices to create reliable technology solutions that can evolve with changing requirements.",
  },
  {
    number: "04",
    title: "Transfer knowledge",
    description:
      "Where appropriate, we ensure users, administrators and technical teams have the knowledge required to effectively use and manage the solutions we deliver.",
  },
];

const areas = [
  "Portal Development",
  "Software Development",
  "Data Engineering",
  "Executive Dashboard Design",
  "Business & IT Automation",
  "Computer Engineering",
  "Network Engineering",
  "Mobile App Development",
  "IT Consulting",
  "Professional ICT Training",
  "Corporate Training",
  "Digital Learning Solutions",
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              About MICT
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology solutions and digital skills for a changing world.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              MICT E-Learning Services Ltd is a technology solutions and
              professional training company focused on helping individuals,
              businesses and organizations use technology to solve practical
              problems, improve performance and build digital capability.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Explore IT Services
              </Link>

              <Link
                href="/training"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company overview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A technology partner built around practical outcomes.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                MICT brings together software development, data, infrastructure,
                automation, consulting and professional technology training.
                This combination allows us to approach technology from both
                implementation and capability-development perspectives.
              </p>

              <p>
                We work with organizations that need technology to support
                business operations, customer engagement, information
                management, reporting, digital transformation and workforce
                development.
              </p>

              <p>
                Our approach is deliberately practical: understand the
                requirement, design an appropriate solution, implement with
                discipline and provide the knowledge required for effective
                adoption and continued use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two business pillars */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Our Two Core Pillars
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology delivery and technology capability.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              MICT operates across two complementary areas, giving clients
              access to both technology solutions and the skills needed to
              effectively use them.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white">
                IT
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                IT Services & Technology Solutions
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                We design and implement technology solutions across software,
                data, infrastructure, automation, mobile applications,
                portals, dashboards and consulting.
              </p>

              <Link
                href="/services"
                className="mt-6 inline-flex text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                Explore IT Services →
              </Link>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-xl font-bold text-white">
                EL
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                Training & E-Learning
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                We provide practical ICT training, corporate technology
                programmes and digital learning solutions covering data,
                programming, databases, networking, cybersecurity and other
                technology disciplines.
              </p>

              <Link
                href="/training"
                className="mt-6 inline-flex text-sm font-bold text-green-700 hover:text-green-900"
              >
                Explore Training →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Our Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Bringing multiple technology disciplines together.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="rounded-2xl border border-slate-200 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-blue-600">
                    0{index + 1}
                  </span>

                  <h3 className="text-xl font-bold text-slate-950">
                    {strength.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
              How We Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A structured approach from requirement to outcome.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <span className="text-sm font-bold text-blue-400">
                  {principle.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology and learning areas we support.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Looking for a technology partner?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Tell us about your project, business requirement, digital
            transformation objective or training need.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Contact MICT →
          </Link>
        </div>
      </section>
    </main>
  );
}