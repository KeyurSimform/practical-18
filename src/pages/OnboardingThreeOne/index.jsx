import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const OnboardingThreeOnePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[72px] items-center justify-start mx-auto pb-[205px] w-full min-h-screen">
        <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 flex flex-col font-inter items-center justify-end p-6 md:px-5 rounded-lg shadow-bs w-[25%] md:w-full">
          <Button
            className="flex h-16 items-center justify-center mt-6 outline outline-[0.5px] outline-blue-A400 w-16"
            shape="circle"
            color="white_A700"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-12"
              src="images/img_checkmark_blue_a400_64x64.svg"
              alt="checkmark"
            />
          </Button>
          <Text
            className="mt-8 text-center text-gray-900 text-sm"
            size="txtInterRegular14Gray900"
          >
            1 of 2
          </Text>
          <Text
            className="mt-4 text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
            size="txtInterSemiBold24"
          >
            Choose your plan
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start mt-[31px] w-[89%] md:w-full">
            <div className="flex flex-row gap-4 items-start justify-start w-full">
              <Img
                className="h-6 w-6"
                src="images/img_checkmark_green_a700.svg"
                alt="checkmark_One"
              />
              <Text
                className="sm:flex-1 leading-[24.00px] text-gray-800 text-sm w-[89%] sm:w-full"
                size="txtInterRegular14"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-full">
              <Img
                className="h-6 w-6"
                src="images/img_checkmark_green_a700.svg"
                alt="checkmark_Two"
              />
              <Text
                className="sm:flex-1 leading-[24.00px] text-gray-800 text-sm w-[89%] sm:w-full"
                size="txtInterRegular14"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-full">
              <Img
                className="h-6 w-6"
                src="images/img_checkmark_green_a700.svg"
                alt="checkmark_Three"
              />
              <Text
                className="sm:flex-1 leading-[24.00px] text-gray-800 text-sm w-[89%] sm:w-full"
                size="txtInterRegular14"
              >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id.
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[80%] sm:min-w-full mt-12 text-center text-sm"
            shape="round"
            color="blue_A400"
            size="md"
            variant="fill"
          >
            See Plan
          </Button>
        </div>
      </div>
    </>
  );
};

export default OnboardingThreeOnePage;
