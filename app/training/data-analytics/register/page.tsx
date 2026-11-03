import type { Metadata } from "next";
import RegistrationForm from "./RegistrationForm";

export const metadata: Metadata = {
  title: "Bootcamp Registration | MICT Academy",
  description:
    "Register for MICT Academy's AI-Powered Data Analytics and Business Intelligence Bootcamp. Complete your application and pay securely online.",
};

export default function DataAnalyticsRegistrationPage() {
  return <RegistrationForm />;
}
