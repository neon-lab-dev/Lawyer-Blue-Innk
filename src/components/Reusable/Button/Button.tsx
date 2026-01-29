import Image from "next/image";
import React from "react";
import { ICONS } from "../../../../public/assets";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  isDisabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-full
      py-3 px-6
      flex items-center justify-center gap-3
      transition-all duration-300 ease-in-out
      active:translate-y-px
      hover:opacity-90 hover:scale-[1.03] bg-gradient-primary
      cursor-pointer w-fit"
      disabled={isDisabled}
    >
      <p
        className="font-medium text-neutral-05"
      >
        {label}
      </p>
      <Image src={ICONS.rightArrow} alt={label} className={`size-6`} />
    </button>
  );
};

export default Button;
