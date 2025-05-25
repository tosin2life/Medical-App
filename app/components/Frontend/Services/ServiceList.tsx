import React from "react";
import ServiceCard from "./ServiceCard";

interface ServiceListProps {
  services: {
    title: string;
    image: string;
    slug: string;
  }[];
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {services.map((service, i) => (
        <ServiceCard
          key={i}
          title={service.title}
          image={service.image}
          slug={service.slug}
        />
      ))}
    </div>
  );
}
