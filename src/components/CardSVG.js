import * as React from "react";
import "../style.css";

function SvgComponent(props) {
  return (
    <svg
      className="card-svg"
      xmlns="http://www.w3.org/2000/svg"
      width={7}
      height={10}
      viewBox="0 0 7 10"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.579 5.25a1.67 1.67 0 11-.001-3.34 1.67 1.67 0 010 3.34zM3.484 0C1.542 0 0 1.637 0 3.656c0 2.752 2.95 5.596 2.95 5.596.398.376.644.406 1.066 0 0 0 2.984-2.844 2.984-5.596C7 1.636 5.425 0 3.484 0z"
        fill="#F55A5A"
      />
    </svg>
  );
}

export default SvgComponent;
