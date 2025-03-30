import { useMemo } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import { Link } from "react-router-dom";
import { footerNavLinks } from "../data/data";
import { cn } from "../lib/utils";
import Logo from "./Header/Logo";
import NewsLetterForm from "./NewsLetterForm";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer>
      <div className="bg-theme-gray">
        <div className="relative px-6 xl:px-0 max-w-7xl mx-auto">
          {/* first row */}
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-[500px_1fr] pb-[60px] border-b border-theme-border-gray">
            <div className="flex flex-col gap-y-8">
              <Logo logoUrl="/images/footer/logo.png" />
              <p className="text-b2 text-black max-w-[330px]">
                We work with ambitious investors who want to define the future
                through impactful investments to achieve extraordinary outcomes
                in Emerging Markets.
              </p>
              <div className="flex flex-row gap-x-3">
                <SocialIcon Icon={FaLinkedinIn} href="#" />
                <SocialIcon Icon={FaFacebookF} href="#" />
              </div>
            </div>
            <div className="flex flex-col gap-y-[40px] md:gap-y-[60px] lg:gap-y-[40px] xl:gap-y-[80px]">
              <nav>
                <ul
                  className={cn(
                    "flex flex-col gap-y-4 md:flex-row md:flex-wrap md:gap-6 lg:gap-4 xl:justify-between"
                  )}
                >
                  {footerNavLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        className="text-b2 text-primary-blue hover:text-secondary-medium-blue"
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <NewsLetterForm />
            </div>
          </div>
          {/* second row */}
          <div className="pt-8 pb-6">
            <p className="font-lato text-xs leading-[100%] tracking-normal text-copyright flex flex-row gap-x-1 items-center justify-center">
              <span>
                <MdCopyright className="text-copyright/80 size-4" />
              </span>
              {currentYear.toString()} Impactable Investment Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
