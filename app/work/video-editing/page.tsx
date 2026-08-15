import type { Metadata } from "next";
import { WorkDetailPage } from "../work-detail";

export const metadata: Metadata = { title: "Media | RJSD" };
export const dynamic = "force-static";

export default function VideoEditingPage() {
  return <WorkDetailPage category="media" />;
}
