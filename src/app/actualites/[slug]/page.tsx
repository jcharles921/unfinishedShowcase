"use client";
import React from "react";
import { Footer, ContactUs } from "../../../components";
import {
  HeroBanner,
  Comment,
  LikeComment,
} from "../../../containers/actualites/";
import { CldImage } from "next-cloudinary";

const BlogPage = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  return (
    <div>
      <HeroBanner />
      <section className="px-52 mt-24">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum
          tempora atque! Iure dolor dolore pariatur impedit, a dolorem quia quod
          tempora cumque fuga perferendis. Sed architecto voluptate nobis alias!
          Earum eum at ipsam maiores temporibus expedita aperiam soluta.
          Necessitatibus corrupti veritatis, enim nobis autem sapiente. Fugit
          exercitationem, modi quam blanditiis natus expedita illo, aliquam
          animi necessitatibus amet perspiciatis aspernatur. Voluptatum
          laboriosam deleniti numquam asperiores illo repellendus ea voluptas
          odio ad expedita consequatur fugit veniam natus quasi ut, rerum soluta
          doloribus perspiciatis incidunt magni ratione totam dolores. Nisi, vel
          iste!
        </p>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          voluptatem molestias, quae consequatur quam id in, vero aut est saepe
          blanditiis cupiditate, dolores ullam commodi repudiandae earum.
          Delectus, molestias vero. Velit aliquam mollitia voluptatem eum
          praesentium. Laudantium repudiandae sed nihil, nesciunt veniam
          pariatur temporibus rem quidem cupiditate tempora omnis commodi at,
          fugit numquam officia doloremque natus officiis delectus excepturi
          minus?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum
          tempora atque! Iure dolor dolore pariatur impedit, a dolorem quia quod
          tempora cumque fuga perferendis. Sed architecto voluptate nobis alias!
        </p>
        <CldImage
          className="w-full  object-cover rounded-lg mt-24"
          src="https://res.cloudinary.com/dcgyc8uwa/image/upload/v1713262830/dummyArtilce_pelyfk.png"
          width={800}
          height={600}
          alt="Article Dummy"
        />
        <p className="font-Montserrat font-semibold text-[23px] leading-[111%] mt-24 mb-5 ">
          Subtitle
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eum
          exercitationem provident fuga quis iure beatae voluptates veniam, at
          fugiat nihil velit officia accusantium, quod autem ab omnis. Maiores,
          earum?
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
