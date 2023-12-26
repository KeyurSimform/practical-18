import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const OnboardingFour1Page = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[72px] items-center justify-start mx-auto pb-[72px] w-full min-h-screen">
        <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-inter gap-[47px] items-center justify-start md:px-5 w-[32%] md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs w-full">
            <Text
              className="leading-[34.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtInterSemiBold24"
            >
              <>
                What’s the main thing you <br />
                want to do?
              </>
            </Text>
            <Text
              className="leading-[24.00px] mt-2 text-gray-800 text-sm w-[83%] sm:w-full"
              size="txtInterRegular14"
            >
              We’ll use this info to personalize your experience (Don’t worry,
              we’ll keep it private)
            </Text>
            <Input
              name="trackbills"
              placeholder="Track your bills"
              className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-left text-sm w-full"
              wrapClassName="flex mt-8 outline outline-[0.5px] outline-blue-A400 w-full"
              prefix={
                <Img
                  className="h-10 mr-4 my-auto"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
              }
            ></Input>
            <Input
              name="trackretails"
              placeholder="Track your Retails sales"
              className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-left text-sm w-full"
              wrapClassName="border border-gray-200 border-solid flex mt-6 w-full"
              prefix={
                <Img
                  className="h-10 mr-4 my-auto"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
              }
            ></Input>
            <Input
              name="manageinventory"
              placeholder="Manage your inventory"
              className="font-semibold leading-[normal] p-0 placeholder:text-gray-900 text-left text-sm w-full"
              wrapClassName="border border-gray-200 border-solid flex mt-6 w-full"
              prefix={
                <Img
                  className="h-10 mr-4 my-auto"
                  src="images/img_icviewweek.svg"
                  alt="ic_view_week"
                />
              }
            ></Input>
            <div className="flex flex-col justify-center items-center min-w-full">
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[90%] sm:min-w-full mt-6  text-center text-sm"
                shape="round"
                color="blue_A400"
                size="md"
                variant="fill"
              >
                Submit{" "}
              </Button>
              <div className=" mt-10 mb-5">
                <Text
                  className="text-blue-A400 text-center text-sm"
                  size="txtInterMedium14BlueA400"
                >
                  Not sure yet. I’m open!
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-center w-full">
            <Text
              className="text-gray-900 text-sm min-w-[14%]"
              size="txtInterRegular14Gray900"
            >
              4 of 4
            </Text>
            {/* <div className="bg-blue-A400 h-2 mb-[3px] sm:mt-0 mt-1.5 rounded w-[90%]"></div> */}

            <div className="min-w-[84%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-[100%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingFour1Page;
