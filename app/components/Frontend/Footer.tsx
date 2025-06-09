import React from "react";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";

interface SocialLink {
  title: string;
  href: string;
  icon: IconType;
  color?: string;
}
export default function Footer() {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "/join",
          name: "List your Service",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "javascript:void()",
          name: "Docs",
        },
        {
          href: "javascript:void()",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Privacy",
        },
        {
          href: "javascript:void()",
          name: "About US",
        },
      ],
    },
  ];
  const socialLinks: SocialLink[] = [
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/company/medical-app",
      icon: IoLogoLinkedin,
      color: "text-blue-600",
    },

    {
      title: "Instagram",
      href: "https://www.instagram.com/company/medical-app",
      icon: IoLogoInstagram,
      color: "text-orange-600",
    },
    {
      title: "Twitter",
      href: "https://www.x.com/company/medical-app",
      icon: IoLogoTwitter,
      color: "text-blue-600",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="https://www.floatui.com/logo.svg" className="w-32" />
            <p className="leading-relaxed mt-2 text-[15px]">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-gray-800 font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="hover:underline hover:text-indigo-600"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} Med-App All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {socialLinks.map((link, id) => {
              return (
                <li
                  key={id}
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                >
                  <a href={link.href}>
                    <link.icon className={`w-6 h-6 ${link.color}`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
