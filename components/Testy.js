import Details from "./ui/details";
import { Icons } from "./ui/icons";
import Row from "./ui/row";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default async function Testy({ database }) {
  return (
    <section>
      <MaxWidthWrapper className="py-16 sm:py-24">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          <div className="mx-auto">
            <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-50 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="flex flex-col gap-6 bg-gray-50 dark:bg-gray-800 rounded-2xl px-8 pt-8 pb-10">
            <div className="flex -space-x-2 justify-center items-end">
              <span className="sr-only">Employee One</span>
              <Icons.EmployeeOne />
              <span className="sr-only">Employee Two</span>
              <Icons.EmployeeTwo />
              <span className="sr-only">Employee Three</span>
              <Icons.EmployeeThree />
            </div>
            <div className="mx-auto">
              <h2 className="text-lg font-bold text-center text-gray-800 dark:text-gray-50 mb-2">
                Still have questions?
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Can&apos;t find the answer you&apos;re looking for? Please chat
                to our friendly team.
              </p>
            </div>
            <div className="mx-auto">
              <a href="" className={buttonVariants({ variant: "default" })}>
                Get in touch
              </a>

              <a href="" className="bg-green-800 text-gray-50 p-2">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
