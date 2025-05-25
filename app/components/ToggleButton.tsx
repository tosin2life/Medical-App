"use client";
import React from "react";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

export function ToggleButton() {
  const [switch1, setSwitch1] = useState(false);

  return (
    <div className="flex max-w-md flex-col items-start gap-4">
      <ToggleSwitch
        checked={switch1}
        label="Within 2 hours"
        onChange={setSwitch1}
      />
    </div>
  );
}
