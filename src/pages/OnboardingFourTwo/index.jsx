import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const OnboardingFourTwoPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[72px] items-center justify-start mx-auto pb-[72px] w-full min-h-screen">
        <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-inter gap-[47px] items-center justify-start md:px-5 w-[25%] md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs w-full">
            <Text
              className="mt-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtInterSemiBold24"
            >
              Now add a photo
            </Text>
            <Text
              className="mt-3 text-gray-800 text-sm"
              size="txtInterRegular14"
            >
              This way, people will recognize you.
            </Text>
            <div className="bg-gray-100 flex flex-col items-start justify-start mt-[34px] p-6 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[84%] md:w-full">
                <Button
                  className="border border-gray-200 border-solid flex h-16 items-center justify-center w-16"
                  shape="circle"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start w-[74%]">
                  <Text
                    className="text-base text-gray-900"
                    size="txtInterMedium16Gray900"
                  >
                    Eureka Seven
                  </Text>
                  <div className="flex flex-col items-center justify-end mt-[3px] py-0.5 w-full">
                    <Text
                      className="mt-0.5 text-blue_gray-400 text-sm"
                      size="txtInterRegular14Bluegray400"
                    >
                      Senior Designer at Amazing corp.
                    </Text>
                  </div>
                </div>
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
                Add Photo
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
              className="text-gray-900 text-sm w-[14%]"
              size="txtInterRegular14Gray900"
            >
              2 of 4
            </Text>
            <div className="min-w-[86%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingFourTwoPage;
