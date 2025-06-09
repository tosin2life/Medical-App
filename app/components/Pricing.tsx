import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: 0,
      desc: "For doctors just getting started with the platform.",
      isMostPop: false,
      features: [
        "Create and manage a professional profile",
        "Accept unlimited patient bookings",
        "Access to patient records",
        "Set your consultation hours",
      ],
    },
    {
      name: "Pro",
      desc: "Ideal for doctors who want more visibility and workflow tools.",
      price: 35,
      isMostPop: true,
      features: [
        "Everything in Basic",
        "Priority profile placement",
        "In-app patient messaging",
        "Automated appointment reminders",
        "Performance dashboard & analytics",
      ],
    },
    {
      name: "Elite",
      desc: "For doctors building a premium, tech-enabled practice.",
      price: 60,
      isMostPop: false,
      features: [
        "Everything in Pro",
        "Custom branded consultation page",
        "Team support for virtual assistants",
        "Advanced analytics & revenue reports",
        "Featured in newsletters & doctor spotlights",
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-tight">
            Pricing for all services
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
              Here are our pricing plans for doctors. Choose the one that fits
              your needs best.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="text-indigo-600 font-medium">{item.name}</span>
                <div className="text-gray-800 text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <p>{item.desc}</p>
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                  Get Started
                </button>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
