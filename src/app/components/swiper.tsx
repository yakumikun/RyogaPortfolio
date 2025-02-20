"use client"
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Navigation, EffectCoverflow,Autoplay } from "swiper/modules";

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

const Carousel = () => {
    SwiperCore.use([Pagination, Navigation, EffectCoverflow, Autoplay]);
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={0}
            effect="coverflow"
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: false
            }}
            pagination={{
                clickable: true,
            }}
            navigation
            
            autoplay={{
                delay: 1000,
                disableOnInteraction: false
            }}
            loop={true}
            className=""
        >
            {images.map((src: string, index: number) => {
                return (
                    <SwiperSlide key={`${index}`} className="mt-20 mb-20">
                        <Image 
                            src={src}
                            width={400}
                            height={400}
                            alt=""
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carousel;