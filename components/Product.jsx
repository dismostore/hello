import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Card } from "./ui/card";

export default function Product({ database }) {
  return (
    <section aria-labelledby="product overview">
      <MaxWidthWrapper className="aer dcw">
        <div className="yez goz czp pie gux udt">
          <div className="knq xxm iqm het">
            <img
              className="knq awn iqm cpw bhw nnu dqg elp"
              src="https://dismo.co.uk/ebay/600x400.png"
              alt={`${database.model} displayed on a light grey background`}
            />
            <div className="avj rls xtg yad glt xwt fra udm nzk ndm">
              <span className="gff">
                Ecologi sticker - 1 tree planted with every order
              </span>
              <Icons.Ecologi />
            </div>
          </div>
          <div className="iqm">
            <h1 className="pxf dtl stj rui elp">
              {database.model}
            </h1>
            <h2 className="gff">Product information</h2>
            <p className="dli cti ccd dpm">
              {database.colour} | {database.storage} | {database.network}
            </p>
            <div className="yez goz phl jpv">
              {database.summary.map((data) => (
                <p key={data.id} className="qse xdv">
                  {data.value}
                </p>
              ))}
            </div>

            <span className="gff">Highlights</span>
            <Card className="yez neo goz saf woi lkq jyo dxg">
              <div className="yez irx sqt">
                <Icons.Van />
                <div>
                  <p className="mtg qse xdv">
                    Fast & Free shipping
                  </p>
                  <p className="cti ccd dpm">
                    1-3 working days
                  </p>
                </div>
              </div>
              <div className="yez irx tei">
                <span className="gff">
                  International shipping to Great Britian, Ireland, Germany,
                  France, USA, South Africa and many more!
                </span>
                <div className="huv">
                  <div className="knq yix hja hgm fto evy fqc lxj">
                    <Icons.GB />
                  </div>
                </div>
                <div className="huv">
                  <div className="knq yix hja hgm fto evy fqc lxj">
                    <Icons.IE />
                  </div>
                </div>
                <div className="fvi">
                  <div className="knq yix hja hgm fto evy fqc lxj">
                    <Icons.DE />
                  </div>
                </div>
                <div className="lpi">
                  <div className="knq yix hja hgm fto evy fqc lxj">
                    <Icons.FR />
                  </div>
                </div>
                <div className="uio">
                  <div className="knq yix hja hgm fto evy fqc lxj">
                    <Icons.US />
                  </div>
                </div>
                <div className="llw">
                  <div className="knq yix hja hgm fto evy fqc lxj">
                    <Icons.ZA />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="knq kcx nes yix hja irx gkd hgm vsa okp cti mtg rui fto evy fqc xyi elp lxj"
                >
                  9+
                </div>
              </div>
            </Card>

            <ul
              role="list"
              className="cgc yez neo goz gkd gpf wsw dxg"
            >
              <li className="vgh yez inl irx kjb mtg qse bsj xdv">
                <Icons.Shield /> 12 month warranty
              </li>
              <li className="vgh yez inl irx kjb mtg qse bsj xdv">
                <Icons.Return /> 30 day returns
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
