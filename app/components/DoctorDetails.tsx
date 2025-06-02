"use client";
import React, { useState } from "react";
import Availability from "./Availability";
import { Doctor } from "@/types/type";

interface DoctorDetailsProps {
  doctor: Doctor;
}

export default function DoctorDetails({ doctor }: DoctorDetailsProps) {
  const [isActive, setIsActive] = useState("availability");
  return (
    <div className="">
      <div className="flex items-center justify-between uppercase tracking-widest ">
        <button
          onClick={() => setIsActive("details")}
          className={`cursor-pointer uppercase tracking-widest ${
            isActive === "details"
              ? "py-4 px-8 w-full bg-blue-600 text-white"
              : "border border-gray-200 bg-slate-100 w-full text-slate-800 py-4 px-8"
          }
          `}
        >
          Service Details
        </button>
        <button
          onClick={() => setIsActive("availability")}
          className={`cursor-pointer uppercase tracking-widest ${
            isActive === "availability"
              ? "bg-blue-600 text-white py-4 px-8 w-full"
              : "border border-gray-200 bg-slate-100 w-full text-slate-800 py-4 px-8"
          } `}
        >
          Availability
        </button>
      </div>
      {isActive === "details" ? (
        <div>Service Details Component</div>
      ) : (
        <div>
          {isActive === "availability" && (
            <Availability timeSlots={doctor.timeSlots} />
          )}
        </div>
      )}
    </div>
  );
}
