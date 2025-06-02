import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface AvailabilityProps {
  timeSlots: string[];
}

export default function Availability({ timeSlots }: AvailabilityProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);
  return (
    <div className="mb-[100px]">
      <h2 className="font-bold py-4 text-xl uppercase text-slate-500 tracking-wider">
        Select a Date and Time
      </h2>
      <div className="grid grid-cols-2">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            <h2 className="text-lg text-center py-3 px-4 border border-blue-500 font-medium uppercase text-slate-600">
              {date ? format(date, "EEEE, MMMM do") : "Select a date"}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 px-4">
            {timeSlots.map(
              (time: string, i: number): React.ReactNode => (
                <button
                  key={i}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md"
                >
                  {time}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
