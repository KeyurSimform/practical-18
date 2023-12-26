import React from "react";

const sizeClasses = {
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtInterMedium14BlueA400: "font-inter font-medium",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold14Gray900: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterRegular14Gray900: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtRobotoBold35: "font-bold font-roboto",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium16Bluegray400: "font-inter font-medium",
  txtRobotoBold14: "font-bold font-roboto",
  txtInterRegular12Gray900: "font-inter font-normal",
  txtRobotoBold21: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
