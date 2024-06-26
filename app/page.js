import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="m-2">
        <a href="" className={buttonVariants({ variant: "default" })}>
          Click here
        </a>
      </div>
    </main>
  );
}
