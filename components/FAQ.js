import Details from "./ui/details";
import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Row from "./ui/Row";
import { promises as fs } from "fs";
import { buttonVariants } from "./ui/button";

export default async function FAQ() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const data = JSON.parse(file);
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
          <div className="w-full space-y-6 divide-y divide-gray-200 dark:divide-gray-700 max-w-4xl mx-auto">
            <Details className="" title={data.faq.one.title} aria="faq-0">
              <ul role="list" className="list-disc flex flex-col ml-8 gap-1">
                <li className="text-gray-600 dark:text-gray-300">iPhone 12</li>
                <li className="text-gray-600 dark:text-gray-300">
                  USB-C lightning cable
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Box & manuals
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Warranty certificate
                </li>
              </ul>
            </Details>
            <Details className="pt-6" title={data.faq.two.title} aria="faq-1">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {data.faq.two.description.one}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {data.faq.two.description.two}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {data.faq.two.description.three}
                </p>
              </div>
            </Details>
            <Details className="pt-6" title={data.faq.three.title} aria="faq-2">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {data.faq.three.description.one}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {data.faq.three.description.two}
                </p>
              </div>
            </Details>
            <Details
              className="pt-6"
              title="Technical specifications"
              aria="faq-3"
            >
              <table className="mt-4 pr-12 w-full divide-y divide-gray-200 dark:divide-gray-700">
                <tbody>
                  <Row
                    title={data.faq.four.description.one.title}
                    description={data.faq.four.description.one.description}
                  />
                  <Row
                    title={data.faq.four.description.two.title}
                    description={data.faq.four.description.two.description}
                  />
                  <Row
                    title={data.faq.four.description.three.title}
                    description={data.faq.four.description.three.description}
                  />
                  <Row
                    title={data.faq.four.description.four.title}
                    description={data.faq.four.description.four.description}
                  />
                  <Row
                    title={data.faq.four.description.five.title}
                    description={data.faq.four.description.five.description}
                  />
                  <Row
                    title={data.faq.four.description.six.title}
                    description={data.faq.four.description.six.description}
                  />
                  <Row
                    title={data.faq.four.description.seven.title}
                    description={data.faq.four.description.seven.description}
                  />
                  <Row
                    title={data.faq.four.description.eight.title}
                    description={data.faq.four.description.eight.description}
                  />
                  <Row
                    title={data.faq.four.description.nine.title}
                    description={data.faq.four.description.nine.description}
                  />
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
              <a
                href=""
                className="bg-green-600 text-white p-2 rounded-md ml-4"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
