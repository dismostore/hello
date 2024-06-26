import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { linkVariants } from "./ui/link";

export default function NavBar() {
  return (
    <header className="bg-white dark:bg-gray-900 top-0 border-b border-gray-200 dark:border-gray-700">
      <MaxWidthWrapper>
        <nav
          className="flex relative h-16 items-center justify-between"
          aria-label="Global"
        >
          <a href="" className={linkVariants({ variant: "logo" })}>
            <Icons.Logo
              fillColor="fill-gray-800 dark:fill-gray-50"
              className="h-6 w-auto"
            />
          </a>
          <div className="hidden h-14 lg:flex justify-center space-x-6">
            <a href="" className={linkVariants({ variant: "default" })}>
              iPhone
            </a>
            <a href="" className={linkVariants({ variant: "default" })}>
              Samsung
            </a>
            <a href="" className={linkVariants({ variant: "default" })}>
              Huawei
            </a>
            <a href="" className={linkVariants({ variant: "default" })}>
              Google
            </a>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <a href="" className={linkVariants({ variant: "icon" })}>
              <span className="sr-only">Contact support</span>
              <Icons.Support />
            </a>
            <a href="" className={`${linkVariants({ variant: "icon" })} -m-2`}>
              <span className="sr-only">Visit store</span>
              <Icons.ShoppingBag />
            </a>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
