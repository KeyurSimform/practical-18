import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const OnboardingThreeThreePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[72px] items-center justify-start mx-auto pb-[110px] w-full min-h-screen">
        <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 flex flex-col font-inter items-center justify-start p-6 md:px-5 rounded-lg shadow-bs w-[32%] md:w-full">
          <Button
            className="flex h-16 items-center justify-center mt-6 outline outline-[0.5px] outline-blue-A400 w-16"
            shape="circle"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img className="h-8" src="images/img_location.svg" alt="location" />
          </Button>
          <Text
            className="mt-[33px] text-center text-gray-900 text-sm"
            size="txtInterRegular14Gray900"
          >
            Step 3 of 3
          </Text>
          <Text
            className="mt-[11px] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
            size="txtInterSemiBold24"
          >
            Set up your payment
          </Text>
          <Text
            className="leading-[24.00px] mt-[7px] text-center text-gray-800 text-sm w-[62%] sm:w-full"
            size="txtInterRegular14"
          >
            Your membership starts as soon as you set up payment
          </Text>
          <Text
            className="mt-8 text-center text-gray-900 text-sm"
            size="txtInterMedium14"
          >
            <>
              No commitments. <br />
              Cancel online any time.
            </>
          </Text>
          <div className="flex flex-col items-center justify-start mb-6 mt-8 w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-between p-3 rounded w-full">
              <div className="flex items-start justify-start">
                <Text
                  className="text-gray-800 text-sm"
                  size="txtInterRegular14"
                >
                  Credit or Debit Card
                </Text>
                <Img
                  className="h-6 sm:ml-[0] ml-[23px]"
                  src="images/img_close_gray_900.svg"
                  alt="close"
                />
                <Img
                  className="h-6 ml-2 sm:ml-[0]"
                  src="images/img_television_blue_900.svg"
                  alt="television"
                />
                <Img
                  className="h-6 ml-2 sm:ml-[0]"
                  src="images/img_television_blue_a400.svg"
                  alt="television_One"
                />
              </div>
              <div>
                <Img
                  className="h-6 sm:ml-[0] ml-[82px] w-6"
                  src="images/img_arrowright_blue_gray_400.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-between mt-6 p-3 rounded w-full">
              <div className="flex items-start justify-start">
                <Text
                  className="text-gray-800 text-sm"
                  size="txtInterRegular14"
                >
                  Paypal
                </Text>
                <Img
                  className="h-6 ml-3 sm:ml-[0]"
                  src="images/img_television_white_a700.svg"
                  alt="television_Two"
                />
              </div>
              <Img
                className="h-6 sm:ml-[0] ml-[267px] w-6"
                src="images/img_arrowright_blue_gray_400.svg"
                alt="arrowright_One"
              />
            </div>
            <div className="bg-white-A700 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-between mt-6 p-3 rounded w-full">
              <div className="flex items-start justify-evenly">
                <Text
                  className="text-gray-800 text-sm"
                  size="txtInterRegular14"
                >
                  Gift code
                </Text>
                <div className="flex sm:flex-1 flex-row font-roboto gap-1.5 items-center justify-center ml-4 sm:ml-[0] w-[16%] sm:w-full">
                  <Img
                    className="h-4 w-[15px]"
                    src="images/img_videocamera.svg"
                    alt="videocamera_One"
                  />
                  <Text
                    className="text-gray-900 text-sm"
                    size="txtRobotoBold14"
                  >
                    Prism
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 sm:ml-[0] ml-[220px] w-6"
                src="images/img_arrowright_blue_gray_400.svg"
                alt="arrowright_Two"
              />
            </div>
            <div className="flex flex-row gap-2 items-start justify-center mt-8 w-[29%] md:w-full">
              <Img
                className="h-4 w-4"
                src="images/img_location_orange_a200.svg"
                alt="location_One"
              />
              <Text
                className="text-center text-gray-800 text-sm"
                size="txtInterRegular14"
              >
                Secure server
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingThreeThreePage;
