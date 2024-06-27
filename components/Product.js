import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";

export default async function Product({ database }) {
  return (
    <section aria-labelledby="Product overview">
      <MaxWidthWrapper className="py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          <div className="w-full relative max-w-2xl mx-auto">
            <img
              className="aspect-6/4 rounded-2xl w-full object-cover object-center relative text-gray-900 dark:text-white"
              src="https://dismo.co.uk/ebay/600x400.png"
              alt={`${database.model} displayed on a light grey background`}
            />
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:-top-6 lg:-right-6 w-1/3 sm:w-1/4 h-auto">
              <span className="sr-only">
                Ecologi - 1 tree planted with every order
              </span>
              <Icons.Ecologi />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-1">
              {database.model}
            </h1>
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {database.colour} | {database.storage} | {database.network}
            </p>
            <div className="flex flex-col pb-6 gap-4">
              {database.summary.map((data) => (
                <p key={data.id} className="text-gray-600 dark:text-gray-300">
                  {data.value}
                </p>
              ))}
            </div>

            <span className="sr-only">Highlights</span>
            <Card className="max-w-xl flex flex-col sm:flex-row py-4 px-3 gap-2 justify-between">
              <div className="flex space-x-3 items-center">
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
              <div className="flex -space-x-2 items-center">
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
                <div className="relative z-60 inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 bg-gray-200 dark:bg-gray-700 text-sm font-medium text-gray-800 dark:text-gray-50 font-inter">
                  9+
                </div>
              </div>
            </Card>

            <ul
              role="list"
              className="flex flex-col sm:flex-row mt-6 gap-y-6 justify-center gap-24 max-w-xl"
            >
              <li className="flex items-center gap-x-3 ml-3 sm:ml-0 font-medium text-gray-600 dark:text-gray-300 w-fit">
                <Icons.Shield /> 12 month warranty
              </li>
              <li className="flex items-center gap-x-3 ml-3 sm:ml-0 font-medium text-gray-600 dark:text-gray-300 w-fit">
                <Icons.Return /> 30 day returns
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
