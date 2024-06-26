import { linkVariants } from "@/components/ui/link";

export default function Home() {
  return (
    <main>
      <div className="m-2">
        <a href="" className={linkVariants({ variant: "default" })}>
          Click here
        </a>
        <a href="" className={linkVariants({ variant: "button" })}>
          Click here
        </a>
      </div>
    </main>
  );
}
