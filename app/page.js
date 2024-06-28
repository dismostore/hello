import FAQ from "@/components/FAQ";
import Product from "@/components/Product";
import Description from "@/components/Description";
import CTA from "@/components/CTA";
import { getDatabase } from "@/lib/fetch";

export default async function Home() {
  const database = await getDatabase();
  return (
    <>
      <FAQ />
    </>
  );
}
