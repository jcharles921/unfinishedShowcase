import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({
  value,
  submit,
  type,
  icon,
  className,
  route,
  onClick,
  disabled = false,
}: {
  value: string | JSX.Element | Record<string, unknown>;
  submit?: boolean;
  type?: string;
  className?: string;
  icon?: React.ReactNode;
  route?: string;
  onClick?: () => void;
  disabled?: boolean;
  background?: boolean;
}) => {
  if (submit) {
    return (
      <button
        type={(type as "submit" | "reset" | "button" | undefined) || "submit"}
        className={` ${className} bg-primary  sm:text-xs text-tertiary p-2 rounded-full flex gap-3 max-w-36  sm:py-2 md:py-3 ease-in-out duration-200 hover:scale-[.99] active:scale-[1.03] text-poppins font-medium items-center justify-center`}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
        <span className="hidden sm:inline">{value as React.ReactNode}</span>
      </button>
    );
  }

  return (
    <Link href={route || ""} onClick={onClick} className={className}>
      {icon}
      <span className="hidden sm:inline">{value as React.ReactNode}</span>
    </Link>
  );
};

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.shape({}),
  ]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  route: PropTypes.string,
  submit: PropTypes.bool,
  onClick: PropTypes.func,
  background: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
