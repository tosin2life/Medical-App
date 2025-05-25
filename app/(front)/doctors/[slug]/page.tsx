import DoctorDetails from "@/app/components/DoctorDetails";
import FixedBookButton from "@/app/components/FixedBookButton";
import Image from "next/image";
import React from "react";

export default function Doctors() {
  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="bg-white shadow-md rounded-md max-w-4xl mx-auto ">
        <div className="py-6 px-8 border-b">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Joseph Isibor, APRN</h1>
              <p className="text-sm text-gray-500 uppercase">Family medicine</p>
              <div className="mt-2">
                <p>Telehealth</p>
                <p>4.9</p>
              </div>
            </div>
            <div className="relative h-24 w-24">
              <Image
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 96px) 100vw, 96px"
              />
            </div>
          </div>
        </div>
        <DoctorDetails />
      </div>
      <FixedBookButton />
    </div>
  );
}
