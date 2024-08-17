import React from "react";
import Link from "next/link";
interface Props {
  textColor?: string;
  value: string | JSX.Element | Record<string, unknown>;
  submit?: boolean;
  type?: string;
  icon?: any;
  className?: string;
  route?: string;
  onClick?: () => void;
  disabled?: boolean;
}
const ButtonL: React.FC<Props> = ({
  textColor,
  value,
  submit,
  type,
  icon,
  className,
  route,
  onClick,
  disabled = false,
}) => {
  if (submit) {
    return (
      <button
        type={(type as "submit" | "reset" | "button" | undefined) || "submit"}
        className={` ${className} bg-primary text-tertiary p-2 rounded-full flex items-center justify-center gap-3 px-5 py-3 ease-in-out duration-200 hover:scale-[.99] active:scale-[1.03] `}
        onClick={onClick}
        disabled={disabled}
      >
        <p className={textColor}> {value as React.ReactNode}</p>
        <span className="hidden md:block"> {icon}</span>
      </button>
    );
  }

  return (
    <Link href={route || ""} onClick={onClick}>
      {value as React.ReactNode}
      {icon}
    </Link>
  );
};

export default ButtonL;
