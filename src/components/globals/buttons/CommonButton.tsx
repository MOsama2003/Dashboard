import { Button } from "@/components/ui/button";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import Spinner from "@/components/ui/spinner";
import { scheme } from "@/types/ui-types";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  scheme?: scheme;
  className?: string;
  isLoading?: boolean;
}

const getSchemeClass = (scheme: scheme) => {
  let colorsClass = "";
  switch (scheme) {
    case "primary":
      colorsClass =
        "bg-primary text-white hover:bg-primary/90 hover:ring-primary/90";
      break;
    case "secondary":
      colorsClass =
        "bg-secondary text-white hover:bg-secondary/80 hover:ring-secondary/90";
      break;
    case "danger":
      colorsClass =
        "bg-danger text-white hover:bg-danger/90 hover:ring-danger/90";
      break;
    case "success":
      colorsClass =
        "bg-success text-white hover:bg-success/90 hover:ring-success/90";
      break;
    default:
      break;
  }
  return colorsClass;
};

const CommonButton: React.FC<Props> = ({
  children,
  scheme,
  className,
  isLoading = true,
  ...rest
}) => {
  let colorsClass = getSchemeClass(scheme);
  return (
    <EnhancedButton
      variant="ringHover"
      className={`${className} ${colorsClass}`}
      {...rest}
    >
      {isLoading && <Spinner />}
      {/* {children} */}
    </EnhancedButton>
  );
};

export default CommonButton;
