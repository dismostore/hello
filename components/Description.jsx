import Feature from "./ui/features";
import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Description({ database }) {
  return (
    <section aria-labelledby="product description">
      <MaxWidthWrapper className="tgl cxc">
        <div className="xxm yez goz czp pie udt">
          <div>
            <h2 className="xhc cwl stj rui elp">
              Product description
            </h2>
            <div className="yez goz phl">
              {database.description.map((data) => (
                <p key={data.id} className="qse xdv">
                  {data.value}
                </p>
              ))}
            </div>
          </div>
          <div className="nms czp nir pie uzf udt">
            <span className="gff">Features</span>
            <div className="yez goz czp pie udt">
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

              <div className="rpc czp fdg lhw pie aqx udt">
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
            <div className="yez goz czp ure srx ptr cby hhm udt">
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
              className="awn iqm bhw ozp dqg vwm elp"
              src="https://dismo.co.uk/ebay/400x600.png"
              alt={database.model}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
