import Image from "next/image";
import React from "react";
import CustomButton from "../../../components/CustomButton";
import { CheckIcon } from "lucide-react";
import CustomAccordion from "@/app/components/CustomAccordion";
import Pricing from "@/app/components/Pricing";

// interface FAQprops {
//   question: string;
//   answer: string | JSX.Element;
// }

const features = [
  "Streamline your practice with direct pay solutions.",
  "Focus on patient care without insurance hassles.",
  "Join a network of like-minded healthcare professionals.",
];

const whyUs = [
  "Build your business. Medical-App markets to patients for you.",
  "Get paid faster. No more waiting for insurance reimbursements.",
  "Keep your independence. Set your own prices and policies.",
  "No provider fees or other costs. Access our integrated provider e-prescribing and note-taking tools for free.",
];

const cards = [
  {
    title: "Begin Your journey",
    description:
      "Start a new application to join our network of healthcare professionals.",
    link: "/",
    linkTitle: "Start a new application",
  },
  {
    title: "Resume Application",
    description:
      "Pick up where you left off and complete your onboarding procsess",
    link: "/",
    linkTitle: "Continue your application",
  },
  {
    title: "Schedule a Call",
    description:
      "Arrange time for a call with our team to discuss your application.",
    link: "/",
    linkTitle: "Schedule a call",
  },
  {
    title: "Check Application Status",
    description: "Track the progress of your application and stay updated.",
    link: "/",
    linkTitle: "Check Application Status",
  },
];

const doctorOnboardingFAQs = [
  {
    question: "How do I sign up as a doctor on the platform?",
    answer:
      "Click on the 'Sign Up' button, select 'Doctor', and follow the steps to enter your personal details, medical license number, and upload the required documents.",
  },
  {
    question: "What documents are required during onboarding?",
    answer: (
      <ul className="list-disc pl-5">
        <li>Medical License/Practicing Certificate</li>
        <li>Valid Government-Issued ID (e.g. Driver’s License, Passport)</li>
        <li>Profile Photo</li>
        <li>Resume or Brief Bio (optional but recommended)</li>
      </ul>
    ),
  },
  {
    question: "How long does the verification process take?",
    answer:
      "Verification typically takes 24 to 48 hours. We’ll notify you via email once your credentials have been reviewed.",
  },
  {
    question: "Can I choose my availability?",
    answer:
      "Yes, after onboarding, you’ll be able to set your consultation hours and availability from your dashboard.",
  },
  {
    question: "Is there a fee to join the platform?",
    answer:
      "No, joining as a doctor is completely free. The platform only deducts a small service fee per consultation.",
  },
  {
    question: "What support is available if I have issues?",
    answer: (
      <>
        You can reach our support team via the <strong>Help Center</strong> or
        email us directly at{" "}
        <a href="mailto:support@medapp.com" className="text-blue-600 underline">
          support@medapp.com
        </a>
        .
      </>
    ),
  },
];
export default function page() {
  return (
    <div className="min-h-screen">
      {/* Features */}
      <section className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          {/* Text Section */}
          <div className="flex flex-col justify-center px-2 sm:px-8 lg:px-14 py-12 space-y-4 bg-white ">
            <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-tight">
              Build a thriving <br /> direct-pay practice with{" "}
              <span className="text-blue-600">Medical-App</span>
            </h2>
            <p className="py-4 text-base sm:text-lg text-gray-700">
              Welcome to our healthcare community! We are dedicated to
              connecting healthcare professionals, sharing knowledge, and
              improving patient care.
            </p>
            <CustomButton
              title="Start a new application"
              href="/login"
              className="bg-blue-600 py-4 sm:py-5 px-10 sm:px-16 uppercase text-white hover:bg-blue-700 hover:text-white focus:bg-blue-700 active:bg-blue-800 transition-colors duration-200 cursor-pointer"
            />
            <ul>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-base sm:text-lg text-gray-700 mb-4"
                >
                  <CheckIcon className="inline mr-2" /> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[300px] md:h-auto">
            <Image
              src="/doctor2.jpg"
              alt="Healthcare professional"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      {/* Why Us */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          <div className="relative w-full h-[300px] md:h-auto">
            <Image
              src="/doctor2.jpg"
              alt="Healthcare professional"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-14 py-12 space-y-4 bg-white ">
            <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-tight">
              Treat patients the way you want to treat them.
            </h2>

            <ul>
              {whyUs.map((item, index) => (
                <li
                  key={index}
                  className="text-base sm:text-lg text-gray-700 mb-4"
                >
                  <CheckIcon className="inline mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
        </div>
      </section>
      {/* Pricing */}
      <section>
        <div className="max-w-6xl mx-auto gap-4 ">
          <Pricing />
        </div>
      </section>
      {/* Application */}
      <section className="py-16 px-4 sm:px-8 lg:px-14 bg-gray-100">
        <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-tight">
          Medical-App Application
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 text-center my-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-indigo-600 p-4 sm:p-6 rounded-lg shadow-2xl"
            >
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-white text-sm sm:text-base">
                  {card.description}
                </p>
                <CustomButton
                  title={card.linkTitle}
                  href={card.link}
                  className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-800 py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-8 lg:px-14 bg-white">
        <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] text-center leading-tight mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto gap-4 ">
          <CustomAccordion FAQS={doctorOnboardingFAQs} />
        </div>
      </section>
    </div>
  );
}
