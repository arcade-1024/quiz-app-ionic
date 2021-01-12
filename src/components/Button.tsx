import React, { ReactNode } from 'react'
export interface ButtonComponent {
	children?: ReactNode;
	classname?: string;
	onclick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button = ({children,classname,onclick}:ButtonComponent) => {
  return (
    <button className={classname} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
