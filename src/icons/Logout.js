import * as React from 'react';

function SvgLogout(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40.12}
      height={40.12}
      {...props}
    >
      <g opacity={0.5}>
        <path data-name="Path 6169" d="M0 0h40.12v40.12H0z" fill="none" />
        <path
          data-name="Path 6170"
          d="M10.03 35.102h10.03v-23.4H10.03zm5.015-13.37h3.343v3.343h-3.343z"
          opacity={0.3}
        />
        <path
          data-name="Path 6171"
          d="M31.762 31.762V6.687h-6.687V5.015H8.358v26.747H5.015v3.343h20.06V10.03h3.34v25.075h6.69v-3.343zm-10.03 0h-10.03V8.358h10.03zm-5.017-13.374h3.343v3.343h-3.343z"
        />
      </g>
    </svg>
  );
}

export default SvgLogout;
