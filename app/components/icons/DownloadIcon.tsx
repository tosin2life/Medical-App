import React from "react";

export default function DownloadIcon(props: { className?: string }) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
      <rect
        x="7.99893"
        y="14.979"
        width="8.18182"
        height="1.63636"
        fill="white"
      />
      <rect
        x="11.2717"
        y="7.61523"
        width="1.63636"
        height="4.09091"
        fill="white"
      />
      <path
        d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
        fill="white"
      />
    </svg>
  );
}
