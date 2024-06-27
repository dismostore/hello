import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";

export default async function Product({ database }) {
  return (
    <section aria-labelledby="Product overview">
      <MaxWidthWrapper className="py-12 lg:py-16">
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:gap-16">
          <div className="relative mx-auto w-full max-w-2xl">
            <img
              className="relative aspect-6/4 w-full rounded-2xl object-cover object-center text-gray-900 dark:text-white"
              src="https://dismo.co.uk/ebay/600x400.png"
              alt={`${database.model} displayed on a light grey background`}
            />
            <div className="absolute right-2 top-2 h-auto w-1/3 sm:right-4 sm:top-4 sm:w-1/4 lg:-right-6 lg:-top-6">
              <span className="sr-only">
                Ecologi - 1 tree planted with every order
              </span>
              <Icons.Ecologi />
            </div>
          </div>
          <div className="w-full">
            <h1 className="mb-1 text-3xl font-bold text-gray-800 dark:text-gray-50">
              {database.model}
            </h1>
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              {database.colour} | {database.storage} | {database.network}
            </p>
            <div className="flex flex-col gap-4 pb-6">
              {database.summary.map((data) => (
                <p key={data.id} className="text-gray-600 dark:text-gray-300">
                  {data.value}
                </p>
              ))}
            </div>

            <span className="sr-only">Highlights</span>
            <Card className="flex max-w-xl flex-col justify-between gap-2 px-3 py-4 sm:flex-row">
              <div className="flex items-center space-x-3">
                <Icons.Van />
                <div>
                  <p className="font-medium text-gray-600 dark:text-gray-300">
                    Fast & Free shipping
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    1-3 working days
                  </p>
                </div>
              </div>
              <div className="flex items-center -space-x-2">
                <Icons.GB />
                <span className="sr-only">Great Britian</span>
                <Icons.IE />
                <span className="sr-only">Ireland</span>
                <Icons.DE />
                <span className="sr-only">Germany</span>
                <Icons.FR />
                <span className="sr-only">France</span>
                <Icons.US />
                <span className="sr-only">USA</span>
                <Icons.ZA />
                <span className="sr-only">South Africa</span>
                <div className="relative z-60 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 font-inter text-sm font-medium text-gray-800 ring-2 ring-white dark:bg-gray-700 dark:text-gray-50 dark:ring-gray-900">
                  9+
                </div>
              </div>
            </Card>

            <ul
              role="list"
              className="mt-6 flex max-w-xl flex-col justify-center gap-24 gap-y-6 sm:flex-row"
            >
              <li className="ml-3 flex w-fit items-center gap-x-3 font-medium text-gray-600 sm:ml-0 dark:text-gray-300">
                <Icons.Shield /> 12 month warranty
              </li>
              <li className="ml-3 flex w-fit items-center gap-x-3 font-medium text-gray-600 sm:ml-0 dark:text-gray-300">
                <Icons.Return /> 30 day returns
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
