import Link from "next/link";

const courses = [
  {
    title: "Data Analysis",
    description:
      "Develop practical skills for cleaning, exploring, analyzing and interpreting business data.",
  },
  {
    title: "Data Visualization",
    description:
      "Learn how to transform complex datasets into clear charts, dashboards and decision-ready visual insights.",
  },
  {
    title: "Statistics",
    description:
      "Build a practical understanding of descriptive statistics, probability, sampling and statistical analysis.",
  },
  {
    title: "Machine Learning",
    description:
      "Understand the foundations of machine learning, predictive modelling, model evaluation and practical applications.",
  },
  {
    title: "Business Intelligence",
    description:
      "Learn how to transform organizational data into reports, dashboards and insights that support better decisions.",
  },
  {
    title: "Python for Data Science",
    description:
      "Develop practical Python skills for data manipulation, analysis, visualization and machine learning.",
  },
];

const skills = [
  "Data cleaning and preparation",
  "Exploratory data analysis",
  "Statistical analysis",
  "Data visualization",
  "Business intelligence",
  "Predictive modelling",
  "Machine learning",
  "Python for data analysis",
];

const learningApproach = [
  {
    number: "01",
    title: "Learn",
    text: "Understand the concepts, terminology and analytical techniques required for the subject.",
  },
  {
    number: "02",
    title: "Practice",
    text: "Apply the concepts to realistic datasets and practical technology exercises.",
  },
  {
    number: "03",
    title: "Analyze",
    text: "Use analytical tools and techniques to identify patterns, relationships and business insights.",
  },
  {
    number: "04",
    title: "Apply",
    text: "Translate analytical knowledge into practical projects, reports and business solutions.",
  },
];

export default function DataSciencePage() {
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
              Data Science & Analytics
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Develop practical data skills that help you transform raw
              information into meaningful insights, predictive models and
              better business decisions.
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
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Data Skills
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Turn data into knowledge and knowledge into decisions.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>
                Organizations generate enormous amounts of information every
                day. The ability to understand, analyze and communicate that
                information has become an essential technology skill.
              </p>

              <p>
                MICT provides practical data science and analytics training
                designed to help learners understand the complete analytical
                process, from preparing data through to communicating insights.
              </p>

              <p>
                Our training can be adapted for beginners, professionals,
                technical teams and organizations that want to strengthen
                their analytical capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-green-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Learning Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Build practical skills across the data lifecycle.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Explore core areas of data science, analytics and business
              intelligence through practical, structured learning.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="rounded-3xl border border-green-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-sm font-extrabold text-green-700">
                  DS
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {course.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Practical Skills
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Learn skills that can be applied to real projects.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Our courses emphasize practical understanding and application
                rather than theory alone.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
                Our Learning Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Learn by understanding, practicing and applying.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {learningApproach.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-xs font-bold tracking-widest text-green-400">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            For Organizations
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Build data capability across your organization.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We can customize data science and analytics training around your
            organization&apos;s datasets, technology stack, business processes and
            workforce capability requirements.
          </p>

          <Link
            href="/training"
            className="mt-7 inline-flex rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-800"
          >
            Explore Corporate Training
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build your data skills?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Tell us about your learning goals and let&apos;s identify the right
            training path for you or your organization.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
