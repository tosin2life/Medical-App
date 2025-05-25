import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: "green" | "blue" | "purple" | "yellow" | "red" | "gray";
}

const Badge: React.FC<BadgeProps> = ({ children, color = "green" }) => {
  const colorClasses = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
