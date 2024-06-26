import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { linkVariants } from "./ui/link";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl w-full h-auto">
        <span className="sr-only">
          People planting trees and removing rubbish
        </span>
        <Icons.eBayFooter />
      </div>
      <div className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <MaxWidthWrapper className="pb-8 pt-16 sm:pt-16 lg:pt-20">
          <div className="space-y-6">
            <div className="flex pb-2 sm:justify-center">
              <a
                href=""
                className={`${linkVariants({ variant: "logo" })} sm:ml-0`}
              >
                <Icons.Logo
                  fillColor="fill-gray-50"
                  className="h-6 sm:h-7 w-auto sm:mx-auto"
                />
              </a>
              <a className="bg-green-600 p-2 text-white" href="">
                helfadgjaij
              </a>
              <a
                href=""
                className={`${buttonVariants({ variant: "default" })} sm:ml-0`}
              >
                hello
              </a>
            </div>
            <nav className="-mb-6 columns-2 sm:flex sm:justify-center mx-auto sm:space-x-8">
              <div className="mb-4">
                <a href="" className={linkVariants({ variant: "footer" })}>
                  About DISMO
                </a>
              </div>
              <div className="mb-4">
                <a href="" className={linkVariants({ variant: "footer" })}>
                  View feedback
                </a>
              </div>
              <div className="mb-4">
                <a href="" className={linkVariants({ variant: "footer" })}>
                  Visit store
                </a>
              </div>
              <div className="mb-4">
                <a href="" className={linkVariants({ variant: "footer" })}>
                  Contact us
                </a>
              </div>
            </nav>
            <div className="mt-16 border-t border-gray-600 pt-8 sm:mt-20 lg:mt-24">
              <p className="text-xs text-gray-400 font-inter sm:text-center sm:mx-auto">
                © 2024 Distro Mobiles Ltd T/A DISMO. All rights reserved.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
}
