import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Portal Development", href: "/services/portal-development" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Data Engineering", href: "/services/data-engineering" },
  {
    label: "Executive Dashboard Design",
    href: "/services/executive-dashboard-design",
  },
  {
    label: "Business & IT Automation",
    href: "/services/business-it-automation",
  },
  {
    label: "Computer Engineering",
    href: "/services/computer-engineering",
  },
  {
    label: "Network Engineering",
    href: "/services/network-engineering",
  },
  {
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  { label: "IT Consulting", href: "/services/it-consulting" },
];

const training = [
  { label: "Data Science & Analytics", href: "/training/data-science" },
  { label: "Programming", href: "/training/programming" },
  { label: "Database Management", href: "/training/database-management" },
  {
    label: "Networking & Cybersecurity",
    href: "/training/networking-cybersecurity",
  },
  {
    label: "Web & Digital Technology",
    href: "/training/web-digital-technology",
  },
  {
    label: "Business Technology",
    href: "/training/business-technology",
  },
  {
    label: "Corporate Training",
    href: "/training",
  },
];

const company = [
  { label: "About MICT", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
          {/* Company */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                <Image
                  src="/images/branding/mict-technology-solutions-logo.png"
                  alt="MICT Technology Solutions"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div className="text-base font-extrabold">
                  MICT Technology Solutions
                </div>

                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Technology • Innovation • Growth
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">
              MICT Technology Solutions provides professional IT services,
              digital solutions, data-driven systems, business automation and
              practical technology training that help organizations and
              individuals build, operate and benefit from modern technology.
            </p>

            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <p>26A Aba Road, Off Market Junction</p>
              <p>Port Harcourt, Rivers State, Nigeria</p>
            </div>

            <a
              href="https://wa.me/2348038721296?text=Hello%20MICT%2C%20I%20would%20like%20to%20discuss%20a%20technology%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-500"
            >
              WhatsApp MICT
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              IT Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Training & E-Learning
            </h3>

            <ul className="mt-5 space-y-3">
              {training.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-green-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-500">
            © {new Date().getFullYear()} MICT Technology Solutions. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-slate-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-slate-500 transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

