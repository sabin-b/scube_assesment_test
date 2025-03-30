import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { MobileHeaderNavLinksProps } from "../../../types/types";

export default function MobileMenuLink({
  href,
  label,
  onClose,
  childLinks,
  onChildOpen,
}: MobileHeaderNavLinksProps) {
  if (childLinks && childLinks.length > 0) {
    return (
      <li key={label}>
        <button
          type="button"
          className={cn(
            "mobile_menu_navLink flex gap-x-2 items-center justify-between py-3"
          )}
          onClick={() => onChildOpen?.(label)}
        >
          {label}
          <span>
            <MdKeyboardArrowRight className="size-6 text-primary-blue" />
          </span>
        </button>
      </li>
    );
  }

  return (
    <li key={label}>
      <Link className="mobile_menu_navLink" to={href} onClick={onClose}>
        {label}
      </Link>
    </li>
  );
}
