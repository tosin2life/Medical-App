"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";

const megaMenu = [
  {
    title: "Top Booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Book a telehealth appointment with a doctor.",
        href: "/services/tele-health",
      },
      {
        title: "Psychology consultation",
        slug: "psychology-consultation",
        description: "Book a psychology consultation with a doctor.",
        href: "/services/tele-health",
      },
      {
        title: "UTI consultation",
        slug: "uti-consultation",
        description: "Book a UTI consultation with a doctor.",
        href: "/services/tele-health",
      },
    ],
  },
  {
    title: "Doctors",
    services: [
      {
        title: "Primary care",
        slug: "primary-care",
        description: "Book a primary-care appointment with a doctor.",
        href: "/services/tele-health",
      },
      {
        title: "Dermatologist",
        slug: "dermatologist",
        description: "Book a dermatologist consultation with a doctor.",
        href: "/services/tele-health",
      },
      {
        title: "Pediatrician",
        slug: "pediatrician",
        description: "Book a pediatrician consultation with a doctor.",
        href: "/services/tele-health",
      },
    ],
  },
  {
    title: "Speciality",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Book a telehealth appointment with a doctor.",
        href: "/services/tele-health",
      },
      {
        title: "Psychology consultation",
        slug: "psychology-consultation",
        description: "Book a psychology consultation with a doctor.",
        href: "/services/tele-health",
      },
      {
        title: "UTI consultation",
        slug: "uti-consultation",
        description: "Book a UTI consultation with a doctor.",
        href: "/services/tele-health",
      },
    ],
  },
  {
    title: "Symptoms",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Book a telehealth appointment with a doctor.",
        href: "/services/tele-health",
      },
      {
        title: "Psychology consultation",
        slug: "psychology-consultation",
        description: "Book a psychology consultation with a doctor.",
        href: "/services/tele-health",
      },
      {
        title: "UTI consultation",
        slug: "uti-consultation",
        description: "Book a UTI consultation with a doctor.",
        href: "/services/tele-health",
      },
    ],
  },
];
export default function MegaMenu() {
  return (
    <NavigationMenu className="bg-white">
      <NavigationMenuList className=" space-x-20">
        {megaMenu.map((item, i) => (
          <NavigationMenuItem key={i}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.services.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={`/services/${component.href}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
