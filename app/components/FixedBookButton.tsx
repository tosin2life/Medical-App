import React from "react";
import { Button } from "@/components/ui/button";

export default function FixedBookButton() {
  return (
    <div className="fixed bottom-0 w-full shadow-lg z-50 bg-white p-4 max-w-4l mx-auto">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className=" ">
          <p>$56</p>
          <p>Tue, March 12 - 8:00AM ET</p>
        </div>
        <Button variant="outline" className="cursor-pointer px-6 py-4">
          Book Now
        </Button>
      </div>
    </div>
  );
}
