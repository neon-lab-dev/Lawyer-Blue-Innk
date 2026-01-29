import Image, { StaticImageData } from "next/image";
import React from "react";

type ButtonProps = {
  label: string;
  bgColor?: string;
  textColor?: string;
  icon?: string | StaticImageData;
  shadow?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  iconClassName?: string;
  isDisabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconClassName,
  onClick,
  type,
  isDisabled,
}) => {

  return (
    <button type={type} onClick={onClick} className="rounded-full
      py-4 px-6
      flex items-center justify-center gap-2
      transition-all duration-300 ease-in-out
      active:translate-y-px
      hover:opacity-90 hover:scale-[1.03] bg-gradient-primary
      cursor-pointer" disabled={isDisabled}>
      <p className="font-medium text-neutral-05
      ">{label}</p>
      {icon && (
        <Image
          src={icon}
          alt={label}
          className={`size-4 flex items-center justify-center ${iconClassName}`}
        />
      )}
    </button>
  );
};

export default Button;
