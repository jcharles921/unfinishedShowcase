"use client";
import React from "react";
import Link from "next/link";
import Button from "../buttons/Buttons";
import { SupportUs } from "../../utils/Icons";
import { Logo } from "../../../public/svg";
import { FaLinkedinIn, FaYoutube, FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter()
  const handleLogin = () => {
    router.push("/login");
  }
  return (
    <div className="flex flex-col mt-20 py-6 w-full items-center justify-center text-secondary">
      <p className="font-poppins rContactText  text-center mb-4 tracking-[2.8px]">
        AYEZ ÉGALEMENT UN IMPACT SUR LA SOCIÉTÉ
      </p>
      <p className="font-Montserrat rContactSlogan text-center font-bold mb-4 ">
        Demandez plus d'informations
      </p>
      <p className="font-poppins rContactSubtitle text-center max-w-[40%] mb-12 ">
        Nous nous engageons à avoir un impact énorme sur l'Afrique et sur le
        monde dans son ensemble. Rejoignez-nous maintenant !
      </p>
      <Button
        submit={true}
        value="Nous soutenir"
        route="/"
        className=" soutiensApropro hover:bg-[#C2B450] active:bg-[#e0d793] drop-shadow-lg"
        icon={<SupportUs className="w-6 h-6" />}
      />
      <hr className="text-gray-300 w-full mt-10" />
      <div className="flex flex-wrap items-center justify-around w-full mt-5">
        <img onClick={handleLogin} className="mb-6 cursor-pointer" src={Logo.src} alt="" />
        <div className="footer_nav flex flex-wrap items-center mb-6 ">
          <Link
            href="/"
            className=" no-underline font-bold ml-3 font-poppins smalltext sliding-hover active:scale-[1.03]"
          >
            A propos
          </Link>
          <Link
            href="/actions"
            className=" no-underline font-bold ml-3 font-poppins smalltext sliding-hover active:scale-[1.03]"
          >
            Nos Action
          </Link>

          <Link
            href="/academy"
            className="font-bold ml-3 font-poppins smalltext sliding-hover active:scale-[1.03]"
          >
            Takam Boxing academy
          </Link>
          <Link
            href="/actualites"
            className="font-bold mx-3 font-poppins smalltext sliding-hover active:scale-[1.03]"
          >
            Nos actualites
          </Link>
        </div>
        <div className="socials flex flex-wrap gap-5 mb-6">
          <div className="border-[2.25px] cursor-pointer border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105">
            <FaLinkedinIn />
          </div>
          <div className="border-[2.25px] cursor-pointer border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105">
            <FaFacebookF />
          </div>
          <div className="border-[2.25px] cursor-pointer border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105">
            <FaInstagram />
          </div>
          <div className="border-[2.25px] cursor-pointer border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105">
            <FaYoutube />
          </div>
        </div>
      </div>
      <p className="flex items-center gap-1 mt-20 rFooter mb-4">
        <FaRegCopyright /> Carlos Takam Foundation, 2024
      </p>
    </div>
  );
};

export default Footer;
