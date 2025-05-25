"use client";
import React from "react";
import { TabItem, Tabs } from "flowbite-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";
import {
  ActivityIcon,
  MicroscopeIcon,
  StethoscopeIcon,
  SyringeIcon,
} from "lucide-react";
// import { MdDashboard } from "react-icons/md";

export default function TabbedItems() {
  const services = [
    {
      title: "Telehealth",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Video prescription refill",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "UTI consult",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "ED consult",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Mental health consult",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Urgent care",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
  ];
  const tabs = [
    {
      title: "Popular Services",
      icon: MicroscopeIcon,
      component: <ServiceList services={services} />,
      content: [],
    },
    {
      title: "Doctors",
      icon: StethoscopeIcon,
      component: <LinkCards />,
      content: [],
    },
    {
      title: "Speciality",
      icon: ActivityIcon,
      component: <LinkCards className="bg-red-400" />,
      content: [],
    },
    {
      title: "Symptoms",
      icon: SyringeIcon,
      component: <LinkCards className="bg-purple-900" />,
      content: [],
    },
  ];
  return (
    <Tabs aria-label="Tabs with icons" variant="underline">
      {tabs.map((tab, i) => (
        <TabItem key={i} active={i === 0} title={tab.title} icon={tab.icon}>
          {tab.component}
        </TabItem>
      ))}
    </Tabs>
  );
}
