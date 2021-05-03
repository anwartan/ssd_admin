import * as React from 'react';

function SvgClose(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path
        data-name="Path 1998"
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
      <path data-name="Path 1999" d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export default SvgClose;
