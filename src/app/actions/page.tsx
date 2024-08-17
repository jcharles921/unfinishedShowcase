"use client";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import ContactUs from "../../components/contactUs";
import { PinkBook, PinkBookLeft } from "public/svg";
import { CldImage } from "next-cloudinary";
import { FiArrowUpRight } from "react-icons/fi";
import Cookies from "js-cookie";

interface Card {
  id: number;
  pages: string;
  background: boolean;
  title: string;
  text: string;
  image: string | null;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Card[];
}

// Hardcoded card data type
interface HardcodedCard {
  hasBackground: boolean;
  title: string;
  subtitle: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
}

const cardData: HardcodedCard[] = [
  {
    hasBackground: true,
    title: "Le rebours",
    subtitle: "ENTREPRENEURSHIP SCHOOL",
    text: "Nous éduquons la jeune génération pour qu'elle devienne les meilleurs entrepreneurs qu'elle aspire à être !",
    imageUrl:
      "https://res.cloudinary.com/dcgyc8uwa/image/upload/v1712154741/KidsCarlos_hb34ax.png",
    imageAlt: "Kids Carlos",
  },
  {
    hasBackground: false,
    title: "ENSEIGNEMENT DE HAUT NIVEAU",
    subtitle: "",
    text: "Nous aidons les enfants à maximiser leur niveau d'éducation",
    imageUrl:
      "https://res.cloudinary.com/dcgyc8uwa/image/upload/v1712154305/CarlosWithKids_1_dbl5ef.png",
    imageAlt: "Carlos in class",
  },
  {
    hasBackground: true,
    title: "ENTRAÎNEMENTS DE BOXE",
    subtitle: "",
    text: "Nous proposons des formations de boxe et proposons une orientation professionnelle à nos stagiaires.",
    imageUrl:
      "https://res.cloudinary.com/dcgyc8uwa/image/upload/v1712469182/EntrainementBox_bfgmtu.png",
    imageAlt: "Kids Carlos",
  },
];

const Actions: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  // const tempToken = Cookies.get("token");
  const tempToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwNjQ1MDc5LCJqdGkiOiJlN2QwMmI1ZTIxNmI0YTM2ODU0YzZhMjJiNGUxYWQxYSIsInVzZXJfaWQiOiI2NzAyMDk5OS03NDJhLTRmYTYtOTI0NC1hZDMyOWIyYjBiNDEifQ.4RBS0LGXkEcuqBzVE6RdUHt5jqlKtSaPECq5XFIGllg";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8001/api/v1/cards/", {
          headers: {
            Authorization: `Bearer ${tempToken}`,
          },
        });
        const data: ApiResponse = await response.json();
        const filteredCards = data.results.filter(
          (card) => card.pages === "Actions"
        );
        setCards(filteredCards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    console.log("Hardcoded cardData:", cardData);
  }, []);

  return (
    <main className="text-secondary">
      <div className="heroAction flex items-center justify-evenly my-10 md:my-32">
        <img className="hidden md:block h-36" src={PinkBook.src} alt="" />
        <h1
          className="font-Montserrat font-bold rActionTitle text-center bg-gradient-to-r"
          style={{
            backgroundImage: "linear-gradient(153deg, #72edf2, #5151e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nos <br /> Actions
        </h1>
        <img className="hidden md:block h-36" src={PinkBookLeft.src} alt="" />
      </div>

      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`w-full flex items-center justify-center px-0 sm:px-8 md:px-[72px] mb-24  ${index !== 0 ? "mt-24" : ""} ${card.background ? "text-white" : "text-secondary"}`}
        >
          <div
            className={`card flex ${card.background ? "bg-primary" : ""} ${card.background && index % 2 === 0 ? "rounded-md md:rounded-e-[121px]" : "flex-col md:flex-row px-10 md:px-16 lg:px-0"} w-[80%] md:w-full items-center justify-center`}
          >
            {index % 2 !== 0 && (
              <div className="">
                <CldImage
                  className=""
                  src={cardData[index].imageUrl || ""}
                  width="532"
                  height="372"
                  alt={card.title || "Image"}
                />
              </div>
            )}
            <div className="flex flex-col justify-center gap-y-3 pl-0 md:pl-10 mt-10 md:mt-0">
              {card.title && <h3 className="mediumTitle font-bold">{card.title}</h3>}
              {cardData[index].subtitle && <h4 className="mediumTitle font-bold">{cardData[index].subtitle}</h4>}
              <p className="rActionText">{card.text}</p>
              {!card.background && (
                <button className="bg-primary w-48 text-tertiary font-poppins font-bold mt-6 rounded-full flex items-center justify-center gap-3 px-5 py-2 hover:scale-[1.03] active:scale-[0.99]">
                  Explorer
                  <FiArrowUpRight className="w-8 h-8" />
                </button>
              )}
            </div>
            {index % 2 === 0 && (
              <div>
                <CldImage
                  className="hidden md:block w-full max-w-[650px] min-h-500"
                  src={cardData[index].imageUrl || ""}
                  width="650"
                  height="650"
                  alt={card.title || "Image"}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      <ContactUs />
      <Footer />
    </main>
  );
};

export default Actions;
