import * as React from "react"
const InformBtnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={18}
    fill="none"
  >
    <mask id="a" fill="#fff">
      <rect width={12} height={13} x={1.608} y={4.629} rx={1} />
    </mask>
    <rect
      width={12}
      height={13}
      x={1.608}
      y={4.629}
      stroke="#DADCDC"
      strokeWidth={3}
      mask="url(#a)"
      rx={1}
    />
    <path
      fill="#DADCDC"
      fillRule="evenodd"
      d="M4.644.629a1 1 0 0 0-.832.445l-.537.805H1.108a.75.75 0 1 0 0 1.5h13a.75.75 0 0 0 0-1.5h-2.166l-.537-.805a1 1 0 0 0-.832-.445h-5.93Z"
      clipRule="evenodd"
    />
  </svg>
)
export default InformBtnIcon