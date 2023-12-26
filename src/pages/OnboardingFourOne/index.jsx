import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const OnboardingFourOnePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[72px] items-center justify-start mx-auto pb-[72px] w-full min-h-screen">
        <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-inter gap-[47px] items-center justify-start md:px-5 w-[30%] md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs w-full">
            <Text
              className="leading-[34.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtInterSemiBold24"
            >
              <>
                Almost done! Let’s confirm <br />
                your email.
              </>
            </Text>
            <Text
              className="mt-3 text-gray-800 text-sm"
              size="txtInterRegular14"
            >
              This way, people will recognize you.
            </Text>

            <div className="flex flex-col justify-center items-center min-w-full">
              <Input
                name="emailaddress"
                placeholder="Email address"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 leading-[normal] p-0 text-left text-sm w-full"
                wrapClassName="border border-gray-200 border-solid mt-[34px] w-full"
                type="email"
              ></Input>
              <div className=" mt-8">
                <Text
                  className="text-blue-A400 text-center text-sm"
                  size="txtInterMedium14BlueA400"
                >
                  Resend email
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center min-w-full">
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[90%] sm:min-w-full mt-[222px] text-center text-sm"
                shape="round"
                color="blue_A400"
                size="md"
                variant="fill"
              >
                Go to Email
              </Button>
              <div className=" mt-10">
                <Text
                  className="text-blue-A400 text-center text-sm"
                  size="txtInterMedium14BlueA400"
                >
                  Skip
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-center w-full">
            <Text
              className="text-gray-900 text-sm min-w-[14%]"
              size="txtInterRegular14Gray900"
            >
              3 of 4
            </Text>
            {/* <div className="bg-blue-A400 h-2 mb-[3px] sm:mt-0 mt-1.5 rounded w-[90%]"></div> */}

            <div className="min-w-[84%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingFourOnePage;
