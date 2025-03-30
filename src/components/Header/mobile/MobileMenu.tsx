import React, { useCallback, useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { headerMobileNavLinks } from "../../../data/data";
import { cn } from "../../../lib/utils";
import Logo from "../Logo";
import MobileMenuLink from "./MobileMenuLink";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedParent, setSelectedParent] = useState<string | null>(null);

  //? open Mainmenu
  const handleOpenMobileMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    setSelectedParent(null);
  }, []);

  //? handleClose
  const handleCloseMobileMenu = useCallback(() => {
    setIsOpen(false);
    setSelectedParent(null);
  }, []);

  //? open child menu
  const handleOpenChildMenu = useCallback((parentLabel: string) => {
    setSelectedParent(parentLabel);
  }, []);

  //? back to main menu
  const handleBackToMain = useCallback(() => {
    setSelectedParent(null);
  }, []);

  //? prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden"); // Cleanup when unmounting
  }, [isOpen]);

  return (
    <div className="block lg:hidden fixed inset-0 w-full h-full">
      <div className="relative">
        {/* logo and menu trigger btn */}
        <div className="bg-primary-blue py-3 px-6 shadow-mobile-menu">
          <div className="flex justify-between items-center">
            <Logo logoUrl="/images/header/logo.png" />
            <div className="">
              <button onClick={handleOpenMobileMenu} type="button">
                {!isOpen ? (
                  <HiMenuAlt3 className="size-6 md:size-8 text-white" />
                ) : (
                  <IoMdClose className="size-6 md:size-8 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* main menu */}
        {isOpen && (
          <div className="min-h-svh bg-white">
            <div className="flex flex-col gap-y-8 pb-6">
              <nav>
                <ul className="divide-y-2 divide-theme-border-gray">
                  {!selectedParent ? (
                    <React.Fragment>
                      {headerMobileNavLinks.map((link) => (
                        <MobileMenuLink
                          key={link.label}
                          label={link.label}
                          href={link.href}
                          childLinks={link?.childLinks}
                          onClose={handleCloseMobileMenu}
                          onChildOpen={handleOpenChildMenu}
                        />
                      ))}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button
                        type="button"
                        onClick={handleBackToMain}
                        className={cn(
                          "btn-link w-full rounded-none flex gap-x-2 items-center justify-start bg-mobile-back-btn hover:bg-secondary-medium-blue font-normal text-sm leading-[100%]"
                        )}
                      >
                        <span>
                          <MdKeyboardArrowLeft className="size-5.5 text-white" />
                        </span>
                        Back
                      </button>
                      <MobileMenuLink label={selectedParent} href="#" />
                      {headerMobileNavLinks
                        .find((link) => link.label === selectedParent)
                        ?.childLinks?.map((childLink) => (
                          <MobileMenuLink
                            key={childLink.label}
                            onClose={handleCloseMobileMenu}
                            {...childLink}
                          />
                        ))}
                    </React.Fragment>
                  )}
                </ul>
              </nav>
              <div className="px-8 md:px-0 md:mx-auto w-full md:max-w-[400px] text-center md:min-w-[400px]">
                <Link className="btn-link w-full inline-block" to={"#"}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
