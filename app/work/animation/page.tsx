import type { Metadata } from "next";
import { WorkDetailPage } from "../work-detail";

export const metadata: Metadata = { title: "Animation | RJSD" };
export const dynamic = "force-static";

export default function AnimationPage() {
  return <WorkDetailPage category="animation" />;
}
