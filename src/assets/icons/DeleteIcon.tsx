import { SVGProps } from "react";

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_9372_15782" fill="white">
        <rect x="2.08643" y="4.7168" width="12" height="13" rx="1" />
      </mask>
      <rect
        x="2.08643"
        y="4.7168"
        width="12"
        height="13"
        rx="1"
        stroke="#363A45"
        stroke-width="3"
        mask="url(#path-1-inside-1_9372_15782)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.12161 0.716797C4.78726 0.716797 4.47503 0.883898 4.28956 1.1621L3.75309 1.9668H1.58643C1.17221 1.9668 0.836426 2.30258 0.836426 2.7168C0.836426 3.13101 1.17221 3.4668 1.58643 3.4668H14.5864C15.0006 3.4668 15.3364 3.13101 15.3364 2.7168C15.3364 2.30258 15.0006 1.9668 14.5864 1.9668H12.4198L11.8833 1.1621C11.6978 0.883898 11.3856 0.716797 11.0512 0.716797H5.12161Z"
        fill="#363A45"
      />
    </svg>
  );
};

export default DeleteIcon;
