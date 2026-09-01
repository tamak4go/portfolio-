import type { Metadata } from "next";
import { PORTFOLIO } from "@/lib/data";
import { EventsView } from "./EventsView";

export const metadata: Metadata = {
  title: "Events & Certifications",
  description: `Certificates, achievements, and key moments in ${PORTFOLIO.name}'s developer journey.`,
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return <EventsView />;
}
