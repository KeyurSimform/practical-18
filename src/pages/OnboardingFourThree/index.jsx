import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const OnboardingFourThreePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[72px] items-center justify-start mx-auto pb-[72px] w-full min-h-screen">
        <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-inter gap-[47px] items-center justify-start md:px-5 w-[32%] md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs w-full">
            <Text
              className="mt-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtInterSemiBold24"
            >
              What’s your location?
            </Text>
            <Text
              className="mt-3 text-gray-800 text-sm"
              size="txtInterRegular14"
            >
              See people, jobs, and news in your area.
            </Text>
            <Input
              name="countryregion"
              placeholder="Country/ Region"
              className="!placeholder:text-blue_gray-400 !text-blue_gray-400 leading-[normal] p-0 text-left text-sm w-full"
              wrapClassName="mt-[34px] outline outline-[0.5px] outline-gray-200 w-full"
            ></Input>
            <div className="bg-white-A700 flex flex-col items-start justify-start mt-6 outline outline-[0.5px] outline-gray-200 p-[15px] rounded w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtInterRegular14Bluegray400"
                >
                  What your business called?
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center min-w-full">
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[90%] sm:min-w-full mt-[241px] text-center text-sm"
                shape="round"
                color="blue_A400"
                size="md"
                variant="fill"
              >
                Start Free Trial
              </Button>
              <div className="mt-10">
                <Text
                  className="text-blue-A400 text-sm"
                  size="txtInterMedium14BlueA400"
                >
                  Skip
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center w-full">
            <Text
              className="text-gray-900 text-sm min-w-[14%]"
              size="txtInterRegular14Gray900"
            >
              1 of 4
            </Text>
            <div className="min-w-[84%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-[25%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingFourThreePage;
