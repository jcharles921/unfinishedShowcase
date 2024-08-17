"use client";
import React, { useRef } from "react";
import { CldImage } from "next-cloudinary";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "../../utils/Icons";
import Link from "next/link";

const Sliding = () => {
  const sliderRef: any = useRef();
  const slides = [
    {
      imageUrl:
        "https://res.cloudinary.com/dcgyc8uwa/image/upload/v1710966503/Carlos%20Takam/ChampionCarlos.jpg",
      title: `Un Champion Nommé  Takam`,
      description:
        "Carlos Takam, un boxeur camerounais, incarne la persévérance et la détermination. En 2003, il a remporté le championnat de boxe amateur de Yaoundé ainsi que le championnat africain d'Abuja. Malgré une performance décevante aux Jeux olympiques d'Athènes en 2004, Takam nourrit le rêve de poursuivre sa conquête européenne, s'inspirant de figures telles que Sugar Ray Leonard et Mohamed Ali.",
      link: "/champion-takam",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dcgyc8uwa/image/upload/v1710966366/Carlos%20Takam/MeetCarlos.jpg",
      title: "La Rencontre",
      description:
        "Carlos Takam arrive à Paris pour un test de match et rencontre Joseph Germain, un boxeur de renom qui s'entraîne à la Boxe Noisy-le-grand. Takam admire le côté doux de Germain et remporte des combats contre Povetkin et Parker. En octobre 2017, Takam affronte Anthony Joshua, mais le combat est arrêté en raison d'une controverse. Takam remonte sur le ring, acclamé par 70 000 spectateurs.",
      link: "/la-rencontre",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dcgyc8uwa/image/upload/v1710967094/Carlos%20Takam/gndriymmnpxrtftz0khq.png",
      title: "Une hygiène de vie saine",
      description:
        "L'auteur souligne l'importance d'une alimentation équilibrée et de la prévention de la malnutrition en privilégiant les sources d'aliments biologiques. Il s'inspire de son grand-père qui cultivait des légumes sans traitement. Carlos Takam joue de la guitare pour se détendre après la boxe et le rugby, et évite ainsi d'être déstabilisé pendant le Tour de France.",
      link: "/hygiene-vie-saine",
    },
  ];

  return (
    <div className=" md:mt-36 mt-20 flex-col  item-center justify-center px-[72px] overflow-hidden ">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        autoplay={{ delay: 8000 }}
        loop={true}
        slidesPerView={1}
        navigation={true}
        onSwiper={(it) => (sliderRef.current = it)}
        className="flex-row"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex ">
              <CldImage
                src={slide.imageUrl}
                width="606"
                height="353"
                className="w-full max-w-[706px] min-w-[200px]  h-full max-h-[484px] rounded-xl"
                alt={slide.title}
              />
              <div className="w-full  max-w-[800px] -ml-[85%] sm:-ml-[40%] md:-ml-[15%] mt-[50%] sm:mt-[30%] md:mt-[20%] z-10 bg-background px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-8">
                <h3 className="SliderTitle text-secondary font-semibold font-poppins ">
                  {slide.title}
                </h3>
                <p className="SliderText text-secondary mt-7 hidden md:block">
                  {slide.description}
                </p>
                <p className="SliderText text-secondary mt-7 hidden sm:block md:hidden ">
                  {slide.description.substring(
                    0,
                    slide.description.length / 2,
                  ) +
                    (
                      <Link className="cursor-pointer" href="#">
                        ... Read More
                      </Link>
                    )}
                  <span className="sm:block md:hidden mt-2 text-blue-400 text-[12px] underline">
                    {" "}
                    Read More
                  </span>
                </p>
                <p className="SliderText text-secondary mt-7 block sm:hidden">
                  {slide.description.substring(
                    0,
                    slide.description.length / 4,
                  ) + "..."}{" "}
                  <Link
                    href="#"
                    className="block sm:hidden mt-2 text-blue-400 text-[12px] underline"
                  >
                    {" "}
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" hidden md:flex z-30 left-[17%] relative -top-40">
        <ArrowLeft
          className=" top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:scale-[1.01] active:scale-[1.03]"
          onClick={() => sliderRef.current?.slidePrev()}
        />
        <ArrowRight
          className=" right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:scale-[1.01] active:scale-[1.03] "
          onClick={() => sliderRef.current?.slideNext()}
        />
      </div>
    </div>
  );
};

export default Sliding;
