"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { France, England, Logo } from "../../../public/svg";
import { SupportUs } from "../../utils/Icons";
import Button from "../buttons/Buttons";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const changeFont = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
  };
  const pathname = usePathname();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClos = () => {
    setAnchorEl(null);
  };
  const handleClose = (route: string) => {
    router.push(route);
    setAnchorEl(null);
  };

  // Render the Navigation component
  return (
    <div className="navigation flex flex-col px-4  sm:px-8  md:px-[72px]  mt-8">
      <div className="languageBox w-full flex justify-end">
        <div className="language p-1 sm:p-2 md:p-3 text-xs bg-[#D9D9D9] h-11 rounded-lg flex justify-center items-center">
          <button className=" text-white  bg-gradientBlue rounded-lg hover:bg-gradient-to-r from-sky-400 to-indigo-700 hover:text-white flex text-[8px] sm:text-[10px] md:text-[13px] items-center px-3 py-[4px] sm:py-[6px] ">
            <img className="w-auto rounded-lg" src={France.src} alt="" />
            <p style={changeFont} className=" hidden sm:block ml-1 sm:ml-2">
              French
            </p>
          </button>
          <button className=" bg-[#D9D9D9] hover:bg-gradient-to-r from-sky-400 to-indigo-700 hover:text-white font-medium  flex  items-center text-[8px] sm:text-[10px] md:text-[13px] ml-1 px-3 sm:px-[7px] py-[4px] sm:py-[6px]  rounded-lg">
            <img
              style={changeFont}
              className="w-auto rounded-lg text-secondary"
              src={England.src}
              alt=""
            />
            <p style={changeFont} className=" hidden sm:block ml-1 sm:ml-2">
              English
            </p>
          </button>
        </div>
      </div>
      <div className="logoWrapper flex justify-between items-center w-full mt-3 pl-0">
        <img
          className="logoImage md:max-h-20 cursor-pointer"
          src={Logo.src}
          alt=""
        />
        <div className="menu w-[60%] sm:w-[45%] border border-gray-400 rounded-full h-10 sm:h-11 md:h-12 hidden md:flex justify-between items-center px-2 sm:px-4 ">
          <Link
            href="/"
            className={` text-gradientBlue font-medium  active:scale-[1.03] ${pathname === "/" ? "NavigationText" : ""}`}
          >
            A propos{" "}
          </Link>
          <hr className=" rotate-[122deg] h-[1px] w-6" />
          <Link
            href="/actions"
            className={` text-gradientBlue font-medium active:scale-[1.03] ${pathname === "/actions" ? "NavigationText" : ""} `}
          >
            Nos Actions{" "}
          </Link>
          <hr className=" rotate-[122deg] h-[1px] w-6" />
          <Link
            href="/academy"
            className={` text-gradientBlue font-medium active:scale-[1.03] ${pathname === "/academy" ? "NavigationText" : ""}  `}
          >
            Takam Boxing Academy{" "}
          </Link>
          <hr className=" rotate-[122deg] h-[1px] w-6" />
          <Link
            href="/actualites"
            className={`text-gradientBlue font-medium active:scale-[1.03] ${pathname && pathname.startsWith("/actualites") ? "NavigationText" : ""}`}
          >
            Nos Actualités
          </Link>
        </div>
        <div className="flex gap-2">
          <Button
            submit={true}
            value="Nous soutenir"
            route="/"
            className=" soutiensApropro hover:bg-[#C2B450] active:bg-[#e0d793] drop-shadow-lg"
            icon={<SupportUs className="max-w-6 max-h-6" />}
          />

          <div className="menu2 block mr-4 md:hidden">
            <IconButton onClick={handleClick} edge="end">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClos}>
              <MenuItem
                onClick={() => {
                  handleClose("/");
                }}
              >
                <Link
                  href="/"
                  className={` ${pathname && pathname === "/" ? "NavigationText" : ""} text-gradientBlue font-medium active:scale-[1.03]`}
                >
                  A propos
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose("/actions");
                }}
              >
                <Link
                  href="/actions"
                  className={` ${pathname === "/actions" ? "NavigationText" : ""} text-gradientBlue font-medium active:scale-[1.03]`}
                >
                  Nos Actions
                </Link>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleClose("/academy");
                }}
              >
                <Link
                  href="/academy"
                  className={` ${pathname === "/academy" ? "NavigationText" : ""} text-gradientBlue font-medium active:scale-[1.03]`}
                >
                  Takam Boxing Academy
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose("/actualites");
                }}
              >
                <Link
                  href="/actualites"
                  className={` ${pathname && pathname.startsWith("/actualites") ? "NavigationText" : ""} text-gradientBlue font-medium active:scale-[1.03]`}
                >
                  Nos Actualités
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
