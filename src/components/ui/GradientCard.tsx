import { cn } from "../../lib/utils";
import { GradientCardProps } from "../../types/types";

export default function GradientCard({
  headerImageUrl,
  headerImageAltText,
  bodyImageUrl,
  bodyImageAltText,
  className,
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "lg:min-w-[400px] xl:min-w-[435px] lg:max-w-[435px] z-0 h-full w-full min-h-full relative rounded-[20px] bg-primary-blue bg-[url(/images/fifth_section_card_bg.png)] bg-top bg-no-repeat bg-contain flex flex-col lg:justify-center xl:justify-start",
        className
      )}
    >
      <div className="z-10 p-10 flex flex-col gap-y-8 items-center">
        <div className="max-w-[270px] md:max-w-[300px] lg:max-w-[270px] w-full h-full">
          <img
            className="w-full h-full object-contain"
            src={headerImageUrl}
            alt={headerImageAltText}
          />
        </div>
        <div className="max-w-[325px] md:max-w-[400px] lg:max-w-[325px] lg:min-h-[347px] border-2 border-white w-full h-full overflow-clip">
          <img
            className="w-full !h-full lg:min-h-[347px] object-cover object-right-top"
            src={bodyImageUrl}
            alt={bodyImageAltText}
          />
        </div>
      </div>
    </div>
  );
}
