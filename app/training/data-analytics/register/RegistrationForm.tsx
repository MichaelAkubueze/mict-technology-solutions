"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import { cohortCampaign } from "@/lib/cohortCampaign";
import { trainingPackages, type TrainingPackageId } from "@/lib/marketing/packages";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  occupation: string;
  skillLevel: string;
  motivation: string;
  contactMethod: string;
  agreeToTerms: boolean;
};

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  occupation: "",
  skillLevel: "",
  motivation: "",
  contactMethod: "WhatsApp",
  agreeToTerms: false,
};

type PaymentGateway = "paystack" | "flutterwave";

export default function DataAnalyticsRegistrationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [paymentGateway, setPaymentGateway] =
    useState<PaymentGateway>("flutterwave");
  const [selectedPackageId, setSelectedPackageId] = useState<TrainingPackageId>("professional");
  const selectedPackage = trainingPackages[selectedPackageId];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(
    field: keyof FormData,
    value: string | boolean
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.agreeToTerms) {
      setErrorMessage(
        "Please confirm that you agree to the training terms before continuing."
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(`/api/${paymentGateway}/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packageId: selectedPackageId,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          occupation: formData.occupation,
          skillLevel: formData.skillLevel,
          motivation: formData.motivation,
          contactMethod: formData.contactMethod,
          consentRegistration: formData.agreeToTerms,
          consentMarketing: false,
          segment: formData.occupation,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.authorizationUrl) {
        throw new Error(
          result.error || "Unable to start payment. Please try again."
        );
      }

      window.location.assign(result.authorizationUrl);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setIsSubmitting(false);
    }
  }

  const whatsappUrl = `https://wa.me/234${cohortCampaign.whatsappNumber.slice(
    1
  )}?text=${encodeURIComponent(
    cohortCampaign.whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/training/data-analytics"
            className="inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={17} className="mr-2" />
            Back to Data Analytics Training
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Bootcamp Registration
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Register for the{" "}
              <span className="text-green-400">
                AI-Powered Data Analytics &amp; Business Intelligence Bootcamp
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Complete the registration form below to reserve your place in
              the first MICT Technology Solutions cohort.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                Registration Form
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Tell us about yourself
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Please provide accurate information so we can communicate
                with you about the cohort.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-8"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Personal Information
                </h3>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name *
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(event) =>
                          updateField(
                            "fullName",
                            event.target.value
                          )
                        }
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address *
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(event) =>
                          updateField(
                            "email",
                            event.target.value
                          )
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      WhatsApp / Phone Number *
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target.value
                          )
                        }
                        placeholder="0803 123 4567"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Location *
                    </label>

                    <div className="relative">
                      <MapPin
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(event) =>
                          updateField(
                            "location",
                            event.target.value
                          )
                        }
                        placeholder="City / State / Country"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="occupation"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Occupation / Status *
                    </label>

                    <input
                      id="occupation"
                      name="occupation"
                      type="text"
                      required
                      value={formData.occupation}
                      onChange={(event) =>
                        updateField(
                          "occupation",
                          event.target.value
                        )
                      }
                      placeholder="e.g. Student, Accountant, IT Professional"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900">
                  Learning Background
                </h3>

                <div className="mt-5 space-y-5">
                  <div>
                    <label
                      htmlFor="skillLevel"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Current Data / IT Skill Level *
                    </label>

                    <select
                      id="skillLevel"
                      name="skillLevel"
                      required
                      value={formData.skillLevel}
                      onChange={(event) =>
                        updateField(
                          "skillLevel",
                          event.target.value
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    >
                      <option value="">
                        Select your current level
                      </option>
                      <option value="Beginner">
                        Beginner
                      </option>
                      <option value="Basic">
                        Basic knowledge
                      </option>
                      <option value="Intermediate">
                        Intermediate
                      </option>
                      <option value="Advanced">
                        Advanced
                      </option>
                      <option value="Professional">
                        Professional
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="motivation"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Why do you want to learn Data Analytics? *
                    </label>

                    <textarea
                      id="motivation"
                      name="motivation"
                      required
                      rows={5}
                      value={formData.motivation}
                      onChange={(event) =>
                        updateField(
                          "motivation",
                          event.target.value
                        )
                      }
                      placeholder="Tell us what you hope to achieve from this training..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactMethod"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Preferred Contact Method *
                    </label>

                    <select
                      id="contactMethod"
                      name="contactMethod"
                      required
                      value={formData.contactMethod}
                      onChange={(event) =>
                        updateField(
                          "contactMethod",
                          event.target.value
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    >
                      <option value="WhatsApp">
                        WhatsApp
                      </option>
                      <option value="Email">
                        Email
                      </option>
                      <option value="Phone">
                        Phone Call
                      </option>
                    </select>
                  </div>
                </div>
              </div>


              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900">
                  Choose Your Training Package
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Choose your level of support. All options are for the same eight-week bootcamp.
                </p>
                <div className="mt-5 grid gap-4">
                  {Object.values(trainingPackages).map((pkg) => {
                    const isSelected = selectedPackageId === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`relative w-full rounded-2xl border p-5 text-left transition ${isSelected ? "border-green-500 bg-green-50 shadow-md ring-2 ring-green-500/30" : pkg.recommended ? "border-amber-300 bg-amber-50/50" : "border-slate-200 bg-white"}`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="font-bold text-slate-900">{pkg.name}</span>
                          <span className="text-xl font-extrabold text-slate-950">{pkg.priceLabel}</span>
                        </div>
                        {pkg.recommended && (
                          <span className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                            Recommended
                          </span>
                        )}
                        <p className="mt-2 text-sm text-slate-600">{pkg.description}</p>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-green-600" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900">
                  Choose Payment Method
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  You are registering for the {selectedPackage.name} package at{" "}
                  <strong>{selectedPackage.priceLabel}</strong>. You will be
                  redirected to the selected provider's secure checkout.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                      paymentGateway === "paystack"
                        ? "border-green-500 bg-green-50 ring-2 ring-green-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentGateway"
                      value="paystack"
                      checked={paymentGateway === "paystack"}
                      onChange={() => setPaymentGateway("paystack")}
                      className="mt-1 h-4 w-4 accent-green-600"
                    />
                    <span>
                      <span className="block font-bold text-slate-900">
                        Paystack
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        Pay securely by card, bank transfer and supported
                        local payment methods.
                      </span>
                    </span>
                  </label>

                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                      paymentGateway === "flutterwave"
                        ? "border-green-500 bg-green-50 ring-2 ring-green-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentGateway"
                      value="flutterwave"
                      checked={paymentGateway === "flutterwave"}
                      onChange={() => setPaymentGateway("flutterwave")}
                      className="mt-1 h-4 w-4 accent-green-600"
                    />
                    <span>
                      <span className="block font-bold text-slate-900">
                        Flutterwave
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        Secure checkout with supported local and
                        international payment methods.
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={(event) =>
                      updateField(
                        "agreeToTerms",
                        event.target.checked
                      )
                    }
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-green-600 focus:ring-green-500"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    I confirm that the information provided is accurate
                    and I agree to be contacted by MICT Technology
                    Solutions regarding this training programme and
                    related registration information. *
                  </span>
                </label>
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center rounded-full bg-green-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Connecting to secure checkout..."
                  : `Continue to ${paymentGateway === "paystack" ? "Paystack" : "Flutterwave"}`}
                {!isSubmitting && (
                  <ArrowRight
                    size={19}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Your information will be used for cohort registration
                and communication purposes.
              </p>
            </form>
          </div>

          <aside className="h-fit lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
                    <GraduationCap size={25} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-400">
                      {selectedPackage.name} Package
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      Registration Open
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Programme
                  </p>

                  <p className="mt-1 font-bold leading-6 text-slate-900">
                    {cohortCampaign.shortName}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">
                      Duration
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      {cohortCampaign.duration}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">
                      Format
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      {cohortCampaign.format}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-green-700">
                    Selected Package Fee
                  </p>

                  <p className="mt-1 text-3xl font-bold text-slate-950">
                    {selectedPackage.priceLabel}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {selectedPackage.description}
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-green-600"
                    />
                    Practical instructor-led training
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-green-600"
                    />
                    Business-focused analytics
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-green-600"
                    />
                    AI-powered data workflows
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-green-600"
                    />
                    Online learning
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Classes Start
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    16 November 2026
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Registration closes 30 November 2026.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-green-200 bg-white px-5 py-3.5 text-sm font-bold text-green-700 transition hover:bg-green-50"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Questions? Ask on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
