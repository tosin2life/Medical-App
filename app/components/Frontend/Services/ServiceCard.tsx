import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  slug: string;
}

export default function ServiceCard({ title, image, slug }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="rounded-md bg-slate-100 hover:bg-slate-200 duration-300 flex gap-4 overflow-hidden shadow-md shadow-slate-300"
    >
      <Image
        src={image}
        alt={title}
        width={1170}
        height={848}
        className="w-1/3 aspect-square rounded-l-md object-cover"
      />
      <div className="flex flex-col  w-2/3 py-4">
        <h1>{title}</h1>
        <p className="text-[0.6rem]">23 doctors available</p>
      </div>
    </Link>
  );
}
