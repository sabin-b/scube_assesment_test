import React, { useCallback, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

interface DropDownMenuProps {
  btnLabel: string;
  links: {
    href: string;
    label: string;
  }[];
}

export default function DropDownMenu({ btnLabel, links }: DropDownMenuProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  //? dropdown close on outside click
  useEffect(() => {
    function handlerFunc(event: MouseEvent | TouchEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlerFunc);
    document.addEventListener("touchstart", handlerFunc);
    return () => {
      document.removeEventListener("mousedown", handlerFunc);
      document.removeEventListener("touchstart", handlerFunc);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={handleToggle}
        type="button"
        className={cn(
          "desktop_menu_navlink",
          "inline-flex items-center cursor-pointer",
          {
            "before:scale-x-100 text-secondary-light-blue": open,
          }
        )}
      >
        {btnLabel}
        <span className="ml-2">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-12">
          <ul className="w-56 h-auto shadow-listItem-imagebox rounded-button p-1.5 border border-theme-border-gray bg-white">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  onClick={handleToggle}
                  className="desktop_menu_childLink"
                  to={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
