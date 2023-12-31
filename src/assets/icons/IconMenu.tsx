import { SVGProps } from "react";

export default function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <div>
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`ui-e2 ${props.className}`}
      >
        <path
          style={{ color: "#00C65E" }}
          d="M5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4-1a1 1 0 000 2h12a1 1 0 100-2H9zm0 6a1 1 0 100 2h12a1 1 0 100-2H9zm-1 7a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm-4.5-4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
