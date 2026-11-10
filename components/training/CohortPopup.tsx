"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MessageCircle,
  X,
} from "lucide-react";
import { cohortCampaign } from "@/lib/cohortCampaign";

const DISMISSAL_KEY = "mict-cohort-popup-dismissed";

function isCampaignActive() {
  const now = new Date();
  const opens = new Date(cohortCampaign.registrationOpen);
  const closes = new Date(cohortCampaign.registrationClose);

  return (
    cohortCampaign.active &&
    now >= opens &&
    now <= closes
  );
}

function getDaysRemaining() {
  const now = new Date();
  const closes = new Date(cohortCampaign.registrationClose);

  const difference = closes.getTime() - now.getTime();

  if (difference <= 0) {
    return 0;
  }

  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

export default function CohortPopup() {
  const [visible, setVisible] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    if (!isCampaignActive()) {
      return;
    }

    const dismissedAt = window.localStorage.getItem(DISMISSAL_KEY);

    if (dismissedAt) {
      const dismissedTime = Number(dismissedAt);
      const hoursSinceDismissal =
        (Date.now() - dismissedTime) / (1000 * 60 * 60);

      if (hoursSinceDismissal < cohortCampaign.dismissalHours) {
        return;
      }
    }

    setDaysRemaining(getDaysRemaining());

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  function handleClose() {
    window.localStorage.setItem(
      DISMISSAL_KEY,
      Date.now().toString()
    );

    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  const whatsappUrl = `https://wa.me/234${cohortCampaign.whatsappNumber.slice(
    1
  )}?text=${encodeURIComponent(cohortCampaign.whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-slate-950/70 p-3 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cohort-popup-title"
    >
      <div className="relative my-auto flex max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-400/20 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close cohort registration popup"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-slate-950"
        >
          <X size={20} />
        </button>

        <div className="relative min-h-0 overflow-y-auto p-5 pt-16 sm:p-8 sm:pt-16 md:p-10 md:pt-16">
          {/* Campaign badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-600" />
            New Cohort Registration
          </div>

          {/* Heading */}
          <h2
            id="cohort-popup-title"
            className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            {cohortCampaign.shortName}
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            {cohortCampaign.description}
          </p>

          {/* Details */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <CalendarDays size={20} />
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Classes Start
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                    {new Date(cohortCampaign.trainingStart).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <GraduationCap size={20} />
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Training Format
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  {cohortCampaign.format} · {cohortCampaign.duration}
                </p>
              </div>
            </div>
          </div>

          {/* Founding cohort fee */}
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                  Founding Cohort
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <p className="text-2xl font-bold text-slate-950">
                    {cohortCampaign.foundingFee}
                  </p>

                  <span className="text-sm text-slate-500">
                    registration fee
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
                <Clock3 size={17} />
                {daysRemaining}{" "}
                {daysRemaining === 1 ? "day" : "days"} left
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              "Practical instructor-led training",
              "Online learning environment",
              "Business-focused data skills",
              "AI-powered analytics workflows",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-green-600"
                />
                {item}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={cohortCampaign.registrationUrl}
              onNavigate={handleClose}
              className="group inline-flex flex-1 items-center justify-center rounded-full bg-green-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/20"
            >
              Register Now
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-green-200 bg-white px-6 py-3.5 text-sm font-bold text-green-700 transition hover:border-green-300 hover:bg-green-50"
            >
              <MessageCircle size={18} className="mr-2" />
              Ask on WhatsApp
            </a>
          </div>

          {/* Close/remind */}
          <button
            type="button"
            onClick={handleClose}
            className="mt-4 block w-full text-center text-sm font-medium text-slate-400 transition hover:text-slate-700"
          >
            Close for now
          </button>

          <p className="mt-3 text-center text-xs text-slate-400">
            Registration closes on{" "}
            {new Date(cohortCampaign.registrationClose).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
              year: "numeric",
          })}
          .
          </p>
        </div>
      </div>
    </div>
  );
}