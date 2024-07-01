import FAQ from "@/components/FAQ";
import Product from "@/components/Product";
import Description from "@/components/Description";
import CTA from "@/components/CTA";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <>
      <div className="ghx">
        <form className="ayv">
          <Input type="text" placeholder="Username" />
          <Button
            className="iqm dpn itr"
            type="submit"
          >
            <span className="okp cti mtg grs hmd">
              Subscribe
            </span>
          </Button>
        </form>
      </div>
    </>
  );
}
