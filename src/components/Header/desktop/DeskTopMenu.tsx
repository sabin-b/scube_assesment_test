import { Link } from "react-router-dom";
import { headerDesktopNavLinks } from "../../../data/data";
import Logo from "../Logo";
import DesktopNavLink from "./DesktopNavLink";

export default function DeskTopMenu() {
  return (
    <div className="hidden lg:block absolute  inset-0 w-full h-full">
      <div className="container max-w-7xl mx-auto px-6 xl:px-0">
        {/* first row */}
        <div className="pt-8 pb-7 h-auto">
          <div className="flex flex-row justify-between items-center">
            {/* logo*/}
            <Logo logoUrl="/images/header/logo.png" />
            {/* ct button */}
            <div className="">
              <Link className="btn-link" to={"#"}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="border-t-[0.5px] border-[#787878] shadow-inner">
        <div className="container max-w-7xl mx-auto px-6 xl:px-0">
          <nav>
            <ul className="relative flex flex-row gap-x-12">
              {headerDesktopNavLinks.map((link) => (
                <DesktopNavLink key={link.label} {...link} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
