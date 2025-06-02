import LoginForm from "@/app/components/Auth/LoginForm";
import React from "react";

export default function page() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <div
          className="hidden md:flex bg-cover bg-center rounded-l-lg"          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div className="">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
