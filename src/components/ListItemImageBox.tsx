import { IListItemImageBoxProps } from "../../types/types";

export default function ListItemImageBox({
  imageUrl,
  imageAltText,
  title,
  description,
}: IListItemImageBoxProps) {
  return (
    <li className="bg-white rounded-imageBox shadow-listItem-imagebox border border-theme-border-gray  p-6 w-full">
      <div className="flex flex-row items-center gap-x-6 md:gap-x-8 xl:gap-x-12">
        {/* image */}
        <div className="max-w-[70px] max-h-[70px] w-full h-full">
          <img
            className="w-full h-full object-contain"
            src={imageUrl}
            alt={imageAltText}
          />
        </div>
        {/* text */}
        <div className="flex flex-col gap-y-2">
          <h5 className="text-primary-blue">{title}</h5>
          <p className="text-b2 text-black">{description}</p>
        </div>
      </div>
    </li>
  );
}
