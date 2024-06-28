import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { linkVariants } from "./ui/link";

export default function NavBar() {
  return (
    <header className="top-0 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <MaxWidthWrapper>
        <nav className="relative flex h-16 items-center justify-between">
          <a href="" className={linkVariants({ variant: "logo" })}>
            <Icons.Logo
              fillColor="fill-gray-800 dark:fill-gray-50"
              className="h-6 w-auto overflow-visible"
            />
            <span className="sr-only">DISMO</span>
          </a>
          <div className="hidden h-14 justify-center space-x-6 lg:flex">
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
          <div className="flex items-center justify-end gap-4">
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
