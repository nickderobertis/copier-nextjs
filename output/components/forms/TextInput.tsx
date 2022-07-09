import React from "react";
import { FieldError } from "react-hook-form";
import FieldErrorDisplay from "./FieldErrorDisplay";

type Props = JSX.IntrinsicElements["input"] & {
  label?: string;
  error?: FieldError;
};

const TextInput = React.forwardRef<unknown, Props>(
  ({ name, label, error, ...rest }, ref) => {
    return (
      <>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          name={name}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          {...rest}
          // @ts-ignore  This is what is documented in the React Hook Form docs
          ref={ref}
        />
        <FieldErrorDisplay error={error} />
      </>
    );
  }
);

export default TextInput;
