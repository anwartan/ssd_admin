import * as React from 'react';

function SvgCalender(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={51.035}
      height={51.035}
      {...props}
    >
      <path data-name="Path 6033" d="M0 0h51.035v51.035H0z" fill="none" />
      <path
        data-name="Path 6034"
        d="M10.632 10.632h29.77v4.253h-29.77z"
        fill="#fff"
        opacity={0.3}
      />
      <path
        data-name="Path 6035"
        d="M40.402 6.379h-2.123V2.126h-4.256v4.253H17.011V2.126h-4.253v4.253h-2.126a4.265 4.265 0 00-4.253 4.253v29.77a4.265 4.265 0 004.253 4.253h29.77a4.265 4.265 0 004.253-4.253v-29.77a4.265 4.265 0 00-4.253-4.253zm0 34.023h-29.77V19.138h29.77zm0-25.517h-29.77v-4.253h29.77zM19.754 37.149l5.189-5.189 5.189 5.189 2.254-2.254-5.189-5.189 5.189-5.189-2.254-2.254-5.189 5.189-5.189-5.189-2.254 2.254 5.189 5.189-5.189 5.189z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCalender;
