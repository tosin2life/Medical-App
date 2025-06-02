import React from "react";
import {
  UseFormRegister,
  FieldErrors,
  Path,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";

interface TextInputProps<TFormValues extends FieldValues> {
  label: string;
  name: Path<TFormValues>;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors<TFormValues>;
  className?: string;
  validation?: RegisterOptions<TFormValues, Path<TFormValues>>;
}

export default function TextInput<TFormValues extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  register,
  errors,
  className,
  validation,
}: TextInputProps<TFormValues>) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, { required, ...validation })}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
            errors[name] ? "ring-red-500" : "ring-gray-300"
          } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
        {errors[name] && (
          <p className="mt-2 text-sm text-red-600">{`${label} is required`}</p>
        )}
      </div>
    </div>
  );
}
