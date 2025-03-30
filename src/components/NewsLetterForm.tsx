import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "../lib/utils";
import { NewsLetterFormSchema } from "../schema/newLetterForm";

export default function NewsLetterForm() {
  const form = useForm<z.infer<typeof NewsLetterFormSchema>>({
    resolver: zodResolver(NewsLetterFormSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  function handleFormSubmit(data: z.infer<typeof NewsLetterFormSchema>) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2  md:gap-6  xl:grid-cols-[1fr_1fr_270px] lg:gap-x-4">
          <div className="relative flex flex-col gap-y-1">
            <input
              {...register("firstName")}
              className={cn(
                "input border-theme-border-gray bg-white text-black focus:ring-secondary-medium-blue focus:border-secondary-medium-blue placeholder:text-[#787878]"
              )}
              placeholder="First name"
              type="text"
            />
            {errors?.firstName && (
              <div className="">
                <span className="text-b3 text-red-500">
                  {errors?.firstName?.message}
                </span>
              </div>
            )}
          </div>
          <div className="relative flex flex-col gap-y-1">
            <input
              {...register("email")}
              className={cn(
                "input border-theme-border-gray bg-white text-black focus:ring-secondary-medium-blue focus:border-secondary-medium-blue placeholder:text-[#787878]"
              )}
              placeholder="Email address"
              type="text"
            />
            {errors?.email && (
              <div className="">
                <span className="text-b3 text-red-500">
                  {errors?.email?.message}
                </span>
              </div>
            )}
          </div>
          <div className="relative md:col-span-2 xl:col-span-1">
            <button
              className={cn(
                "btn-link bg-secondary-light-blue text-white hover:bg-secondary-medium-blue  border-2 border-secondary-light-blue hover:border-secondary-medium-blue w-full cursor-pointer capitalize"
              )}
              type="submit"
            >
              Subscribe to our newsletter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
