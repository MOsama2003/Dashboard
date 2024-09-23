import APP_IMAGES from "@/constants/images";
import React from "react";

interface Props {}

const AuthImageSection: React.FC<Props> = () => {
  return (
    <div className="hidden bg-primaryThemeColor h-[100vh] bg-muted lg:block p-14">
      <div>
        <div className="text-white text-4xl py-4 font-semibold">
          <h2>Let's Keep a counting</h2>
          <h2>of Your Finance!</h2>
        </div>
        <p className="text-white text-xl font-thin">We help you to keep record of you Transaction</p>
        <div className="bg-white rounded-2xl mt-4">
          <img src={APP_IMAGES.DASHBOARD} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthImageSection;
