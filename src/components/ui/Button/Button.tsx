import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const { children, className, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={`px-8 py-1.5 bg-white text-blue-700 border-blue-700 hover:bg-blue-100 font-semibold border-[1px] rounded-md ${
        className ?? ''
      }`}
    >
      {children}
    </button>
  );
}
