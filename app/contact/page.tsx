import ContactForm from "@/components/sections/ContactForm";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Contact MICT
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s discuss what you want to achieve.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Whether you need a digital platform, enterprise software,
              analytics solution, IT infrastructure, consulting or
              professional training, tell us what you are trying to accomplish
              and we will help define the right technology approach.
            </p>
          </div>
        </div>
      </section>

      {/* Contact area */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact information */}
            <div className="rounded-3xl bg-slate-950 p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
                Get in Touch
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Start a conversation with MICT.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                For project enquiries, consultations, training requests or
                general technology discussions, contact us through any of the
                channels below.
              </p>

              <div className="mt-8 space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/2348038721296?text=Hello%20MICT%2C%20I%20would%20like%20to%20discuss%20a%20technology%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-green-400/20 bg-green-500/10 p-5 transition-colors hover:bg-green-500/20"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-green-400">
                    WhatsApp
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    +234 803 8721 296
                  </p>

                  <p className="mt-1 inline-flex items-center text-sm text-slate-400">
                    Send us a WhatsApp message
                    <ArrowRight size={16} className="ml-2" />
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:+2348038721296"
                  className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Phone
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    +234 803 8721 296
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Call us to discuss your requirement
                  </p>
                </a>

                {/* Address */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Office
                  </p>

                  <p className="mt-2 text-base font-bold text-white">
                    MICT E-Learning Services Ltd
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    26A Aba Road, Off Market Junction,
                    <br />
                    Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Project Enquiry
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Tell us about your requirement.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Provide some initial information and we&apos;ll have a better
                  understanding of how we can assist.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-green-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-100">
            Prefer WhatsApp?
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start your conversation directly.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-50">
            Send MICT a message and tell us what you need help with.
          </p>

          <a
            href="https://wa.me/2348038721296?text=Hello%20MICT%2C%20I%20would%20like%20to%20discuss%20a%20technology%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            Chat on WhatsApp
            <ArrowRight size={17} className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
}