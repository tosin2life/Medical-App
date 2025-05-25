"use client";
import React, { useState, useCallback } from "react";
import SectionHeading from "./SectionHeading";
import { ToggleButton } from "./ToggleButton";
import Link from "next/link";
import DoctorsCard from "../(front)/DoctorsCard/DoctorsCard";
import { doctorsData } from "@/data/doctors";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DoctorsList() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const handleSelectTimeSlot = (time: string) => {
    console.log(`Selected time slot: ${time}`);
  };

  return (
    <div className="bg-pink-100 py-8 lg:py-24">
      <div className="container mx-auto">
        <SectionHeading title="Telehealth visit" />
        <div className="py-4 flex items-center justify-between">
          <ToggleButton />
          <Link
            className="uppercase border border-blue-700 bg-white py-3 px-6"
            href=""
          >
            See All
          </Link>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {" "}
              {doctorsData.map((doctor) => (
                <div
                  className="flex-[0_0_340px] min-w-[340px] h-[420px]"
                  key={doctor.id}
                >
                  <DoctorsCard
                    doctor={doctor}
                    onSelectTimeSlot={(time) => handleSelectTimeSlot(time)}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${
              !prevBtnEnabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${
              !nextBtnEnabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
