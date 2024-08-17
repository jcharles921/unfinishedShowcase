"use client";
import React from "react";
import { Footer, ContactUs } from "../../../components";
import { Comment, LikeComment } from "../../../containers/actualites/";
import { CldImage } from "next-cloudinary";
import { blogAuthor } from "../../../../public/svg";

const BlogPage = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[650] flex items-center justify-center mt-9  ">
          <CldImage
            className=" rounded-md"
            src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1717329944/Training_boxes_1_zmefyh.jpg"
            width={650}
            height={433}
            alt="Blog Image"
          />
        </div>
        <h2 className=" font-Montserrat rContactUsTitle font-bold text-secondary self-start px-4 sm:px-8 md:px-[72px] mt-10  ">
          TAKAM BOXING ACADEMY
        </h2>
      </div>
      <section className="px-4 sm:px-8 md:px-[72px] mt-12">
        <p className="vignetteText">
          La Carlos Takam Foundation s'apprête à marquer un tournant dans le
          domaine de l'éducation et du sport en Afrique avec l'ouverture de la
          Takam Boxing Academy en 2025. Cette académie, soutenue par des fonds
          de la fondation éponyme, vise à offrir aux jeunes Africains et
          Africaines une formation de haut niveau qui combine excellence
          académique et performance athlétique. L'objectif principal est de
          créer un équilibre entre le sport et le développement personnel,
          garantissant ainsi des opportunités durables pour l'avenir de ces
          jeunes.
        </p>
        <br />
        <p className="vignetteText">
          Sous la supervision de spécialistes renommés, l'académie poursuivra
          plusieurs objectifs clés. Elle encouragera la pratique sportive parmi
          les étudiants à travers des événements organisés dans les écoles et
          les universités, ainsi que des rencontres spécifiques. Le
          développement du leadership sera également une priorité, en explorant
          diverses opportunités de carrière dans les secteurs de la santé et du
          sport, notamment la boxe. De plus, des "journées découverte de la
          boxe" seront organisées pour sensibiliser les jeunes et leurs parents
          aux valeurs de ce sport.
          <br />
          L'académie mettra également en place des programmes de formation pour
          les membres de la Fédération Rwandaise de Boxe, incluant les
          entraîneurs, les arbitres, les secouristes et les physiothérapeutes.
          Enfin, les boxeurs les plus prometteurs bénéficieront d'un suivi
          personnalisé dans le cadre du programme "Sport et études", qui
          assurera un accompagnement à la fois dans leur entraînement sportif et
          leur parcours éducatif
        </p>

        <div className="px-4 sm:px-8 md:px-[72px] mt-12 mb-3 flex items-center w-full justify-center gap-2 ">
          <div className="w-full max-w-[600px]">
            <CldImage
              className=""
              src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1717347341/Boxing_1_gmn8zy.jpg"
              width={600}
              height={408}
              alt="Blog Image"
            />
          </div>
          <div className="flex flex-col gap-2 w-full max-w-[395px]">
            <CldImage
              className=""
              src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1717347879/blog8_oweqk8.jpg"
              width={395}
              height={264}
              alt="Blog Image"
            />
            <CldImage
              className=""
              src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1712511753/Young_trains_njpwe0.jpg"
              width={395}
              height={264}
              alt="Blog Image"
            />
          </div>
        </div>
        <h2 className=" font-Montserrat SliderText font-bold text-secondary self-start my-6 md:my-10 ">
          LES OBJECTIFS DE L'ACADÉMIE
        </h2>
        <p className="vignetteText ">
          Sous la supervision de spécialistes, les principaux objectifs seront :
        </p>
        <ul className=" list-disc vignetteText ">
          <li className="my-2">
            Encourager les jeunes étudiants à s'engager dans la pratique du
            sport en général, par le biais d'événements organisés dans les
            écoles et les universités, ainsi que des rencontres spécifiques.
          </li>
          <li className="my-2">
            Promouvoir le développement du leadership à travers les bienfaits du
            sport, en permettant aux participants d'explorer diverses
            opportunités de carrière dans le secteur de la santé et dans le
            domaine du sport et spécialement de la boxe.
          </li>
          <li className="my-2">
            Organiser des "journées découverte de la boxe" pour les jeunes,
            visant à sensibiliser les jeunes et les parents aux valeurs de la
            boxe.
          </li>
          <li className="my-2">
            Faciliter la formation des membres de la Fédération Rwandaise de
            Boxe en établissant des programmes de formation pour entraîneurs,
            arbitres, secouristes et physiothérapeutes.
          </li>
          <li className="my-2">
            Encadrer les boxeurs les plus prometteurs dans le cadre de notre
            programme "Sport et études" à l'Académie, à l'issue d'un processus
            de sélection. Il s'agira d'assurer un suivi personnalisé de leurs
            entraînements, des compétitions et de l'éducation de chaque athlète
            sélectionné.
          </li>
        </ul>
        <br />

        <p className="vignetteText">
          En conclusion, l'ouverture prochaine de la Takam Boxing Academy
          représente une initiative ambitieuse et prometteuse pour l'avenir de
          nombreux jeunes Africains. En combinant l'excellence sportive et
          académique, cette académie aspire non seulement à former des athlètes
          de haut niveau mais aussi à forger des leaders de demain. Par des
          programmes complets et diversifiés, allant de la pratique sportive à
          la formation spécialisée pour les membres de la Fédération Rwandaise
          de Boxe, l'académie entend créer un environnement propice au
          développement personnel et professionnel. Ainsi, la Carlos Takam
          Foundation s'engage à offrir de nouvelles perspectives et à bâtir un
          avenir durable pour la jeunesse africaine, tout en faisant rayonner
          les valeurs du sport à travers le continent
        </p>
        <LikeComment />
      </section>
      <Comment />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default BlogPage;
