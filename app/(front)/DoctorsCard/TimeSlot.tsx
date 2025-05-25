import React from "react";

interface TimeSlotProps {
  time: string;
  onClick: () => void;
  disabled?: boolean;
}

const TimeSlot: React.FC<TimeSlotProps> = ({
  time,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-purple-700 text-white hover:bg-purple-800 active:bg-purple-900"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {time}
    </button>
  );
};

export default TimeSlot;
