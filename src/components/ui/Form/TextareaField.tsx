import { TextareaHTMLAttributes, forwardRef } from 'react';

type TextareaFieldProps = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  function TextareaField(props, ref) {
    const { label, className, ...textareaProps } = props;

    return (
      <div>
        <label className="text-sm text-gray-400">
          {label}
          <div className="text-base mt-2 text-black">
            <textarea
              ref={ref}
              rows={3}
              className={`w-full border px-2 py-1 focus-visible:outline-slate-300 rounded-md ${
                className ?? ''
              }`}
              {...textareaProps}
            />
          </div>
        </label>
      </div>
    );
  }
);
