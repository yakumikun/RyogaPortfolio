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
  "/skillIcons/figma.svg",
];

export default function Skills() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mt-40">
        <h1 className="text-center text-2xl font-bold xl:text-4xl">SKILLS</h1>
        <Link href="/">
          <div className="absolute top-10 right-4 w-6 h-6 xl:w-12 xl:h-12">
            <Image
              src="/home.svg"
              alt=""
              sizes="(max-width-640px) 24px,(max-width-1200px) 48px"
              fill
            />
          </div>
        </Link>
        <Carousel />
      </div>
    </div>
  );
}
