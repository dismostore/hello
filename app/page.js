import FAQ from "@/components/FAQ";
import Product from "@/components/Product";
import Description from "@/components/Description";
import CTA from "@/components/CTA";
import { getDatabase } from "@/lib/fetch";
import Testy from "@/components/Testy";

export default async function Home() {
  return (
    <>
      <Testy />
    </>
  );
}
