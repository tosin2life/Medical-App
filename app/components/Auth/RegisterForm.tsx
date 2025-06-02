"use client";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { createUser } from "@/actions/user";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: UserRole;
}

export default function RegisterForm({ role = "USER" }: { role?: UserRole }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    data.role = role;
    try {
      setIsLoading(true);
      const user = await createUser(data);
      console.log(user);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
      toast.success("Account created successfully!");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <TextInput
            label="Full Name"
            name="fullName"
            register={register}
            errors={errors}
            required
          />

          <TextInput
            label="Email address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            required
          />
          <TextInput
            label="Phone Number"
            name="phoneNumber"
            type="number"
            register={register}
            errors={errors}
            required
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            required
          />
          <div>
            <SubmitButton
              label="Sign Up"
              type="submit"
              isLoading={isLoading}
              loadingTitle="Creating account..."
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already have account {""}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
