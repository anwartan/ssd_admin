import clsx from 'clsx';
import React from 'react';

function Button({
  onClick, children, className, style,
}) {
  return (
  // <Ripples>

    <button type="button" onClick={onClick} style={style} className={clsx('btn', className)}>
      {children}
    </button>
  // </Ripples>
  );
}

export default Button;
