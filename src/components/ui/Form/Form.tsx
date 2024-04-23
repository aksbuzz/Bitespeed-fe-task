import { FormEvent, type PropsWithChildren } from 'react';

type FormProps = {
  className?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
} & PropsWithChildren;

export function Form(props: FormProps) {
  const { children, className, onSubmit } = props;

  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
