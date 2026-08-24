import Link from "next/link";

const trainingAreas = [
  {
    number: "01",
    title: "Data Science & Analytics",
    description:
      "Practical training in data analysis, visualization, statistics, predictive analytics and machine learning.",
    topics: ["Python", "R", "Excel", "Statistics", "Machine Learning"],
  },
  {
    number: "02",
    title: "Programming & Software Development",
    description:
      "Build practical programming skills for developing modern applications and solving real-world technology problems.",
    topics: ["Python", "Web Development", "JavaScript", "Programming Logic", "APIs"],
  },
  {
    number: "03",
    title: "Database Management",
    description:
      "Develop the skills required to design, manage, query and optimize modern database systems.",
    topics: ["SQL Server", "T-SQL", "MongoDB", "Database Design", "Administration"],
  },
  {
    number: "04",
    title: "Networking & Cybersecurity",
    description:
      "Practical technology training covering networks, infrastructure, security principles and defensive practices.",
    topics: ["Networking", "Cybersecurity", "Linux", "Infrastructure", "Security"],
  },
  {
    number: "05",
    title: "Web & Digital Technology",
    description:
      "Learn how modern websites, web applications, domains, hosting and digital platforms are designed and operated.",
    topics: ["Web Development", "Web Hosting", "DNS", "cPanel", "Digital Platforms"],
  },
  {
    number: "06",
    title: "Business Technology",
    description:
      "Develop technology skills that improve productivity, reporting, automation and technology-enabled decision making.",
    topics: ["Excel", "Dashboards", "Automation", "Digital Productivity", "Reporting"],
  },
  {
    number: "07",
    title: "Corporate Technology Training",
    description:
      "Customized training programs designed around the technology requirements, roles and objectives of organizations.",
    topics: [
      "Needs Assessment",
      "Customized Curriculum",
      "Practical Workshops",
      "Team Training",
      "Assessment",
    ],
  },
  {
    number: "08",
    title: "Professional Development",
    description:
      "Structured learning programs for individuals who want to develop practical technology capabilities and advance professionally.",
    topics: [
      "Career Skills",
      "Technical Projects",
      "Hands-on Practice",
      "Professional Portfolio",
      "Mentorship",
    ],
  },
];

const learningModel = [
  {
    number: "01",
    title: "Learn",
    description:
      "Understand the concepts, tools and principles behind the technology.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Apply the knowledge through exercises, guided labs and practical activities.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Work on realistic projects that turn knowledge into demonstrable capability.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Receive feedback and continue developing the skills needed for real-world application.",
  },
];

export default function TrainingPage() {
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
              Build practical technology skills for the real world.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              MICT provides practical technology training and e-learning
              programs designed to help individuals, professionals and
              organizations develop skills they can apply immediately.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-green-500"
              >
                Discuss Training
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Request Corporate Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Learning Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technology training built around practical skills.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our programs cover the technologies and capabilities individuals
              and organizations need to work effectively in a digital
              environment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trainingAreas.map((area) => (
              <article
                key={area.number}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">
                    {area.number}
                  </span>

                  <span className="h-1 w-9 rounded-full bg-green-500 transition-all group-hover:w-14" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {area.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning model */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-600">
                Our Learning Model
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Learn. Practice. Build. Improve.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Technology skills become valuable when they can be applied.
                Our learning approach therefore emphasizes practical work,
                realistic projects and continuous improvement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {learningModel.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-extrabold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate training */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-blue-700 p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
                  For Organizations
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Train your team around your actual technology needs.
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
                  We can develop customized corporate training programs around
                  your organization's systems, processes, technology stack and
                  business objectives.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Request Corporate Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to develop your technology capabilities?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Talk to MICT about individual learning, professional development
            or a customized training program for your organization.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Talk to MICT →
          </Link>
        </div>
      </section>
    </main>
  );
}