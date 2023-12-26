import React from "react";

import { Button, Img, Text } from "components";

const OnboardingOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[78px] justify-center items-center mx-auto p-12 md:px-10 sm:px-5 w-full min-h-screen">
        <div className="flex flex-row items-start justify-end md:ml-[0] ml-[1177px] w-[13%] md:w-full">
          <Text
            className="text-gray-900 text-sm"
            size="txtInterRegular14Gray900"
          >
            Having trouble?
          </Text>
          <div className="flex flex-col items-center justify-start ml-1">
            <Text className="text-blue-A400 text-sm" size="txtInterSemiBold14">
              Get Help
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[314px] items-center justify-center mb-4 md:ml-[0] ml-[492px] mr-[394px] w-[35%] md:w-full">
          <div className="flex flex-col items-start justify-end p-6 sm:px-5 w-full">
            <Text
              className="mt-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtInterSemiBold24"
            >
              Choose the type company
            </Text>
            <Text
              className="mt-3 text-gray-800 text-sm"
              size="txtInterRegular14"
            >
              Creating your company in US is just a few steps away.
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start mt-[26px] outline outline-[0.5px] outline-blue-A400 p-6 sm:px-5 rounded-lg w-full">
              <div className="flex flex-row items-center justify-start w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_television.svg"
                  alt="television"
                />
                <div className="flex flex-col items-start justify-start ml-4 w-2/5">
                  <Text
                    className="text-blue-A400 text-sm"
                    size="txtInterSemiBold14"
                  >
                    LLC
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtInterRegular14Bluegray400"
                    >
                      Owned by Individuals
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-6 ml-[140px] w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-start justify-start mt-6 p-6 sm:px-5 rounded-lg w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-3/5 md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
                <div className="flex flex-col items-start justify-start mt-0.5 w-[74%]">
                  <Text
                    className="text-gray-900 text-sm"
                    size="txtInterSemiBold14Gray900"
                  >
                    Corporation
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtInterRegular14Bluegray400"
                    >
                      Owned by Stakeholders
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-[90%] md:w-full">
            <Button
              className="border border-gray-200 border-solid cursor-pointer font-medium leading-[normal] min-w-[90px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Previous
            </Button>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[90px] text-center text-sm"
              shape="round"
              color="blue_A400"
              size="sm"
              variant="fill"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingOnePage;
