"use client";

import { useActionState } from "react";
import { submitEnquiry } from "@/app/contact/actions/submitEnquiry";

const enquiryTypes = [
  "IT Services",
  "Software / Platform Development",
  "Data & Analytics",
  "IT Consulting",
  "Training & E-Learning",
  "Corporate Training",
  "Other Technology Requirement",
];

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialState,
  );

  return (
    <form action={formAction} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-bold text-slate-700"
          >
            Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="text-sm font-bold text-slate-700"
          >
            Organization
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company or organization"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-bold text-slate-700"
          >
            Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="text-sm font-bold text-slate-700"
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234..."
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="enquiry"
          className="text-sm font-bold text-slate-700"
        >
          What can we help you with? *
        </label>

        <select
          id="enquiry"
          name="enquiry"
          defaultValue=""
          required
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="" disabled>
            Select an enquiry type
          </option>

          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-bold text-slate-700"
        >
          Tell us about your requirement *
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Briefly describe your project, business challenge or training requirement..."
          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {state.message && (
        <div
          role="alert"
          className={`rounded-xl px-4 py-3 text-sm ${
            state.success
              ? "border border-green-200 bg-green-50 text-green-800"
              : "border border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending Enquiry..." : "Submit Enquiry"}
      </button>

      <p className="text-center text-xs leading-5 text-slate-400">
        You can also contact us directly through WhatsApp for a faster
        response.
      </p>
    </form>
  );
}