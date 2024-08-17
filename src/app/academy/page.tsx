"use client";
import Footer from "../../components/footer";
import ContactUs from "../../components/contactUs";
import { FiArrowUpRight } from "react-icons/fi";
import { CldImage } from "next-cloudinary";
import Cookies from "js-cookie";

const Academy = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-24 rActionTitle text-center font-semibold ">
        <h1
          style={{
            backgroundImage: "linear-gradient(173deg, #72edf2, #5151e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="NavigationText font-poppins h-[150px] md:h-[280px] px-2"
        >
          Takam Boxing <br /> Academy - Objectifs
        </h1>
      </div>
      <div className="px-8 md:px-[72px] flex flex-col md:flex-row w-full items-center  text-secondary mt-10 md:mt-24 ">
        <div className="flex flex-col items-center md:items-start  mr-0 md:mr-9">
          <h1 className="largeTitle  font-Montserrat text-center md:text-start  font-semibold max-w-[22rem] ">
            DANS LES PAS DES CHAMPIONS
          </h1>
          <p className="font-poppins rActionText mt-3">
            Nous proposons des formations de boxe et proposons une orientation
            professionnelle à nos stagiaires.
          </p>
          <button className="mt-9 bg-primary w-52 text-tertiary  font-poppins font-bold   rounded-full flex items-center justify-center gap-3 px-5 py-2  hover:scale-[1.03] active:scale-[0.99] drop-shadow-md">
            Explorer
            <FiArrowUpRight className="w-8 h-8" />
          </button>
        </div>
        <div>
          <CldImage
            className=" mt-12 md:mt-0 rounded-lg md:rounded-[44px]"
            src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1712511779/Coach_eytp2u.jpg"
            width="794"
            height="530"
            alt="Training Sessions"
          />
        </div>
      </div>
      <div className=" px-8 md:px-[72px] flex flex-col-reverse md:flex-row w-full items-center justify-between text-secondary mt-24 ">
        <div>
          <CldImage
            className="  rounded-lg mt-24 md:mt-0 md:rounded-[44px]"
            src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1712511759/young_boxer1_cd88aq.jpg"
            width="534"
            height="430"
            alt="Training Sessions"
          />
        </div>
        <div className="flex flex-col  ml-0 md:ml-9">
          <h1 className="largeTitle  font-Montserrat font-semibold max-w-[36rem] ">
            DES GANTS POUR <br /> GRANDIR
          </h1>
          <p className="font-poppins rActionText mt-3 max-w-[32rem]">
            Favoriser la pratique de la boxe chez les jeunes défavorisés en leur
            offrant des programmes adaptés et un accès équitable. Notre objectif
            est de leur permettre de développer leurs compétences athlétiques
            tout en renforçant leur confiance en eux et leur esprit compétitif.
          </p>
          <button className="mt-9 bg-primary w-52 text-tertiary  font-poppins font-bold   rounded-full flex items-center justify-center gap-3 px-5 py-2  hover:scale-[1.03] active:scale-[0.99] drop-shadow-md">
            Explorer
            <FiArrowUpRight className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div className="px-8 md:px-[72px] flex flex-col md:flex-row w-full items-center justify-between text-secondary mt-24 ">
        <div className="flex flex-col mr-0 md:mr-9">
          <h1 className="largeTitle  font-Montserrat font-semibold max-w-[22rem] ">
            POIGNS D'ACIER, ESPRITS FORTS
          </h1>
          <p className="font-poppins rActionText mt-3 max-w-[32rem]">
            Offrir des programmes d'entraînement de qualité en boxe, encadrés
            par des professionnels qualifiés, pour aider les jeunes à développer
            leurs compétences athlétiques et leur confiance en eux.
          </p>
          <button className="mt-9 bg-primary w-52 text-tertiary  font-poppins font-bold   rounded-full flex items-center justify-center gap-3 px-5 py-2  hover:scale-[1.03] active:scale-[0.99] drop-shadow-md">
            Explorer
            <FiArrowUpRight className="w-8 h-8" />
          </button>
        </div>
        <div>
          <CldImage
            className=" my-24 rounded-lg md:rounded-[44px]"
            src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1712511753/Young_trains_njpwe0.jpg"
            width="534"
            height="530"
            alt="Training Sessions"
          />
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Academy;
