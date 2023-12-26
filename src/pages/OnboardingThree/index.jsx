import React from "react";

import { Button, Img, Input, Text } from "components";

const OnboardingThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto md:pr-10 pr-12 sm:pr-5 w-full">
        <Img
          className="h-[100vh] sm:h-auto object-fill w-[25%] md:w-full"
          src="images/img_sidebar.png"
          alt="sidebar"
        />
        <div className="flex flex-col items-start justify-end md:ml-[0] ml-[225px] md:mt-0 mt-36 p-6 sm:px-5 w-[33%] md:w-full">
          <Text
            className="mt-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
            size="txtInterSemiBold24"
          >
            Launch your company now
          </Text>
          <Text
            className="leading-[24.00px] mt-[7px] text-gray-800 text-sm w-[83%] sm:w-full"
            size="txtInterRegular14"
          >
            Get the process started in less than 10 minutes. Let us handle the
            rest.
          </Text>
          <Input
            name="email"
            placeholder=" hello@designspace.io "
            className="leading-[normal] p-0 placeholder:text-gray-900 text-left text-sm w-full"
            wrapClassName="border border-gray-200 border-solid mt-6 w-full"
          ></Input>
          <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row items-center justify-start mt-6 p-[13px] rounded w-full">
            <Img
              className="h-5 mb-0.5 ml-[3px]"
              src="images/img_thumbsup.svg"
              alt="thumbsup"
            />
            <Img
              className="h-4 ml-1 w-4"
              src="images/img_icdown.svg"
              alt="icdown"
            />
            <div className="flex flex-col items-center justify-start ml-3">
              <Text
                className="text-blue_gray-400 text-sm"
                size="txtInterRegular14Bluegray400"
              >
                Phone number
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[240px] mt-6 text-center text-sm"
            shape="round"
            color="blue_A400"
            size="md"
            variant="fill"
          >
            Start my business
          </Button>
        </div>
        <div className="flex flex-row items-center justify-center md:ml-[0] ml-[85px] md:mt-0 mt-12 w-[16%] md:w-full">
          <a href="javascript:" className="text-gray-900 text-sm">
            <Text size="txtInterRegular14Gray900">Don’t have an account?</Text>
          </a>
          <div className="flex flex-col items-center justify-start ml-1">
            <a href="javascript:" className="text-blue-A400 text-sm">
              <Text size="txtInterSemiBold14">Sign Up</Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingThreePage;
