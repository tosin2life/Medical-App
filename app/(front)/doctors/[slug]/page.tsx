import DoctorDetails from "@/app/components/DoctorDetails";
import FixedBookButton from "@/app/components/FixedBookButton";
import { doctorsData } from "@/data/doctors";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function DoctorPage({ params }: { params: { slug: string } }) {
  const doctor = doctorsData.find((doc) => doc.slug === params.slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="bg-white shadow-md rounded-md max-w-4xl mx-auto">
        <div className="py-6 px-8 border-b">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{doctor.name}</h1>
              <p className="text-sm text-gray-500 uppercase">
                {doctor.specialty}
              </p>
              <div className="mt-2">
                <p>Telehealth</p>
                <p>{doctor.rating}</p>
              </div>
            </div>
            <div className="relative h-24 w-24">
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 96px) 100vw, 96px"
              />
            </div>
          </div>
        </div>
        <DoctorDetails doctor={doctor} />
      </div>
      <FixedBookButton />
    </div>
  );
}
