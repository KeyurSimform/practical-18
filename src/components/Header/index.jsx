import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col gap-[19px] items-center justify-center mt-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-[7%]">
              <Img
                className="h-6 w-6"
                src="images/img_videocamera.svg"
                alt="videocamera"
              />
              <Text
                className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-900"
                size="txtRobotoBold21"
              >
                Prism
              </Text>
            </div>
            <div className="flex flex-row gap-6 items-center justify-between w-[9%] mr-10">
              <Button
                className="border border-gray-200 border-solid cursor-pointer font-inter font-medium leading-[normal] min-w-[70px] text-center text-sm"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                Sign In
              </Button>
              <Button
                className="!text-blue-A400 cursor-pointer font-inter font-medium leading-[normal] min-w-[77px] outline outline-[0.5px] outline-blue-A400 text-center text-sm"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <Line className="bg-gray-200 h-px w-full" />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
