import Details from "./ui/details";
import { Icons } from "./ui/icons";
import Row from "./ui/row";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default async function FAQ({ database }) {
  return (
    <section aria-labelledby="frequently asked questions">
      <MaxWidthWrapper className="py-16 sm:py-24">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="mx-auto">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gray-50">
              Frequently asked questions
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 px-8 pb-10 pt-8 dark:bg-gray-800">
            <div className="flex items-end justify-center -space-x-2">
              <Icons.EmployeeOne />
              <Icons.EmployeeTwo />
              <Icons.EmployeeThree />
            </div>
            <div className="mx-auto">
              <h2 className="mb-2 text-center text-lg font-bold text-gray-800 dark:text-gray-50">
                Still have questions?
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Can&apos;t find the answer you&apos;re looking for? Please chat
                to our friendly team.
              </p>
            </div>
            <div className="mx-auto">
              <a href="" className={buttonVariants({ variant: "default" })}>
                Get support
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
