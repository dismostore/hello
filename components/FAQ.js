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
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gray-50">
              Frequently asked questions
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
            <Details title="What's included?" aria="faq-0">
              <ul role="list" className="ml-8 flex list-disc flex-col gap-1">
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
              <table className="mt-4 w-full divide-y divide-gray-200 pr-12 dark:divide-gray-700">
                <tbody>
                  {database.specs.map((data) => (
                    <Row key={data.id} title={data.spec} value={data.value} />
                  ))}
                </tbody>
              </table>
            </Details>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 px-8 pb-10 pt-8 dark:bg-gray-800">
            <div className="flex items-end justify-center -space-x-2">
              <span className="sr-only">Employee One</span>
              <Icons.EmployeeOne />
              <span className="sr-only">Employee Two</span>
              <Icons.EmployeeTwo />
              <span className="sr-only">Employee Three</span>
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
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
