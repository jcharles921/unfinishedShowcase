import React from "react";
import { Stars, RacingFlag, Parcour, Working } from "../../../public/svg";

const TimeLine = () => {
  return (
    <div className="flex justify-center px-8 sm:px-16 md:px-[72px] mt-12 ">
      <div className="  flex flex-col items-end">
        <div className="cadran1 flex h-64 items-center text-secondary font-poppins ">
          <div>
            <h2 className=" breakingTitle w-full max-w-[320px] text-center sm:text-start font-semibold">
              Le Commencement
            </h2>
            <p className="SliderText  text-left w-full max-w-[30.8rem] mt-10">
              Armand Carlos Netsing Takam, né le 6 décembre <b>1980</b> à
              Douala, est un boxeur professionnel franco-camerounais.
            </p>
          </div>
          <div className="checkpoint hidden md:flex items-center relative -right-4 -z-2 mt-10">
            <div className="relative w-[20px] h-[20px] rounded-full overflow-hidden">
              <div
                className="absolute w-full h-full bg-[#C2B450]"
                style={{ clipPath: "inset(0 0 50% 0)" }}
              ></div>
              <div
                className="absolute w-full h-full bg-[#BCA60E]"
                style={{ clipPath: "inset(50% 0 0 0)" }}
              ></div>
            </div>
            <hr className="h-[4px] w-12 bg-primary border-none" />
          </div>
        </div>
        <div className="cadran2 flex h-64 mt-40 items-center text-secondary font-poppins ">
          <img src={Parcour.src} alt="" />
        </div>
        <div className="cadran3 flex h-64 mt-40 items-center  text-secondary font-poppins ">
          <div>
            <h2 className=" mediumTitle font-semibold">Début pro</h2>
            <p className="SliderText  text-left w-full max-w-[30.8rem] mt-10">
              Le <b>10 décembre 2005,</b> il participe à son premier combat
              professionnel et bat Zinidine Benmakhouf aux points. Après 18
              victoires, il enregistre sa première défaite professionnelle le 27
              juin 2009 face à Gregory Tony.
            </p>
          </div>
          <div className="checkpoint hidden md:flex items-center relative -right-4 -z-2 mt-10">
            <div className="relative w-[20px] h-[20px] rounded-full  overflow-hidden">
              <div
                className="absolute w-full h-full bg-[#C2B450]"
                style={{ clipPath: "inset(0 0 50% 0)" }}
              ></div>
              <div
                className="absolute w-full h-full bg-[#BCA60E]"
                style={{ clipPath: "inset(50% 0 0 0)" }}
              ></div>
            </div>
            <hr className="h-[4px] w-12  bg-primary border-none" />
          </div>
        </div>
        <div className="cadran4 w-full justify-center flex h-[400px] mt-40 items-center text-secondary font-poppins ">
          <img className="w-full max-w-[280px]" src={Working.src} alt="" />
        </div>
        <div className="cadran5 flex  h-[440px] mt-40 items-center  text-secondary font-poppins ">
          <div>
            <h2 className=" mediumTitle font-semibold">Le Grand Combat</h2>
            <p className="SliderText text-left w-full max-w-[30.8rem] mt-10">
              Ce qui devait être un grand combat le fût, le{" "}
              <b>28 octobre 2017</b> face à Anthony Joshua, l'arbitre préfère
              arrêter le match au grand désespoir de tout les amoureux du noble
              art. Joshua lui a cependant promis une revanche....to be
              continued.
            </p>
          </div>
          <div className="checkpoint hidden md:flex items-center relative -right-4 -z-2 mt-10">
            <div className="relative w-[20px] h-[20px] rounded-full  overflow-hidden">
              <div
                className="absolute w-full h-full bg-[#C2B450]"
                style={{ clipPath: "inset(0 0 50% 0)" }}
              ></div>
              <div
                className="absolute w-full h-full bg-[#BCA60E]"
                style={{ clipPath: "inset(50% 0 0 0)" }}
              ></div>
            </div>
            <hr className="h-[4px] w-12  bg-primary border-none" />
          </div>
        </div>
      </div>
      <div className="w-[30px] flex flex-col items-center">
        <div className="relative w-5 h-5 rounded-full overflow-hidden">
          <div
            className="absolute w-full h-full bg-[#C2B450]"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          ></div>
          <div
            className="absolute w-full h-full bg-[#BCA60E]"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          ></div>
        </div>
        <hr className="h-[140rem] w-1 border-[2px] border-primary" />
        <div className="relative w-5 h-5 rounded-full overflow-hidden">
          <div
            className="absolute w-full h-full bg-[#C2B450]"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          ></div>
          <div
            className="absolute w-full h-full bg-[#BCA60E]"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          ></div>
        </div>
      </div>
      <div className="  flex flex-col items-start">
        <div className="cadran1 w-full h-64 flex items-center justify-center">
          <img
            className="w-full max-w-64"
            src={RacingFlag.src}
            alt="Race Start"
          />
        </div>
        <div className="cadran2 flex h-64 mt-40 items-center  text-secondary font-poppins ">
          <div className="checkpoint hidden md:flex items-center relative -left-4 -z-2 mt-10">
            <hr className="h-[4px] w-12  bg-primary border-none" />
            <div className="relative w-[20px] h-[20px] rounded-full mr-4 overflow-hidden">
              <div
                className="absolute w-full h-full bg-[#C2B450]"
                style={{ clipPath: "inset(0 0 50% 0)" }}
              ></div>
              <div
                className="absolute w-full h-full bg-[#BCA60E]"
                style={{ clipPath: "inset(50% 0 0 0)" }}
              ></div>
            </div>
          </div>
          <div>
            <h2 className=" mediumTitle font-semibold">Parcours Amateur</h2>
            <p className="SliderText text-left w-full max-w-[30.8rem] mt-10">
              Carlos Takam a remporté les championnats d'Afrique de boxe amateur
              en <b>2003</b> dans la catégorie des +91 kg et une médaille de
              bronze aux Jeux africains.
            </p>
          </div>
        </div>
        <div className="cadran3 w-full justify-center flex h-64 mt-40 items-center text-secondary font-poppins ">
          <img src={Stars.src} alt="" />
        </div>
        <div className="cadran4 flex  mt-40 items-center  text-secondary font-poppins ">
          <div className="checkpoint hidden md:flex items-center relative -left-4 -z-2 mt-10">
            <hr className="h-[4px] w-12  bg-primary border-none" />
            <div className="relative w-[20px] h-[20px] rounded-full mr-4 overflow-hidden">
              <div
                className="absolute w-full h-full bg-[#C2B450]"
                style={{ clipPath: "inset(0 0 50% 0)" }}
              ></div>
              <div
                className="absolute w-full h-full bg-[#BCA60E]"
                style={{ clipPath: "inset(50% 0 0 0)" }}
              ></div>
            </div>
          </div>
          <div>
            <h2 className=" mediumTitle font-semibold">La soif de vaincre</h2>
            <p className="SliderText  text-left w-full max-w-[30.8rem] mt-10">
              Le <b>18 janvier 2014,</b> il combat au Canada contre Mike Perez
              et fait match nul après 10 rounds. Le 6 juin suivant, il s'empare
              de la ceinture WBC Silver contre Tony Thompson, ceinture qu'il
              perd le <b>24 octobre 2014</b> par KO au 10e round contre
              Alexander Povetkin.Après 3 victoires consécutives, il est battu le{" "}
              <b>21 mai 2016</b> par le néo-zélandais Joseph Parker, invaincu en
              18 combats, par décision unanime des juges.{" "}
              <b>Le 29 janvier 2017</b> à Macao, il bat Marcin Rekowski par KO
              au 4e round, pour le titre Inter-Continental IBF.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
