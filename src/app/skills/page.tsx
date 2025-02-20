import React from "react";
import Carousel from "../components/swiper";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";

const images = [
    "/skillIcons/html-5.svg",
    "/skillIcons/css-3.svg",
    "/skillIcons/tailwindcss.svg",
    "/skillIcons/javascript.svg",
    "/skillIcons/typescript.svg",
    "/skillIcons/react.svg",
    "/skillIcons/nextjs.svg",
    "/skillIcons/nodejs.svg",
    "/skillIcons/threejs.svg",
    "/skillIcons/swiperjs.svg",
    "/skillIcons/postgresql.svg",
    "/skillIcons/prisma.svg",
    "/skillIcons/eslint.svg",
    "/skillIcons/prettier.svg",
    "/skillIcons/stylelint.svg",
    "/skillIcons/github.svg",
    "/skillIcons/vercel.svg",
    "/skillIcons/figma.svg"
];

export default function Skills() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mt-40">
        <h1 className="text-center text-2xl font-bold xl:text-4xl">SKILLS</h1>
        <Link href="/">
          <p className="text-right pr-4">HOME</p>
        </Link>
        <Carousel />
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10 ml-auto mr-auto">
        {images.map((src: string, index: number) => {
          return (
            <Image src={src} alt="" width={100} height={100} />
          );
        })}
      </div>
    </div>
  );
}
