import type { Metadata } from "next";
import { WorkDetailPage } from "../work-detail";

export const metadata: Metadata = { title: "3D Modeling | RJSD" };
export const dynamic = "force-static";

export default function ModelingPage() {
  return <WorkDetailPage category="3d-modeling" />;
}
