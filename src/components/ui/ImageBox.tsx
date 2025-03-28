interface IImageBoxProps {
  imageUrl: string;
  imageAltText: string;
  description: string;
}

function ImageBox({ imageUrl, imageAltText, description }: IImageBoxProps) {
  return (
    <div className="bg-white p-8 rounded-imageBox border border-[#E2E8F0] shadow">
      <div className="flex flex-col gap-y-4">
        {/* image wrapper */}
        <div className="w-full max-w-[200px] lg:max-w-[230px] h-auto">
          <img
            className="object-contain h-full w-full"
            src={imageUrl}
            alt={imageAltText}
          />
        </div>
        {/* text area */}
        <div>
          <p className="text-b2 text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default ImageBox;
