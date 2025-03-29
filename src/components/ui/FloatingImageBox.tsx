import { IFloatingImageBoxProps } from "../../types/types";

export default function FloatingImageBox({
  imageUrl,
  imageAltText,
  description,
}: IFloatingImageBoxProps) {
  return (
    <li className="p-4 max-w-[180px] shadow-floating-imagebox bg-primary-blue rounded-[11.5px]">
      <div className="flex flex-row items-center gap-x-3">
        <span className="max-w-[48px] w-full max-w-h-[48px] h-full">
          <img
            className="w-full h-full object-contain"
            src={imageUrl}
            alt={imageAltText}
          />
        </span>
        <span className="leading-[150%] font-inter font-medium text-base tracking-normal text-white">
          {description}
        </span>
      </div>
    </li>
  );
}
