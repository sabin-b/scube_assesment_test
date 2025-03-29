import { BlogCardProps } from "../types/types";

export default function BlogCard({ imageUrl, category, title }: BlogCardProps) {
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8">
      {/* image */}
      <div className="max-h-[270px] h-full">
        <img
          src={imageUrl}
          alt={title.trim().toString()}
          className="w-full h-full object-cover object-center rounded-[20px]"
        />
      </div>
      {/* content */}
      <div className="flex flex-col gap-y-3">
        <p className="text-b3 text-secondary-medium-blue">{category}</p>
        <h5 className="pr-1.5 text-black">{title}</h5>
      </div>
    </div>
  );
}
