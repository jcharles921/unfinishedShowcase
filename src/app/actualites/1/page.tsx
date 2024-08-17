"use client";
import React from "react";
import { Footer, ContactUs } from "../../../components";
import { Comment, LikeComment } from "../../../containers/actualites/";
import { CldImage } from "next-cloudinary";

const BlogPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[650] flex items-center justify-center mt-9 rounded-md  ">
          <CldImage
            className=" rounded-md"
            src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1716961648/igihe_com_10_durxwq.jpg"
            width={650}
            height={433}
            alt="Blog Image"
          />
        </div>
        <h2 className=" font-Montserrat rContactUsTitle font-bold text-secondary self-start px-4 sm:px-8 md:px-[72px] mt-10  ">
          BOXER POUR LA PAIX
        </h2>
      </div>
      <section className="px-4 sm:px-8 md:px-[72px] mt-12">
        <p className="vignetteText">
          La Fondation Carlos Takam (CTF), en collaboration avec la Fédération
          rwandaise de boxe (RBF), dévoile le prochain événement "Boxing for
          Peaace" en 2024. Cette initiative, fruit de cette première
          collaboration, a noué un partenariat avec Peace and Sport pour
          promouvoir sa mission. Basée à Kigali, au Rwanda, la Fondation Carlos
          Takam organisera un événement de trois jours, mettant en valeur les
          compétences de boxeurs talentueux issus des sept pays de la région
          d'Afrique de l'Est. Cet effort de collaboration vise non seulement à
          célébrer le sport de la boxe, mais aussi à favoriser l'unité et
          l'harmonie au sein de cette communauté
        </p>

        <br />
        <ul className=" list-disc vignetteText ">
          <li className="font-bold my-5">Favoriser la paix :</li>
          <p>
            Exploiter le pouvoir du sport, en particulier de la boxe, pour
            promouvoir la paix et l'unité au sein de la communauté d'Afrique de
            l'Est. En utilisant la boxe comme un moyen de dialogue et de
            compréhension mutuelle, l'événement aspire à réduire les tensions et
            à construire des ponts entre différentes communautés ethniques et
            nationales.
          </p>
          <li className="font-bold my-5"> Mettre en valeur les talents :</li>
          <p>
            Offrir une plateforme aux boxeurs émergents et confirmés pour mettre
            en valeur leurs compétences et concourir au niveau continental. Cela
            permet non seulement de découvrir de nouveaux talents, mais aussi de
            motiver les jeunes sportifs à poursuivre leurs rêves dans le monde
            de la boxe.
          </p>
          <li className="font-bold my-5">Engagement des médias :</li>
          <p>
            Organiser une conférence dynamique pour interagir avec les médias et
            les sensibiliser au message et aux objectifs de l'événement. En
            attirant l'attention des médias locaux et internationaux,
            l'événement vise à maximiser sa portée et à inspirer d'autres
            initiatives similaires dans la région.
          </p>
          <li className="font-bold my-5">
            Exécution d'un premier projet conjoint avec la Fédération rwandaise
            de boxe:
          </li>
          <p>
            Promouvoir le développement de la boxe au Rwanda et forger un lien
            solide avec la Fédération. Ce projet commun sert de modèle de
            coopération entre les organisations pour développer l'infrastructure
            sportive et soutenir les athlètes locaux.
          </p>
          <li className="font-bold my-5">
            Partager la vision de la Fondation à travers un premier projet
            concret :
          </li>
          <p>
            Donner vie à notre engagement de revitaliser la pratique de la boxe
            sur le continent africain en lançant nos activités et en établissant
            un lien significatif avec les différentes parties prenantes. En
            réalisant ce premier projet, la Fondation Carlos Takam démontre son
            dévouement à long terme envers la croissance du sport et la
            promotion des valeurs de paix et d'unité.
          </p>
        </ul>
        <div className="px-4 sm:px-8 md:px-[72px] mt-12 mb-3 flex items-center w-full justify-center gap-2 ">
          <div className="w-full max-w-[600px]">
            <CldImage
              className=""
              src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1716961647/2h6a7820-3-3d31a_kjltzh.jpg"
              width={600}
              height={408}
              alt="Blog Image"
            />
          </div>
          <div className="flex flex-col gap-2 w-full max-w-[395px]">
            <CldImage
              className=""
              src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1716961650/Collab_tpwo3t.jpg"
              width={395}
              height={264}
              alt="Blog Image"
            />
            <CldImage
              className=""
              src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1716961650/Collab_tpwo3t.jpg"
              width={395}
              height={264}
              alt="Blog Image"
            />
          </div>
        </div>
        <h2 className=" font-Montserrat rContactUsTitle font-bold text-secondary self-start  my-14  ">
          AFRICA BOXING RUMBLE
        </h2>
        <p className="vignetteText">
          "Africa Boxing Rumble" est un spectacle sportif exaltant qui se
          déroulera au cœur de Kigali, au Rwanda. L'événement mettra en vedette
          la superstar de la boxe mondialement reconnue Carlos Takam dans un
          affrontement aux proportions épiques. Mais cet événement est plus
          qu'un choc de titans ; c'est une force unificatrice qui rassemble des
          combattants exceptionnels d'Afrique, d'Europe et des États-Unis.
          L'objectif est de mettre en valeur le talent brut, d'enflammer la
          passion et d'inspirer le continent. Africa Boxing Rumble - Allumer la
          passion d'un continent pour la boxe et l'unité.
        </p>
        <div className="flex items-center w-full justify-center my-16">
          {" "}
          <div className="w-full max-w-[600px]">
            <CldImage
              className=""
              src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1712511779/Coach_eytp2u.jpg"
              width={600}
              height={408}
              alt="Blog Image"
            />
          </div>
        </div>
        <p className="vignetteText">
          L'événement sera l'occasion de célébrer non seulement la boxe, mais
          aussi l'unité et la diversité culturelle. Il offrira une plateforme
          aux jeunes boxeurs africains pour se mesurer à des adversaires de haut
          calibre, leur permettant ainsi de gagner en expérience et en
          visibilité. En attirant des spectateurs de diverses régions du monde,
          <br />
          <br />
          l'"Africa Boxing Rumble" espère également booster le tourisme local et
          mettre en lumière le dynamisme et la beauté de Kigali, la capitale
          rwandaise. En somme, l'"Africa Boxing Rumble" promet d'être un
          événement mémorable qui allie sport, culture et inspiration. Il vise à
          allumer la passion d'un continent pour la boxe et à promouvoir l'unité
          à travers les sports de combat. Les fans de boxe du monde entier
          attendent avec impatience cet événement, qui promet de redéfinir les
          normes du spectacle sportif en Afrique.
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
