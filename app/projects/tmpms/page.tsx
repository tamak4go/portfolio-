import type { Metadata } from "next";
import { TmpmsView } from "./TmpmsView";

export const metadata: Metadata = {
  title: "TMPMS Case Study",
  description:
    "TMPMS: a production traditional-and-Western-medicine pharmacy platform with e-commerce, Đông Y diagnosis, appointment booking, real-time chat, and PayOS payments. Built solo on ASP.NET Core 8 and React, live at tmpms.io.vn.",
  alternates: { canonical: "/projects/tmpms" },
};

export default function TmpmsCaseStudy() {
  return <TmpmsView />;
}
