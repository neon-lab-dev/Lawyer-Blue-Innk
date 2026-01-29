import React from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  text: string;
  align?: "left" | "center" | "right";
  colorClass?: string;
  className?: string;
};

const SectionHeading = ({
  text,
  align = "left",
  colorClass = "text-neutral-15",
  className,
}: SectionHeadingProps) => {
  return (
    <h2
      className={clsx(
        "text-2xl md:text-[48px] font-medium mb-4",
        colorClass,
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
