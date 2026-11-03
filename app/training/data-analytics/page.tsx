import type { Metadata } from "next";
import PaystackCheckout from "@/components/training/PaystackCheckout";
import PaymentStatus from "@/components/training/PaymentStatus";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  Database,
  FileSpreadsheet,
  LineChart,
  MonitorPlay,
  Presentation,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Powered Data Analytics & Business Intelligence Bootcamp | MICT Academy",
  description:
    "Learn Excel, Power BI, SQL, Power Query and AI through practical business projects. Join the MICT Data Analytics & Business Intelligence Bootcamp and build a professional analytics portfolio.",
  keywords: [
    "Data Analytics course Nigeria",
    "Power BI training Nigeria",
    "Excel Data Analytics course",
    "SQL training Nigeria",
    "Business Intelligence course Nigeria",
    "AI Data Analytics course",
    "Data Analyst training Nigeria",
  ],
};

const learningAreas = [
  {
    icon: FileSpreadsheet,
    title: "Excel for Analytics",
    text: "Clean, calculate, summarize and visualize business data with advanced Excel formulas, PivotTables and dashboards.",
  },
  {
    icon: Database,
    title: "Power Query",
    text: "Build repeatable data preparation workflows for importing, cleaning, merging and refreshing datasets.",
  },
  {
    icon: BarChart3,
    title: "Power BI",
    text: "Model data, write DAX measures and design decision-ready dashboards with meaningful KPIs.",
  },
  {
    icon: Database,
    title: "SQL for Analysts",
    text: "Query relational data using filtering, aggregation, joins, CTEs and window functions to answer business questions.",
  },
  {
    icon: BrainCircuit,
    title: "AI for Data Analytics",
    text: "Use AI to accelerate exploration, formulas, SQL, insight generation and reporting while validating every analytical output.",
  },
];

const projects = [
  "Sales Performance Dashboard",
  "HR Analytics Dashboard",
  "Financial Performance Dashboard",
  "Inventory Analytics",
  "Executive Business Intelligence Dashboard",
];

const curriculum = [
  [
    "01",
    "Data Analytics & BI Foundations",
    "Understand analytics, business intelligence, KPIs, metrics and business questions. Explore a realistic business dataset and turn a vague problem into measurable questions.",
  ],
  [
    "02",
    "Excel for Data Analytics",
    "Work with XLOOKUP, SUMIFS, COUNTIFS, cleaning techniques, PivotTables, PivotCharts and dashboard fundamentals. Build an Excel Sales Dashboard.",
  ],
  [
    "03",
    "Power Query",
    "Import, transform and clean data, handle missing values and duplicates, merge and append tables, and create refreshable preparation workflows.",
  ],
  [
    "04",
    "Power BI & Data Modelling",
    "Build relationships and models, create measures and KPIs with DAX fundamentals, and design an Executive Sales Dashboard.",
  ],
  [
    "05",
    "SQL for Data Analysts",
    "Use SELECT, WHERE, GROUP BY, ORDER BY, JOIN, CASE, aggregations, CTEs and window functions to perform practical business analysis.",
  ],
  [
    "06",
    "AI for Data Analytics",
    "Use AI as an analytical assistant for data exploration, SQL, formulas, insights and reports. Learn how to validate AI outputs rather than accept them blindly.",
  ],
  [
    "07",
    "Portfolio Project",
    "Bring the workflow together: prepare data, analyse it, build a dashboard, generate insights and present the business story behind the numbers.",
  ],
  [
    "08",
    "Career, Freelancing & Business",
    "Package your portfolio, improve your CV and LinkedIn presence, prepare for interviews, explore freelancing and practise presenting analytics work to clients or employers.",
  ],
];

const audience = [
  "Students and recent graduates",
  "NYSC members and job seekers",
  "Professionals in finance, HR, operations and administration",
  "Accountants and business owners",
  "IT professionals moving into analytics",
  "Aspiring data analysts and freelancers",
];

const benefits = [
  "8-week structured programme",
  "Live online classes + recordings",
  "Practical business datasets",
  "SQL exercises and AI prompt resources",
  "Assignments and feedback",
  "Five portfolio projects",
  "WhatsApp student community",
  "Career and portfolio guidance",
  "Certificate of completion",
];

const faqs = [
  [
    "Is this suitable for a beginner?",
    "Yes. No advanced technical background is required. Basic computer skills, a laptop or desktop and a willingness to practise are enough to start.",
  ],
  [
    "Do I need programming experience?",
    "No. The programme starts with business analytics fundamentals and builds toward SQL and AI-assisted analysis step by step.",
  ],
  [
    "Do I need Excel experience?",
    "Basic familiarity is helpful but not mandatory. The curriculum introduces the Excel techniques needed for the projects.",
  ],
  [
    "Will the classes be online?",
    "Yes. The bootcamp is delivered online with live sessions and recordings for revision.",
  ],
  [
    "Will I receive a certificate?",
    "Yes. Participants who complete the programme requirements receive a MICT certificate of completion.",
  ],
  [
    "Will I build a portfolio?",
    "Yes. The programme includes five practical projects plus a dedicated portfolio project and presentation guidance.",
  ],
  [
    "Will the course guarantee me a job or income?",
    "No. The programme provides practical skills, projects and career guidance, but employment, freelance work and income depend on each participant's application of those skills and the opportunities available.",
  ],
  [
    "How will I pay?",
    "The founding-cohort registration is handled through MICT's secure Paystack checkout. If you need help before or after payment, contact MICT on WhatsApp.",
  ],
];

function SectionIntro({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-sm font-bold uppercase tracking-[0.18em] ${
          light ? "text-green-400" : "text-green-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default function DataAnalyticsBootcampPage() {
  return (
    <main className="pb-20 lg:pb-0">
      <PaymentStatus />
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-green-300">
              MICT Academy • Professional Online Training
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn Raw Data Into <span className="text-green-400">Business Decisions.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Master Excel, Power Query, Power BI, SQL and AI through practical
              business projects — and build a portfolio that demonstrates what
              you can actually do.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 text-sm font-semibold text-slate-200">
              {[
                "8 Weeks",
                "Live Online",
                "5 Practical Projects",
                "Certificate",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#paystack-checkout"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-500 hover:shadow-lg"
              >
                Join the Founding Cohort — ₦15,000
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View Curriculum
              </Link>
            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-amber-300">
              🔥 Founding Cohort — first 100 students
            </p>
          </div>

          {/* Dashboard visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-900 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
                      Executive BI Dashboard
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">Sales Performance</p>
                  </div>
                  <div className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold text-blue-300">
                    Q4
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2.5">
                  {[
                    ["Revenue", "₦84.6M", "+18.4%"],
                    ["Profit", "₦21.3M", "+12.7%"],
                    ["Orders", "4,286", "+9.8%"],
                  ].map(([label, value, change]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[9px] font-semibold text-slate-500">{label}</p>
                      <p className="mt-1 text-sm font-black text-white sm:text-base">{value}</p>
                      <p className="mt-1 text-[9px] font-bold text-green-400">{change}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-[1.4fr_0.8fr]">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between text-[9px] text-slate-400">
                      <span>Revenue Trend</span>
                      <span>Monthly</span>
                    </div>
                    <div className="mt-4 flex h-28 items-end gap-1.5">
                      {[28, 40, 35, 53, 47, 65, 61, 78, 70, 88, 82, 96].map((height, index) => (
                        <div key={index} className="flex-1 rounded-t bg-blue-500/70" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[9px] text-slate-400">Top Regions</p>
                    <div className="mt-4 space-y-3">
                      {[
                        ["South", "82%"],
                        ["West", "68%"],
                        ["North", "51%"],
                      ].map(([region, width]) => (
                        <div key={region}>
                          <div className="mb-1 flex justify-between text-[9px] text-slate-400">
                            <span>{region}</span><span>{width}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-green-400" style={{ width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/5 p-3">
                  <Sparkles className="h-4 w-4 shrink-0 text-green-400" />
                  <p className="text-[10px] leading-5 text-slate-300">
                    Insight: South region leads revenue growth and should receive the next campaign focus.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl sm:block">
              <p className="text-[9px] uppercase tracking-widest text-slate-500">Workflow</p>
              <p className="mt-1 text-xs font-bold text-white">Raw Data → Insight → Decision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4 px-4 sm:px-6 lg:px-8">
          {[
            [FileSpreadsheet, "Excel"],
            [BarChart3, "Power BI"],
            [Database, "SQL"],
            [BrainCircuit, "AI"],
          ].map(([Icon, label]) => (
            <div key={label as string} className="flex items-center justify-center gap-2 py-5 text-sm font-bold text-slate-700">
              <Icon className="h-5 w-5 text-blue-700" />
              {label as string}
            </div>
          ))}
        </div>
      </section>

      {/* Problem / transformation */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">The Problem</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                You have data. But can you turn it into insight?
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Businesses need people who can clean messy data, identify trends,
                calculate meaningful KPIs, build dashboards and explain what the
                numbers mean for the business.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This bootcamp is built around that complete workflow — not just
                learning software features in isolation.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Clean business data",
                "Ask better questions",
                "Calculate useful KPIs",
                "Build decision-ready dashboards",
                "Explain analytical findings",
                "Present a business story",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-3xl bg-slate-950 p-6 sm:p-8">
            <div className="grid gap-4 text-center sm:grid-cols-6">
              {["Raw Data", "Clean", "Analyse", "Visualise", "Interpret", "Decision"].map((step, index) => (
                <div key={step} className="relative rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                  <span className="text-[10px] font-bold text-green-400">0{index + 1}</span>
                  <p className="mt-1 text-sm font-bold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning areas */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="What You’ll Learn"
            title="Five core skills. One complete analytics workflow."
            text="Learn the tools businesses use to move from spreadsheets and databases to dashboards, insights and decisions."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {learningAreas.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-green-50 group-hover:text-green-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-blue-950">
            <strong>AI principle:</strong> AI is taught as an analytical assistant — not as a replacement for analytical thinking. You will learn to validate outputs before using them in business work.
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Build Your Portfolio"
            title="Don’t just watch lessons. Build evidence of what you can do."
            text="The programme uses realistic business scenarios so you finish with practical work you can discuss with employers, clients and professional contacts."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project} className={`rounded-3xl border p-7 ${index === 4 ? "border-blue-200 bg-blue-50 md:col-span-2 lg:col-span-1" : "border-slate-200 bg-slate-50"}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-blue-700">0{index + 1}</span>
                  <Presentation className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="mt-8 text-xl font-bold text-slate-950">{project}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Analyse a realistic dataset, identify key metrics and present the findings in a clear business format.
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-800">
              I Want To Build These Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="scroll-mt-24 bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="8-Week Curriculum"
            title="A structured path from fundamentals to portfolio."
            text="Each week adds a practical capability and moves you closer to independently handling business analytics work."
            light
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {curriculum.map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-green-400/30 hover:bg-white/[0.06]">
                <div className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-xs font-black text-green-400">{number}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Week {number}: {title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Who It’s For"
              title="Built for people who want practical skills."
              text="You do not need to be a data scientist. You need curiosity, a laptop and the commitment to practise."
            />
            <div className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5 text-sm leading-6 text-green-950">
              <strong>Prerequisites:</strong> basic computer skills, a laptop or desktop, internet access for live sessions and willingness to complete practical work.
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {audience.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <Users className="h-5 w-5 shrink-0 text-blue-700" />
                <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme format */}
      <section className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="How It Works" title="Learn → Practise → Build → Present" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Learn", "Understand the concepts, tools and business context."],
              ["02", "Practise", "Work through exercises and guided datasets."],
              ["03", "Build", "Create dashboards, analyses and portfolio projects."],
              ["04", "Present", "Explain insights clearly to employers, clients or stakeholders."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-3xl border border-blue-100 bg-white p-6">
                <span className="text-xs font-black tracking-widest text-blue-700">{number}</span>
                <h3 className="mt-4 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionIntro
              eyebrow="Your Learning Package"
              title="Everything you need to practise beyond the classroom."
              text="The programme is designed so your learning materials, projects and career preparation stay connected."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionIntro
              eyebrow="After The Classes"
              title="Your course should not end when the classes end."
              text="We help you think about how to present your new skills professionally — through projects, portfolio work, CV positioning, LinkedIn and practical career or freelancing guidance."
              light
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Target, "Portfolio", "Turn projects into evidence of capability."],
              [LineChart, "Career", "Prepare to communicate analytics skills clearly."],
              [MonitorPlay, "Freelancing", "Understand how analytics projects can be packaged for clients."],
              [Presentation, "Business Communication", "Learn to present insights rather than just charts."],
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon className="h-6 w-6 text-green-400" />
                <h3 className="mt-4 font-bold text-white">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MICT */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Why MICT" title="Technology + Data + Business" text="The training sits inside a technology company that also works with data, software, automation and business technology — so the programme is designed around practical application." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Practical-first learning",
              "Business-focused projects",
              "AI-enabled workflow",
              "Portfolio-driven delivery",
              "Career-conscious guidance",
              "Accessible online format",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Check className="h-5 w-5 text-green-600" />
                <p className="mt-3 font-bold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-bold text-blue-800">Learn Technology. Build Skills. Create Value.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">Choose Your Cohort</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Start with the founding cohort.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Start with the founding cohort and complete registration securely through the MICT Paystack checkout.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PricingCard
              name="Founding Cohort"
              price="₦15,000"
              note="First 100 students"
              featured
              items={[
                "8-week programme",
                "Live classes + recordings",
                "Excel + Power Query + Power BI",
                "SQL + AI for analytics",
                "5 practical projects",
                "Student community",
                "Certificate",
              ]}
            />
            <PricingCard
              name="Standard"
              price="₦25,000"
              note="Next 350 students"
              items={[
                "Everything in Founding",
                "Portfolio review",
                "CV review",
                "LinkedIn guidance",
                "Additional datasets",
                "Career session",
              ]}
            />
            <PricingCard
              name="Premium"
              price="₦50,000"
              note="50 seats"
              items={[
                "Everything in Standard",
                "Small-group mentorship",
                "Individual project feedback",
                "Personal portfolio review",
                "CV + LinkedIn review",
                "Freelancing strategy",
                "One-on-one consultation",
              ]}
            />
          </div>

          <PaystackCheckout />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Questions before you enrol?</h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50 px-6">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-bold text-slate-900">
                  <span>{question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-3xl pr-8 text-sm leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final" className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-100">Your Analytics Journey Starts Here</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Learn. Build. Analyse. Present.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">Join the MICT founding cohort and start building practical analytics skills through real business projects.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#paystack-checkout" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-green-700 transition hover:bg-green-50">
              Join the Founding Cohort — ₦15,000 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
              Chat With MICT
            </Link>
          </div>
          <p className="mt-4 text-xs font-semibold text-green-100">Secure checkout via Paystack.</p>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-bold uppercase tracking-wider text-green-700">Founding Cohort</p>
            <p className="text-sm font-black text-slate-950">₦15,000</p>
          </div>
          <Link href="#paystack-checkout" className="inline-flex shrink-0 items-center justify-center rounded-full bg-green-600 px-5 py-3 text-xs font-black text-white hover:bg-green-700">
            Enroll Now
          </Link>
        </div>
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  note,
  items,
  featured = false,
}: {
  name: string;
  price: string;
  note: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <article className={`relative flex h-full flex-col rounded-3xl border p-7 shadow-sm ${featured ? "border-green-500 bg-slate-950 text-white shadow-xl shadow-green-900/10" : "border-slate-200 bg-white"}`}>
      {featured && <span className="absolute -top-3 left-6 rounded-full bg-green-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">Recommended launch offer</span>}
      <p className={`text-sm font-bold uppercase tracking-wider ${featured ? "text-green-400" : "text-blue-700"}`}>{name}</p>
      <p className={`mt-3 text-4xl font-black ${featured ? "text-white" : "text-slate-950"}`}>{price}</p>
      <p className={`mt-1 text-xs font-semibold ${featured ? "text-slate-400" : "text-slate-500"}`}>{note}</p>
      <div className={`my-6 h-px ${featured ? "bg-white/10" : "bg-slate-200"}`} />
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-green-400" : "text-green-600"}`} />
            <span className={featured ? "text-slate-300" : "text-slate-600"}>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={featured ? "#paystack-checkout" : "/contact"}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold ${featured ? "bg-green-600 text-white hover:bg-green-500" : "bg-blue-700 text-white hover:bg-blue-800"}`}
      >
        {featured ? "Register with Paystack" : "Discuss This Package"}
      </Link>
    </article>
  );
}
