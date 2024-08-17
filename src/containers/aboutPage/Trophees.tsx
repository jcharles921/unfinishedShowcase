import React from "react";
import { CldImage } from "next-cloudinary";
import { BlueTrophee, YellowTrophee } from "../../utils/Icons";
import { vitrine } from "public/svg";
const Trophees = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-30 px-[32px] md:px-[72px]  ">
      <div className="mb-14 font-poppins largeTitle  text-secondary font-semibold">
        Trophees
      </div>
      <div
        className="vitrine  flex flex-wrap justify-center items-center gap-x-16 gap-y-11 py-14 w-full  max-w-[1295px] rounded-[44px]  "
        style={{
          backgroundImage: `url(${vitrine.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="win w-full max-w-[147px] md:max-w-[244px] backdrop-blur-sm flex flex-col items-center justify-center   text-white font-poppins text-center text-xl h-44 md:h-60 rounded-lg ">
          <YellowTrophee className=" w-full max-w-20 mb-1" />{" "}
          <p className="w-full max-w-[12rem] rTrophee">
            Champion du monde WBC SYLVER.
          </p>
        </div>
        <div className="backdrop-blur-sm w-full max-w-[147px] md:max-w-[244px] win flex flex-col items-center justify-center   text-white font-poppins text-center text-xl  h-44 md:h-60 rounded-lg ">
          <BlueTrophee className=" mb-1" />{" "}
          <p className="w-full max-w-[12rem] rTrophee">Champion du monde WBF</p>
        </div>
        <div className="backdrop-blur-sm w-full max-w-[147px] md:max-w-[244px] win flex flex-col items-center justify-center   text-white font-poppins text-center text-xl h-44 md:h-60 rounded-lg ">
          <YellowTrophee className=" mb-1" />{" "}
          <p className="w-full max-w-[12rem] rTrophee">
            Champion intercontinental WBF.
          </p>
        </div>
        <div className="backdrop-blur-sm w-full max-w-[147px] md:max-w-[244px] win flex flex-col items-center justify-center   text-white font-poppins text-center text-xl h-44 md:h-60 rounded-lg ">
          <BlueTrophee className="w-full max-w-20 mb-1" />{" "}
          <p className=" w-full max-w-[12rem] rTrophee">
            Champion international WBO Afrique
          </p>
        </div>
        <div className="backdrop-blur-sm w-full max-w-[147px] md:max-w-[244px] win flex flex-col items-center justify-center  text-white font-poppins text-center text-xl  h-44 md:h-60 rounded-lg ">
          <YellowTrophee className="w-full max-w-20 mb-1" />{" "}
          <p className="w-full max-w-[12rem] rTrophee">
            Actuel détenteur du titre intercontinental IBF.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trophees;
