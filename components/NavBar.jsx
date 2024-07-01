import { Icons } from "./ui/icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { linkVariants } from "./ui/link";

export default function NavBar() {
  return (
    <header className="ywl vgj qbd cbx ugs giv dzg ujq">
      <MaxWidthWrapper className="">
        <div className="yez ens irx saf">
          <div className="yez tgq irx">
            <a href="" className={linkVariants({ variant: "logo" })}>
              <Icons.Logo
                fillColor="gtl blx"
                className="qzu csu fgi"
              />
              <span className="gff">DISMO</span>
            </a>
          </div>
          <div className="rpc zrp cby">
            <div className="ugb">
              <div className="yez ybk gkd">
                <div className="yez">
                  <div className="knq yez fms">
                    <a href="" className={linkVariants({ variant: "default" })}>
                      iPhone
                    </a>
                    <a href="" className={linkVariants({ variant: "default" })}>
                      Samsung
                    </a>
                    <a href="" className={linkVariants({ variant: "default" })}>
                      Huawei
                    </a>
                    <a href="" className={linkVariants({ variant: "default" })}>
                      Google
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="yez tgq irx ysv phl">
            <a href="" className={linkVariants({ variant: "icon" })}>
              <span className="gff">Contact support</span>
              <Icons.Support />
            </a>
            <a href="" className={`${linkVariants({ variant: "icon" })} upa`}>
              <span className="gff">Visit store</span>
              <Icons.ShoppingBag />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
