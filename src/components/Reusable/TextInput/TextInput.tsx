"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  value?: string;
  onChange?: any;
  defaultValue?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      name,
      placeholder = "",
      type = "text",
      error,
      defaultValue,
      isDisabled = false,
      // isRequired = true,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-2 font-work-sans w-full">
        <div className="relative w-full">
          {label && (
            <label
              htmlFor={name}
              className="absolute -top-2.5 left-6 bg-white px-2 text-[13px] font-medium text-neutral-15 font-neue-montreal"
            >
              {label}
              {/* <span className="text-primary-10">
          {isRequired ? " *" : ""}
        </span> */}
            </label>
          )}

          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            ref={ref}
            disabled={isDisabled}
            className={`w-full px-7 py-[15px] rounded-xl border focus:outline-none focus:border-primary-10 transition duration-300 ${
              isDisabled ? "cursor-not-allowed bg-neutral-50/20" : "bg-white"
            } ${error ? "border-red-500" : "border-neutral-35"}`}
            {...rest}
          />
        </div>

        {error?.message && (
          <span className="text-red-500 text-sm mt-1">
            {String(error.message)}
          </span>
        )}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
