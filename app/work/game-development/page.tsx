import type { Metadata } from "next";
import { WorkDetailPage } from "../work-detail";

export const metadata: Metadata = { title: "Game Development | RJSD" };
export const dynamic = "force-static";

export default function GameDevelopmentPage() {
  return <WorkDetailPage category="game-development" />;
}
