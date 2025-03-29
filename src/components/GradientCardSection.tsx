import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GradientCardSectionProps } from "../types/types";
import GradientCard from "./ui/GradientCard";

export default function GradientCardSection({
  headerImageUrl,
  headerImageAltText,
  bodyImageUrl,
  bodyImageAltText,
  children,
  className,
  href = "#",
  linkText = "Learn More",
}: GradientCardSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-y-8  relative lg:grid-cols-[400px_1fr] xl:grid-cols-[435px_1fr] lg:gap-x-8 xl:gap-x-12">
      {/* gradient image box */}
      <GradientCard
        headerImageUrl={headerImageUrl}
        headerImageAltText={headerImageAltText}
        bodyImageUrl={bodyImageUrl}
        bodyImageAltText={bodyImageAltText}
        className={className}
      />
      {/* content area */}
      <div className="flex flex-col gap-y-6 xl:gap-y-8">
        {children}
        <div className="my-3 xl:my-6">
          <Link
            className="text-base flex flex-row items-center gap-x-3 font-inter leading-[28px] tracking-tight font-semibold text-secondary-light-blue hover:text-secondary-medium-blue transition-colors duration-100"
            to={href}
          >
            {linkText}
            <span className="transform -rotate-z-45">
              <FaArrowRightLong className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
