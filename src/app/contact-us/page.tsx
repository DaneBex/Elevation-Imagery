"use client";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  company: z.string().optional(),
  email: z.string().email(),
  number: z.string(),
  message: z.string(),
});

type FormFields = z.infer<typeof schema>;

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const sendEmail: SubmitHandler<FormFields> = async (data) => {
    const { name, company, email, number, message } = data;
    await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({
        name,
        company,
        email,
        number,
        message,
      }),
    });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red to-red opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          We’re here to help! Reach out to us with any questions you have or for
          more information about our services. Our team is dedicated to
          providing you with the support and information you need to elevate
          your projects with our expert drone photography.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name{" "}
              <span className="text-ered" title="required">
                *
              </span>
            </label>
            <div className="mt-2.5">
              <input
                {...register("name")}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.name && (
                <div className="text-ered">{errors.name.message}</div>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                {...register("company")}
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.company && (
                <div className="text-ered">{errors.company.message}</div>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email{" "}
              <span className="text-ered" title="required">
                *
              </span>
            </label>
            <div className="mt-2.5">
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <div className="text-ered">{errors.email.message}</div>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number{" "}
              <span className="text-ered" title="required">
                *
              </span>
            </label>
            <div className="relative mt-2.5">
              <input
                {...register("number")}
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.number && (
                <div className="text-ered">{errors.number.message}</div>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message{" "}
              <span className="text-ered" title="required">
                *
              </span>
            </label>
            <div className="mt-2.5">
              <textarea
                {...register("message")}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              {errors.message && (
                <div className="text-ered">{errors.message.message}</div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            disabled={isSubmitting || isSubmitSuccessful}
            type="submit"
            className={`block w-full rounded-md ${isSubmitSuccessful ? "cursor-default border-2 border-blue text-dblue" : "bg-red text-white hover:bg-blue"} px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm transition duration-700 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            {isSubmitting
              ? "Submitting..."
              : isSubmitSuccessful
                ? "Message sent!"
                : "Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
}
