import type { Metadata } from "next";
import { TrackingPhuotView } from "./TrackingPhuotView";

export const metadata: Metadata = {
  title: "Tracking Phượt Case Study",
  description:
    "Tracking Phượt reconstructs trip routes from GPS data embedded in photo EXIF metadata — with a dashboard, Explore feed, Community page, and Pro tier. Built with Next.js and Supabase, live at trackingtours.vercel.app.",
  alternates: { canonical: "/projects/tracking-phuot" },
};

export default function TrackingPhuotCaseStudy() {
  return <TrackingPhuotView />;
}
