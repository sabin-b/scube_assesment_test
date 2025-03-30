import { BiLoader } from "react-icons/bi";

export default function Loading() {
  return (
    <main className="min-h-svh flex items-center justify-center bg-primary-blue">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="max-w-[130px] w-full h-full md:max-w-[180px]">
          <img
            src="/images/header/logo.png"
            alt="logo"
            className="object-contain object-left w-full h-full"
          />
        </div>
        <BiLoader className="text-white size-7 md:size-10 animate-spin" />
      </div>
    </main>
  );
}
