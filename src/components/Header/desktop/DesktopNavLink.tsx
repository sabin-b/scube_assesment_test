import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { DesktopHeaderNavLinksProps } from "../../../types/types";
import DropDownMenu from "./DropDownMenu";

export default function DesktopNavLink({
  href,
  label,
  childLinks,
}: DesktopHeaderNavLinksProps) {
  const { pathname } = useLocation();

  const currentPathName = useMemo(() => pathname === href, [pathname, href]);

  if (childLinks && childLinks.length > 0) {
    return (
      <li>
        <DropDownMenu btnLabel={label} links={childLinks} />
      </li>
    );
  }
  return (
    <li>
      <Link
        className={cn("desktop_menu_navlink", {
          "before:scale-x-100 text-secondary-light-blue": currentPathName,
        })}
        to={href}
      >
        {label}
      </Link>
    </li>
  );
}

//
