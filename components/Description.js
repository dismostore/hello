import Feature from "./ui/features";
import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { promises as fs } from "fs";

export default async function Description() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const data = JSON.parse(file);
  return (
    <section>
      <MaxWidthWrapper className="pb-16 sm:pb-24">
        <div className="mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-4">
              Product description
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 dark:text-gray-300">
                {data.description.one}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {data.description.two}
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
              <Feature
                icon={<Icons.FaceID />}
                title={data.feature.one.title}
                description={data.feature.one.description}
              />
              <Feature
                icon={<Icons.Camera />}
                title={data.feature.two.title}
                description={data.feature.two.description}
              />

              <div className="hidden sm:flex sm:flex-col lg:hidden gap-8 sm:gap-12 lg:gap-16">
                <Feature
                  icon={<Icons.Battery />}
                  title={data.feature.three.title}
                  description={data.feature.three.description}
                />
                <Feature
                  icon={<Icons.Chip />}
                  title={data.feature.four.title}
                  description={data.feature.four.description}
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 sm:order-last sm:hidden lg:flex lg:flex-col lg:gap-16 lg:mt-auto">
              <Feature
                icon={<Icons.Battery />}
                title={data.feature.three.title}
                description={data.feature.three.description}
              />
              <Feature
                icon={<Icons.Chip />}
                title={data.feature.four.title}
                description={data.feature.four.description}
              />
            </div>

            <img
              className="aspect-6/4 w-full object-cover object-top sm:aspect-4/6 text-gray-900 dark:text-white"
              src="https://dismo.co.uk/ebay/400x600.png"
              alt="iPhone 12"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
