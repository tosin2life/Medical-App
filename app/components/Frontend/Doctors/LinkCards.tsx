import React from "react";
import Link from "next/link";

interface LinkCardsProps {
  className?: string;
}

interface LinkItems {
  title: string;
  href: string;
  description?: string;
}

const linkItems: LinkItems[] = [
  {
    title: "Anxiety",
    href: "/services/anxiety",
    description: "Anxiety and stress management",
  },
  {
    title: "Depression",
    href: "/services/depression",
    description: "Depression treatment",
  },
  {
    title: "ADHD",
    href: "/services/adhd",
    description: "ADHD diagnosis and treatment",
  },
  {
    title: "Insomnia",
    href: "/services/insomnia",
    description: "Sleep disorders",
  },
  {
    title: "Bipolar",
    href: "/services/bipolar",
    description: "Bipolar disorder treatment",
  },
  {
    title: "OCD",
    href: "/services/ocd",
    description: "Obsessive-Compulsive Disorder",
  },
  {
    title: "PTSD",
    href: "/services/ptsd",
    description: "Post-Traumatic Stress Disorder",
  },
];

export default function LinkCards({ className }: LinkCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {linkItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={`rounded-md py-3 px-6 flex gap-4  text-slate-50 ${
            className || "bg-slate-800"
          }`}
        >
          <h2>{item.title}</h2>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      ))}
    </div>
  );
}
