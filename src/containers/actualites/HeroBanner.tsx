import React from "react";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <section className=" w-full flex  flex-col items-center justify-center mt-12 px-4  sm:px-8  md:px-[72px]">
      <div className=" font-poppins bg-no-repeat bg-[url('/svg/Banner.svg')] text-white h-[380px] sm:h-[450px] md:h-[500px] rounded-[33px] flex flex-col items-start pr-14 w-full justify-center sm:justify-end ">
        <Link
          href="/actualites/1"
          className="w-full max-w-[800px] ml-[20px]  sm:ml-[60px] md:ml-[90px] mb-[35px] sm:mb-[50px] md:mb-[72px]"
        >
          <h3 className="">En vedette</h3>
          <h2 className="font-Montserrat font-bold largeTitle">
            BOXER POUR LA PAIX
          </h2>
          <p className="text-left self-start  vignetteText ">
            Un combat pour la paix, un coup de poing pour l'unité : Découvrez
            l'Initiative Rwanda Boxing for Peace, où la force du sport forge des
            liens et inspire l'harmonie au cœur de l'Afrique de l'Est
          </p>
        </Link>
      </div>
      {/* <CldImage
        className=" w-full "
        src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1713254460/Banner_p3ioct.jpg"
        width={800}
        height={600}
        alt="Hero banner"
      /> */}
    </section>
  );
};

export default HeroBanner;
