import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { linkVariants } from "./ui/link";

export default function Footer() {
  return (
    <footer>
      <div className="xxm yad iqm pev">
        <Icons.eBayFooter />
      </div>
      <div className="xpb">
        <MaxWidthWrapper className="cgl wda mlq utv">
          <div className="ayv">
            <div className="yez uuo szs">
              <a
                href=""
                className={`${linkVariants({ variant: "logo" })} bsj`}
              >
                <Icons.Logo
                  fillColor="ojn blx"
                  className="qzu csu fgi uxt zxk"
                />
                <span className="gff">DISMO</span>
              </a>
            </div>
            <nav className="xxm rmr beh fdg szs cde">
              <div className="xhc">
                <a href="" className={linkVariants({ variant: "footer" })}>
                  About DISMO
                </a>
              </div>
              <div className="xhc">
                <a href="" className={linkVariants({ variant: "footer" })}>
                  View feedback
                </a>
              </div>
              <div className="xhc">
                <a href="" className={linkVariants({ variant: "footer" })}>
                  Visit store
                </a>
              </div>
              <div className="xhc">
                <a href="" className={linkVariants({ variant: "footer" })}>
                  Contact us
                </a>
              </div>
            </nav>
          </div>
          <div className="lsg uue tdj ney xzt mcj">
            <p className="okp ulr myu uxt zfm">
              © 2024 Distro Mobiles Ltd T/A DISMO. All rights reserved.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
}
