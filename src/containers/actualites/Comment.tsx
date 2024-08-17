import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { blogAuthor, blogAuthor2 } from "public/svg";

const Comment = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12">
      <h2 className="font-poppins leading-[161%] leadindTitle ">
        LAISSEZ UN COMMENTAIRE
      </h2>
      <h4 className="font-Montserrat smallText leading-[111%] mt-3">
        COMMENT AVEZ VOUS TROUVÉ LE BLOG ET QU'EN PENSEZ VOUS ?
      </h4>
      <textarea
        className="w-[75%] sm:w-[55%] md:w-[45%] bg-[#f7f7f4] h-[40px] sm:h-[50px] md:h-[80px] resize-none mt-12 md:mt-24  border-b-2 border-gray-300 focus:outline-none placeholder:relative placeholder:-mt-8 placeholder:-ml-8 placeholder:font-poppins placeholder:text-[13px] placeholder:text-gray-500 placeholder:leading-[111%] contactUsText "
        placeholder="Taper votre commentaire ..."
      ></textarea>
      <button className="bg-[#f7f7f4] border border-secondary w-24 sm:w-32 md:w-48 text-secondary font-poppins font-bold mt-8  rounded-full flex items-center justify-center  px-2 sm:px-3 md:px-5 py-2  hover:scale-[1.03] active:scale-[0.99]">
        <p className="contactUsText ">Envoyer</p>
        <FiArrowUpRight className=" hidden sm:block w-8 h-8" />
      </button>

      <section className="comments px-4 sm:px-8 font-poppins gap-y-6 max-w-[25rem] mt-16">
        <div className="theComment flex items-center mb-8 ">
          <img
            className="self-start "
            src={blogAuthor2.src}
            alt="commentImage"
          />
          <div className="commentContent articleText ml-5">
            <div className="flex gap-2">
              <h3 className="font-bold">Janne Doe</h3>
              <p className="text-gray-500">12/12/2021</p>
            </div>
            <p className="articleText">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <div className="theComment articleText flex mb-8 ">
          <img className="self-start" src={blogAuthor.src} alt="commentImage" />
          <div className="commentContent ml-5">
            <div className="flex gap-2">
              <h3 className="font-bold">Jacky Doe</h3>
              <p className="text-gray-500">12/12/2021</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
          </div>
        </div>
      </section>
      <section className="bg-[#EBE8E8] w-full px-4 sm:px-8 md:px-[72px] py-28 flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-poppins contactUsText leading-[161%] ">
            ABONNEZ VOUS À NOTRE NEWSLETTER
          </h2>
          <h4 className="font-Montserrat smallText leading-[111%] mt-3">
            Soyez parmi les premiers de nos abonnés à recevoir des mises à jour
            et de nouveaux blogs !
          </h4>
          <input
            className="rounded-lg h-12 pl-5 w-full border-gray-300 placeholder:font-Montserrat placeholder:text-[9px] md:placeholder:text-[13px]  placeholder:text-gray-500 placeholder:leading-[111%] border-b-2 focus:outline-none mt-12"
            placeholder="Taper votre adresse email ..."
            type="text"
            name="inscription"
            id=""
          />
          <button className="bg-[#f7f7f4] border border-secondary w-24 sm:w-32 md:w-48 text-secondary font-poppins font-bold mt-8  rounded-full flex items-center justify-center  px-2 sm:px-3 md:px-5 py-2  hover:scale-[1.03] active:scale-[0.99]">
            <p className="contactUsText ">Envoyer</p>
            <FiArrowUpRight className=" hidden sm:block w-8 h-8" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Comment;
