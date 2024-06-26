import { buttonVariants } from "@/components/ui/button";
import { linkVariants } from "@/components/ui/link";

export default function Home() {
  return (
    <div className="m-2">
      <a href="" className={linkVariants({ variant: "default" })}>
        Click here
      </a>
      <a href="" className={buttonVariants({ variant: "default" })}>
        Click here
      </a>
      <a className="bg-green-600 p-2 text-white" href="">
        helfadgjaij
      </a>
    </div>
  );
}
