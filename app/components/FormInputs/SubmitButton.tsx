import { Loader } from "lucide-react";
import React from "react";

interface SubmitButtonProps {
  label: string;
  loadingTitle?: string;
  type?: "submit" | "button";
  isLoading?: boolean;
}

export default function SubmitButton({
  label,
  type,
  loadingTitle,
  isLoading = false,
}: SubmitButtonProps) {
  return (
    <>
      {isLoading ? (
        <button
          type={type}
          disabled={isLoading}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center disabled:cursor-not-allowed disabled:bg-indigo-400 disabled:opacity-50"
        >
          <Loader className="mr-2 h-4 w-4 animate-spin " />
          {loadingTitle || "Loading..."}
        </button>
      ) : (
        <button
          type={type}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {label}
        </button>
      )}
    </>
  );
}
