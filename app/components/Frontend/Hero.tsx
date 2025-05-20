"use cli ent";
import Link from "next/link";
import React from "react";
import DesignDots from "../icons/DesignDots";
import SearchBar from "./SearchBar";
import TransitionalText from "./TransitionalText";
import { Pill } from "lucide-react";

export default function Hero() {
  const TEXTS = [
    "Doctor",
    "Dentist",
    "Specialist",
    "Physician",
    "Therapist",
    "Surgeon",
    "Nurse",
  ];
  return (
    <div className="bg-blue-950">
      <div className="relative max-w-6xl mx-auto pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-gray-50 dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  <span>Book your</span>
                  <br />
                  <TransitionalText TEXTS={TEXTS} className="text-blue-500" />
                  <span>appointment with ease</span>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-gray-100 dark:text-dark-6">
                  Book your Medical doctor appointment with ease. We provide a
                  seamless platform for scheduling appointments, managing your
                  health records, and connecting with healthcare professionals.
                </p>

                {/* SEARCH BAR */}
                <SearchBar />

                {/* CTA BTNs */}
                <ul className="flex flex-wrap items-center mt-6">
                  <li>
                    <Link
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                    >
                      Need a doctor urgently
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-50 hover:text-primary  dark:text-white"
                    >
                      <span className="mr-2">
                        <Pill className="size-5 text-blue-500" />
                      </span>
                      Need a prescription
                    </Link>
                  </li>
                </ul>
                <div className="py-4 flex gap-4 items-center">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-50">600</span>
                    <span className="text-sm text-gray-400">
                      Active Specialists
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-50">1800</span>
                    <span className="text-sm text-gray-400">
                      Active Patients
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <DesignDots />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
