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
        <div className="w-full max-w-[850] flex items-center justify-center mt-9 rounded-md  ">
          <CldImage
            className=" rounded-md"
            src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1717361842/Carlos_y9dtdp.jpg"
            width={600}
            height={533}
            alt="Blog Image"
          />
        </div>
        <h2 className=" font-Montserrat SliderText  font-bold text-secondary self-start px-4 sm:px-8 md:px-[72px] mt-10  ">
          CARLOS TAKAM, SYMBOLE DE PERSÉVÉRANCE
        </h2>
      </div>
      <section className="px-4 sm:px-8 md:px-[72px] mt-6">
        <p className="vignetteText">
          Carlos Takam incarne la persévérance et la détermination. Là où
          d'autres abandonnent, lui persévère inlassablement, incarnant la rage
          de vaincre qui caractérise les plus grands champions. Né au Cameroun,
          Carlos Takam s'est distingué dès 2003, un an seulement après ses
          débuts en boxe, en remportant le championnat de boxe amateur dans la
          catégorie des plus de 90 kg à Yaoundé, puis le Championnat d’Afrique
          d’Abuja la même année. En 2004, il représente son pays aux Jeux
          Olympiques d'Athènes, marquant le début de sa conquête des rings
          européens et américains, notamment à Bruxelles, Paris, et Las Vegas.
        </p>
        <br />
        <h2 className=" font-Montserrat SliderText  font-bold text-secondary self-start  my-10  ">
          Bilan et Palmarès
        </h2>

        <p className="vignetteText">
          Le 10 décembre 2005, Takam entame sa carrière professionnelle en
          battant Zinidine Benmakhouf aux points. Après 18 victoires
          consécutives, il subit sa première défaite le 27 juin 2009 contre
          Gregory Tony. Malgré cette défaite, il remporte plusieurs titres
          prestigieux au fil des ans : Le 29 avril 2011, il devient champion
          d'Afrique WBO des poids lourds en battant Gbenga Oloukun. Le 24 mai
          2013, il défend victorieusement la ceinture WBF internationale contre
          Michael Grant par KO technique au 8e round. Le 6 juin 2014, il
          s'empare de la ceinture WBC Silver contre Tony Thompson. Malgré des
          revers face à Alexander Povetkin et Joseph Parker, Takam continue à se
          battre avec détermination. Il obtient une victoire notable contre
          Marcin Rekowski le 29 janvier 2017 pour le titre Inter-Continental
          IBF. En octobre 2017, Takam affronte Anthony Joshua et, bien que
          l'arbitre arrête le combat au 10e round, sa performance est saluée.
          Plus récemment, en mars 2023, Takam remporte une victoire aux points
          contre Tony Yoka.
        </p>
        <br />

        <p className="vignetteText">
          À ce jour, Carlos Takam totalise 50 combats avec 40 victoires, dont 28
          par KO, 8 défaites et 1 match nul. Il détient plusieurs titres
          prestigieux, dont : Champion du monde WBC Silver Champion du monde WBF
          Champion intercontinental WBF Champion international WBO Afrique
          Actuel détenteur du titre intercontinental IBF
        </p>
        {/* <div className="px-4 sm:px-8 md:px-[72px] mt-12 mb-3 flex items-center w-full justify-center gap-2 ">
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
        </div> */}
        <div className="flex items-center w-full justify-center my-12">
          {" "}
          <div className="w-full flex justify-center ">
            <iframe
              className="w-full max-w-[1000px] h-[520px] rounded-lg"
              src="https://www.youtube.com/embed/o1j323CbgAE?autoplay=0"
              title="Carlos Takam"
              allowFullScreen
              allow="autoplay"
            ></iframe>
          </div>
        </div>
        <h2 className=" font-Montserrat SliderText  font-bold text-secondary self-start  my-6  ">
          La Fondation Carlos Takam
        </h2>
        <br />
        <p className="vignetteText">
          La Fondation Carlos Takam (CTF) vise à promouvoir la boxe en Afrique
          et à faire briller le continent sur la scène mondiale. Takam s'engage
          également dans des initiatives éducatives, telles que la rénovation de
          son ancienne école à Douala, la distribution de fournitures scolaires,
          et le soutien aux clubs de boxe locaux.
        </p>
        <br />
        <h2 className=" font-Montserrat SliderText  font-bold text-secondary self-start  my-6  ">
          Boxing for Peace et Africa Boxing Rumble
        </h2>
        <br />
        <p className="vignetteText">
          La Fondation Carlos Takam (CTF) vise à promouvoir la boxe en Afrique
          et à faire briller le continent sur la scène mondiale. Takam s'engage
          également dans des initiatives éducatives, telles que la rénovation de
          son ancienne école à Douala, la distribution de fournitures scolaires,
          et le soutien aux clubs de boxe locaux.
        </p>
        <br />
        <h2 className=" font-Montserrat SliderText  font-bold text-secondary self-start  my-6  ">
          Conclusion
        </h2>
        <p className="vignetteText">
          Carlos Takam n'est pas seulement un boxeur accompli, mais aussi un
          champion de la communauté. Sa carrière impressionnante et son
          engagement envers le développement de la boxe en Afrique illustrent sa
          détermination à inspirer et à élever les autres. Son parcours est une
          véritable source de motivation pour les jeunes athlètes du monde
          entier.
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
