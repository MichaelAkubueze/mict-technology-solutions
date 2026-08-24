import Link from "next/link";

export default function TermsPage() {
  return (
    <main>
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Terms governing the use of the MICT Technology Solutions website.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                1. Website Use
              </h2>

              <p className="mt-4 leading-7">
                This website provides information about MICT E-Learning
                Services Ltd, its technology services, solutions, training
                programs and related offerings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                2. Information on This Website
              </h2>

              <p className="mt-4 leading-7">
                We aim to keep website information accurate and useful.
                However, service descriptions, training programs and other
                information may change as our offerings develop.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                3. Intellectual Property
              </h2>

              <p className="mt-4 leading-7">
                Website content, branding, graphics, text and other materials
                belonging to MICT may not be reproduced or distributed without
                appropriate authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                4. Third-Party Links
              </h2>

              <p className="mt-4 leading-7">
                The website may contain links to third-party services or
                websites. MICT is not responsible for the content, availability
                or policies of external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                5. Enquiries and Services
              </h2>

              <p className="mt-4 leading-7">
                Submitting an enquiry through this website does not by itself
                create a contractual relationship between you and MICT.
                Specific services and engagements are subject to separate
                agreements where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                6. Contact
              </h2>

              <p className="mt-4 leading-7">
                For questions regarding these Terms of Use, please contact
                MICT through our contact page.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white hover:bg-green-700"
              >
                Contact MICT
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}