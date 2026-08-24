import Link from "next/link";
import { notFound } from "next/navigation";

const trainingPrograms = {
  programming: {
    title: "Programming & Software Development",
    eyebrow: "Programming",
    description:
      "Develop practical programming and software development skills using modern languages, frameworks, development tools and engineering practices.",
    capabilities: [
      "Programming fundamentals",
      "Python programming",
      "Web application development",
      "Object-oriented programming",
      "Software engineering",
      "API development",
      "Version control with Git",
      "Application testing",
    ],
  },

  "database-management": {
    title: "Database Management",
    eyebrow: "Database Management",
    description:
      "Build practical database skills covering database design, SQL, administration, performance, security and modern data management technologies.",
    capabilities: [
      "Database design",
      "SQL and T-SQL",
      "Database administration",
      "Query optimization",
      "Database security",
      "Backup and recovery",
      "Data modeling",
      "Business database management",
    ],
  },

  "networking-cybersecurity": {
    title: "Networking & Cybersecurity",
    eyebrow: "Networking & Cybersecurity",
    description:
      "Develop practical knowledge of networking infrastructure, systems administration, cybersecurity principles and defensive technologies.",
    capabilities: [
      "Computer networking",
      "TCP/IP fundamentals",
      "Network configuration",
      "Network security",
      "Systems administration",
      "Cybersecurity fundamentals",
      "Security monitoring",
      "Defensive security practices",
    ],
  },

  "web-digital-technology": {
    title: "Web & Digital Technology",
    eyebrow: "Web & Digital Technology",
    description:
      "Learn modern web technologies, digital platforms, hosting, cloud concepts and practical web development.",
    capabilities: [
      "HTML and CSS",
      "JavaScript",
      "Modern web development",
      "Web hosting",
      "Domain and DNS management",
      "Content management systems",
      "Cloud technology concepts",
      "Digital platform management",
    ],
  },

  "business-technology": {
    title: "Business Technology",
    eyebrow: "Business Technology",
    description:
      "Develop technology skills that improve workplace productivity, business operations, decision-making and digital transformation.",
    capabilities: [
      "Business productivity tools",
      "Data-driven decision making",
      "Business intelligence",
      "Digital transformation",
      "Process automation",
      "Technology adoption",
      "Business systems",
      "Digital workplace skills",
    ],
  },

  corporate: {
    title: "Corporate Training",
    eyebrow: "Corporate Training",
    description:
      "Customized technology training designed around your organization's systems, workforce capability gaps, business processes and strategic objectives.",
    capabilities: [
      "Customized technology training",
      "Workforce digital skills",
      "Data and analytics training",
      "Programming training",
      "Database training",
      "Networking and cybersecurity",
      "Business technology",
      "Technology workshops",
    ],
  },
} as const;

type TrainingSlug = keyof typeof trainingPrograms;

export function generateStaticParams() {
  return Object.keys(trainingPrograms).map((slug) => ({
    slug,
  }));
}

export default async function TrainingProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(trainingPrograms, slug)) {
    notFound();
  }

  const program = trainingPrograms[slug as TrainingSlug];

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Training & E-Learning
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {program.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {program.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-green-500"
              >
                Enquire About Training
              </Link>

              <Link
                href="/training"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                View All Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Professional Development
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Practical technology skills for the digital economy.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                MICT provides practical technology training designed to help
                individuals, professionals and organizations develop useful
                digital capabilities.
              </p>

              <p>
                Our training emphasizes practical knowledge, real-world
                applications and skills that can be applied directly in
                academic, professional and business environments.
              </p>

              <p>
                Training can be delivered through instructor-led sessions,
                practical workshops, corporate programs and online learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Training Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Skills you can develop.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Our programs can be structured around the following areas and
              expanded according to learner or organizational requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {program.capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    ✓
                  </span>

                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {capability}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning formats */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Learning Formats
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Flexible learning designed around your needs.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Instructor-led training",
                "Practical workshops",
                "Corporate training",
                "Professional development",
                "Online learning",
                "Customized programs",
              ].map((format) => (
                <div
                  key={format}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                      {format}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to develop your technology skills?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Contact MICT to discuss your learning objectives, training
            requirements or corporate technology development needs.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}