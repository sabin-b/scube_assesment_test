import { useForm } from "react-hook-form";

export default function CTAForm() {
  const form = useForm();

  const { handleSubmit } = form;

  function handleFormData(params: type) {}
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormData)}>
        <div className="">
          <div className="text-white">
            <select
              className="border border-white min-w-[380px] px-8 py-4 focus:outline-0 rounded-[9px]"
              name=""
              id=""
            >
              <option value="service_1">service 1</option>
              <option value="service_2">service 2</option>
              <option value="service_3">service 3</option>
              <option value="service_4">service 4</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
