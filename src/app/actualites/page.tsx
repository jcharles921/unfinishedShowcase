"use client";
import React, { useState, useEffect } from "react";
import { Footer, ContactUs } from "../../components";
import HeroBanner from "../../containers/actualites/HeroBanner";
import { CldImage } from "next-cloudinary";
import { blogAuthor } from "public/svg";
import Link from "next/link";
import { blogs } from "../../utils/mockData";
import BlogPostCRUD from "../../components/post/BlogPostCRUD";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import Cookies from "js-cookie";

const Actualites = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);
  return (
    <div>
      <HeroBanner />
      <div className="w-full flex justify-center md:justify-start px-8 md:px-[72px]">
        <p className="font-Montserrat font-semibold text-[23px] leading-[111%] mt-8 sm:mt-14 md:mt-20">
          Recent blogs
        </p>
      </div>
      <section className="w-full px-8 md:px-[72px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[80px] md:gap-y-[80px] my-20 md:my-20">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="card max-w-[400px] relative flex flex-col"
          >
            <Link className=" md:min-h-[264px] relative" href={blog.link}>
              <CldImage
                className="w-full object-cover rounded-lg"
                src={blog.imageUrl}
                width={400}
                height={300}
                alt="Card image"
              />
            </Link>
            <div className="cardPreview">
              <Link href={blog.link}>
                <h1 className="font-Montserrat text-secondary font-semibold text-xl mt-6">
                  {blog.title}
                </h1>
              </Link>
              <BlogDescription description={blog.description} />
            </div>
            <div className="cardFooter flex justify-start gap-3 mt-4 items-center">
              <img className="max-h-8" src={blogAuthor.src} alt="" />
              <p className="font-bold articleText">{blog.author.name}</p>
              <p className="articleText">{blog.author.date}</p>
            </div>
          </div>
        ))}
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
};

const BlogDescription = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p
        className={`font-Montserrat leading-[111%] articleText mt-2 ${isExpanded ? "" : "line-clamp-3"}`}
      >
        {description}
      </p>
      {description.split(" ").length > 20 && (
        <button onClick={toggleReadMore} className="text-blue-500 articleText">
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default Actualites;
