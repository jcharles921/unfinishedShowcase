import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="w-full bg-gradientYellow relative overflow-hidden flex flex-col items-center px-8 md:px-0   mb-12">
      <div className="contactUs wrapper z-10 w-full  flex flex-col md:flex-row  justify-around items-center py-8 md:py-16">
        <div className=" w-full max-w-[420px] md:max-w-[340px] self-center mb-4 md:mb-8 md:self-start text-white font-Montserrat font-semibold rContactUsTitle">
          CONTACTEZ NOUS
        </div>
        <div className=" w-full max-w-[354px] flex flex-col gap-4 md:gap-8 items-start justify-start ">
          <input
            className="outline-none contactUsText text-[11px] md:text-[16px]  border-b-2 h-12 w-full text-white bg-transparent placeholder:text-white placeholder:text-[11px] md:placeholder:text-[16px]  "
            type="text"
            name=""
            id=""
            placeholder="Noms"
          />
          <input
            className="outline-none contactUsText text-[11px] md:text-[16px] border-b-2 h-12 w-full text-white bg-transparent placeholder:text-[11px] md:placeholder:text-[16px]  placeholder:text-white "
            type="text"
            name=""
            id=""
            placeholder="Organisation"
          />
          <input
            className="outline-none border-b-2 text-[11px] md:text-[16px] h-12 w-full text-white bg-transparent placeholder:text-[11px] md:placeholder:text-[16px]  placeholder:text-white"
            type="text"
            name=""
            id=""
            placeholder="Sujet"
          />
          <textarea
            className=" h-20 border-b-2 w-full text-[11px] md:text-[16px] resize-none text-white outline-none bg-transparent placeholder:text-[11px] md:placeholder:text-[16px]  placeholder:text-white "
            placeholder="Message"
          />

          <button className="bg-white text-[11px] md:text-[16px] w-48 text-secondary font-poppins font-bold mt-8  rounded-full flex items-center justify-center  px-5 py-3 md:py-2  hover:scale-[1.03] active:scale-[0.99]">
            Envoyer
            <FiArrowUpRight className=" hidden md:block w-full ml-3 max-w-8 h-full min-h-4 max-h-8" />
          </button>

          {/* <ButtonL
            textColor="text-secondary"
            submit={true}
            value="Envoyer"
            className="bg-white text-secondary p-2 rounded-full flex items-center justify-center gap-3 px-5 py-3 ease-in-out duration-200 hover:scale-[.99] active:scale-[1.03]"
          /> */}
        </div>
      </div>
      <div className="absolute top-28 -left-[52%] text-[150px] md:text-[295px] text-stroke text-primary text-opacity-30  z-1 font-Montserrat font-bold">
        CONTACTER
      </div>
    </div>
  );
};

export default ContactUs;
