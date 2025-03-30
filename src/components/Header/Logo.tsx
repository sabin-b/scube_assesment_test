import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface LogoProps {
  href?: string;
  logoUrl: string;
  altText?: string;
}

export default function Logo({
  href = "/",
  altText = "logo",
  logoUrl,
}: LogoProps) {
  return (
    <div className={cn("max-w-[130px] w-full h-full md:max-w-[180px]")}>
      <Link to={href}>
        <img
          src={logoUrl}
          alt={altText}
          className="object-contain object-left w-full h-full"
        />
      </Link>
    </div>
  );
}
