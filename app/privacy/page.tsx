import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            How MICT E-Learning Services Ltd collects, uses and protects
            information provided through our website.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                1. Information We Collect
              </h2>

              <p className="mt-4 leading-7">
                When you contact MICT through this website, we may collect
                information such as your name, organization, email address,
                telephone number and the details of your enquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                2. How We Use Information
              </h2>

              <p className="mt-4 leading-7">
                Information submitted through our website may be used to
                respond to enquiries, provide requested services, communicate
                with customers and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                3. Information Protection
              </h2>

              <p className="mt-4 leading-7">
                MICT takes reasonable measures to protect information
                submitted through our website from unauthorized access,
                alteration or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                4. Third-Party Services
              </h2>

              <p className="mt-4 leading-7">
                Certain website functions may rely on third-party technology
                providers to deliver services such as email communication,
                hosting and website infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                5. Contact
              </h2>

              <p className="mt-4 leading-7">
                If you have questions about this Privacy Policy or how your
                information is handled, please contact MICT through our
                contact page.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white hover:bg-blue-800"
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