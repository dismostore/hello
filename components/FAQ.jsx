import Details from "./ui/details";
import { Icons } from "./ui/icons";
import Row from "./ui/row";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function FAQ({ database }) {
  return (
    <section aria-labelledby="frequently asked questions">
      <MaxWidthWrapper className="eya txs">
        <div className="yez goz zdq udt">
          <div className="xxm">
            <h2 className="xhc iwd cwl stj rui elp">
              Frequently asked questions
            </h2>
            <p className="iwd qse xdv">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="xxm iqm xwf xhe khd mdk xdz">
            <Details title="What's included?" aria="faq-0" className="">
              <ul role="list" className="tkl yez yvi goz dmn">
                {database.included.map((data) => (
                  <li
                    key={data.id}
                    className="qse xdv"
                  >
                    {data.value}
                  </li>
                ))}
              </ul>
            </Details>
            <Details
              className="dit"
              title="How long will shipping take?"
              aria="faq-1"
            >
              <div className="yez goz phl">
                {database.shipping.map((data) => (
                  <p key={data.id} className="qse xdv">
                    {data.value}
                  </p>
                ))}
              </div>
            </Details>
            <Details
              className="dit"
              title="What's DISMO all about?"
              aria="faq-2"
            >
              <div className="yez goz phl">
                {database.about.map((data) => (
                  <p key={data.id} className="qse xdv">
                    {data.value}
                  </p>
                ))}
              </div>
            </Details>
            <Details
              className="dit"
              title="Technical specifications"
              aria="faq-3"
            >
              <table className="uej iqm khd mdk nsd xdz">
                <tbody>
                  {database.specs.map((data) => (
                    <Row key={data.id} title={data.spec} value={data.value} />
                  ))}
                </tbody>
              </table>
            </Details>
          </div>
          <div className="yez goz qhl cpw hjy sfv pro ney zmj">
            <div className="yez oid gkd tei">
              <div className="huv czh">
                <div className="knq cyj iwm sfy hgm fto evy fqc lxj">
                  <Icons.EmployeeOne />
                </div>
              </div>
              <div className="fvi czh">
                <div className="knq zrp nnq sfy hgm fto evy fqc lxj">
                  <Icons.EmployeeTwo />
                </div>
              </div>
              <div className="huv czh">
                <div className="knq cyj iwm sfy hgm fto evy fqc lxj">
                  <Icons.EmployeeThree />
                </div>
              </div>
            </div>
            <div className="xxm">
              <h2 className="soa iwd dct stj rui elp">
                Still have questions?
              </h2>
              <p className="iwd qse xdv">
                Can&apos;t find the answer you&apos;re looking for? Please chat
                to our friendly team.
              </p>
            </div>
            <div className="xxm">
              <a
                href=""
                className={buttonVariants({
                  variant: "default",
                  className: "hov zjq",
                })}
              >
                <span className="okp cti mtg grs hmd">
                  Contact support
                </span>
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
