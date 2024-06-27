import Details from "./ui/details";
import { Icons } from "./ui/icons";
import Row from "./ui/row";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default async function FAQ({ database }) {
  return (
    <section>
      <MaxWidthWrapper className="py-16 sm:py-24">
        <div className="flex flex-col sm:gap-12 lg:gap-16">
          <div className="mx-auto">
            <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-50 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="w-full space-y-6 divide-y divide-gray-200 dark:divide-gray-700 max-w-4xl mx-auto">
            <Details title="What's included?" aria="faq-0">
              <ul role="list" className="list-disc flex flex-col ml-8 gap-1">
                {database.included.map((data) => (
                  <li
                    key={data.id}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {data.value}
                  </li>
                ))}
              </ul>
            </Details>
            <Details
              className="pt-6"
              title="How long will shipping take?"
              aria="faq-1"
            >
              <div className="flex flex-col gap-4">
                {database.shipping.map((data) => (
                  <p key={data.id} className="text-gray-600 dark:text-gray-300">
                    {data.value}
                  </p>
                ))}
              </div>
            </Details>
            <Details
              className="pt-6"
              title="What's DISMO all about?"
              aria="faq-2"
            >
              <div className="flex flex-col gap-4">
                {database.about.map((data) => (
                  <p key={data.id} className="text-gray-600 dark:text-gray-300">
                    {data.value}
                  </p>
                ))}
              </div>
            </Details>
            <Details
              className="pt-6"
              title="Technical specifications"
              aria="faq-3"
            >
              <table className="mt-4 pr-12 w-full divide-y divide-gray-200 dark:divide-gray-700">
                <tbody>
                  {database.specs.map((data) => (
                    <Row key={data.id} title={data.spec} value={data.value} />
                  ))}
                </tbody>
              </table>
            </Details>
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
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
