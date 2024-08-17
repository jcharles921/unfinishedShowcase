"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import { Sliding, Trophees } from "../containers/aboutPage";
import ButtonL from "../components/buttons/ButtonsL";
import { FiArrowUpRight } from "react-icons/fi";
import { PeaceSport } from "../../public/svg";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import TimeLine from "../containers/aboutPage/TimeLine";

const Home = () => {
  return (
    <main>
      <div className="hero flex  flex-col sm:flex-row justify-around  items-center mt-12">
        <div className=" flex flex-col ">
          <h3 className=" largeTitle text-start font-Inter text-secondary ">
            Bienvenue à{" "}
          </h3>
          <h1 className="BigTitle   text-start md:text-star leading-[111%] lea font-Montserrat font-black mt-1 sm:mt-5 text-secondary">
            CARLOS <br />
            TAKAM <br /> FONDATION
          </h1>
        </div>
        <div className=" w-[60%] sm:w-[55%] md:w-[50%] mt-14 sm:mt-0">
          <CldImage
            src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1710969874/Carlos_makgk1.png"
            width="695"
            height="490"
            className="bg-background "
            alt="Carlos Takam Fondation"
          />
        </div>
      </div>
      {/* SLIDER */}
      <Sliding />
      {/* TROPHEES */}
      <Trophees />
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="mb-14 font-poppins largeTitle text-center text-secondary font-semibold">
          PARCOURS PROFFESSIONNEL
        </div>
      </div>
      <TimeLine />
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="my-14 font-poppins largeTitle text-secondary font-semibold">
          Nos Partenaires
        </div>{" "}
        <p className="text-center font-poppins SliderText max-w-[45%]">
          Nous sommes heureux et reconnaissants de travailler en partenariat
          avec Peace and sports.
        </p>
      </div>
      <div className="partenaireView flex flex-col md:flex-row items-center justify-center gap-16 mt-14 px-20 md:px-0 ">
        <img src={PeaceSport.src} className=" w-full max-w-80" alt="" />
        <CldImage
          className="w-full max-w-[400px] md:max-w-[678px] "
          src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1710966744/Carlos%20Takam/PartenaireCarlos.png"
          width="478"
          height="470"
          alt="Peace and sports@"
        />
      </div>
      <div className="my-12 flex justify-center items-center">
        <ButtonL
          submit={true}
          className="shadow-md smalltext mt-12 w-[23%] h-14 hover:bg-[#C2B450] active:bg-[#e0d793] font-bold "
          value="Devenez notre partenaire"
          route="/"
          icon={<FiArrowUpRight className="w-10 h-10" />}
        />
      </div>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
