import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { z } from "zod";
import { cn } from "../lib/utils";
import { CtaFormSchema } from "../schema/ctaForm";
export default function CTAForm() {
  const form = useForm<z.infer<typeof CtaFormSchema>>({
    resolver: zodResolver(CtaFormSchema),
    defaultValues: {
      service: "",
      email: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  function handleFormData(data: z.infer<typeof CtaFormSchema>) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormData)}>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2  md:gap-6  lg:grid-cols-[380px_1fr_1fr] lg:gap-x-4">
          <div className="relative flex flex-col gap-y-1">
            <div
              className="
           relative"
            >
              <select
                className="appearance-none input"
                {...register("service")}
              >
                <option value="" disabled>
                  Select a service you are interested in
                </option>
                <option value="service_1">service 1</option>
                <option value="service_2">service 2</option>
                <option value="service_3">service 3</option>
                <option value="service_4">service 4</option>
              </select>
              <div className="bg-secondary-dark-blue absolute right-5 top-1/2 -translate-y-1/2">
                <IoIosArrowDown className="size-5 text-white" />
              </div>
            </div>
            {errors?.service && (
              <div className="">
                <span className="text-b3 text-red-500">
                  {errors?.service?.message}
                </span>
              </div>
            )}
          </div>
          <div className="relative flex flex-col gap-y-1">
            <input
              {...register("email")}
              className="input"
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
          <div className="relative md:col-span-2 lg:col-span-1">
            <button
              className={cn(
                "btn-link bg-white text-overlay-blue hover:bg-secondary-medium-blue hover:text-white border-2 border-white hover:border-secondary-medium-blue w-full cursor-pointer"
              )}
              type="submit"
            >
              Contact Us
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
