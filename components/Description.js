import Feature from "./ui/features";
import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default async function Description({ database }) {
  return (
    <section aria-labelledby="product description">
      <MaxWidthWrapper className="pb-16 sm:pb-24">
        <div className="mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-50">
              Product description
            </h2>
            <div className="flex flex-col gap-4">
              {database.description.map((data) => (
                <p key={data.id} className="text-gray-600 dark:text-gray-300">
                  {data.value}
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-16">
            <span className="sr-only">Features</span>
            <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
              <Feature
                icon={<Icons.FaceID />}
                title={database.faceid.title}
                description={database.faceid.value}
              />
              <Feature
                icon={<Icons.Camera />}
                title={database.cameras.title}
                description={database.cameras.value}
              />

              <div className="hidden gap-8 sm:flex sm:flex-col sm:gap-12 lg:hidden lg:gap-16">
                <Feature
                  icon={<Icons.Battery />}
                  title={database.battery.title}
                  description={database.battery.value}
                />
                <Feature
                  icon={<Icons.Chip />}
                  title={database.chip.title}
                  description={database.chip.value}
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 sm:order-last sm:hidden lg:mt-auto lg:flex lg:flex-col lg:gap-16">
              <Feature
                icon={<Icons.Battery />}
                title={database.battery.title}
                description={database.battery.value}
              />
              <Feature
                icon={<Icons.Chip />}
                title={database.chip.title}
                description={database.chip.value}
              />
            </div>

            <img
              className="aspect-6/4 w-full object-cover object-top text-gray-900 sm:aspect-4/6 dark:text-white"
              src="https://dismo.co.uk/ebay/400x600.png"
              alt={database.model}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
