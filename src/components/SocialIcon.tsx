import { Link } from "react-router-dom";
import { SocialIconProps } from "../types/types";

export default function SocialIcon({ Icon, href }: SocialIconProps) {
  return (
    <div className="max-w-[30px] min-h-[30px] min-w-[30px] border group hover:border-secondary-medium-blue transition-colors duration-150 border-[#D4D4D8] rounded-full max-h-[30px] h-full w-full flex items-center justify-center">
      <Link to={href}>
        <Icon className="size-3.5 text-overlay-blue group-hover:text-secondary-medium-blue transition-colors duration-150" />
      </Link>
    </div>
  );
}
