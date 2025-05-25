import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import { Video } from "lucide-react";
import { Doctor } from "@/types/type";
import Link from "next/link";

interface DoctorsCardProps {
  doctor: Doctor;
  onSelectTimeSlot: (time: string) => void;
  className?: string;
}

export default function DoctorsCard({
  doctor,
  onSelectTimeSlot,
  className,
}: DoctorsCardProps) {
  return (
    <Link href="/doctors/[slug]" as={`/doctors/${doctor.slug}`}>
      <div
        className={`bg-white rounded-xl p-6 flex flex-col justify-between ${className}`}
      >
        <div className="space-y-4">
          {/* Profile Header */}
          <div className="flex gap-4 items-start">
            <div className="relative w-16 h-16">
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                fill
                className="object-cover rounded-full"
              />
              {doctor.videoAvailable && (
                <div className="absolute -bottom-1 -right-1 bg-purple-100 p-1 rounded-full">
                  <Video className="w-4 h-4 text-purple-600" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{doctor.name}</h3>
              <div className="flex items-center gap-2">
                <Rating rating={doctor.rating} />
                <span className="text-sm text-gray-600">
                  {doctor.rating} ({doctor.reviewCount})
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-600">
                  {doctor.specialty}
                </span>
              </div>
            </div>
          </div>
          {/* Available Badge */}
          {doctor.availableToday && (
            <span className="inline-flex px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full w-fit">
              Available today
            </span>
          )}{" "}
          {/* Testimonial */}
          {doctor.testimonial && (
            <blockquote className="text-sm text-gray-600 italic">
              &ldquo;{doctor.testimonial}&rdquo;
            </blockquote>
          )}
        </div>
        {/* Time Slots - Fixed at bottom */}
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">{doctor.nextAvailable}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-gray-500 line-through">
                ${doctor.regularPrice}
              </span>
              <span className="text-xl font-semibold text-purple-600">
                ${doctor.discountedPrice}
              </span>
              <span className="text-sm text-purple-600">
                with {doctor.discountProgram}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 auto-rows-[36px] gap-2">
            {doctor.timeSlots.slice(0, 5).map((time, index) => (
              <button
                key={index}
                onClick={() => onSelectTimeSlot(time)}
                className="flex items-center justify-center min-w-[90px] bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm transition-colors"
              >
                {time}
              </button>
            ))}
            {doctor.timeSlots.length > 5 && (
              <button className="flex items-center justify-center min-w-[90px] bg-purple-100 text-purple-600 hover:bg-purple-200 rounded-full text-sm transition-colors">
                More times
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
