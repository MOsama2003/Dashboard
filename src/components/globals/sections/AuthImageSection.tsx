import APP_IMAGES from "@/constants/images";
import React from "react";

interface Props {}

const AuthImageSection: React.FC<Props> = () => {
  const Images = [
    APP_IMAGES.DASHBOARD,
    APP_IMAGES.DASHBOARD1,
    APP_IMAGES.DASHBOARD2,
    APP_IMAGES.DASHBOARD3,
    APP_IMAGES.DASHBOARD4,
    APP_IMAGES.DASHBOARD5,
  ];
  
  const index = Math.floor(Math.random() * Images.length);

  return (
    <div className="hidden bg-primaryThemeColor bg-muted lg:block p-14">
      <div>
        <div className="text-white text-4xl py-4 font-semibold">
          <h2>Let's Keep a counting</h2>
          <h2>of Your Finance!</h2>
        </div>
        <p className="text-white text-xl font-thin">
          We help you to keep record of your Transactions
        </p>
        <div className="bg-white rounded-2xl mt-4">
          <img src={Images[index]} alt="Dashboard" className="h-[70vh] w-full" />
        </div>
      </div>
    </div>
  );
};

export default AuthImageSection;
