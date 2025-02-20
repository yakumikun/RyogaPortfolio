import React from "react";
import Image from "next/image";

export default function Splash() {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center">
            <p className="absolute z-20 text-white font-extrabold text-3xl top-[40%] animate-appear xl:text-6xl">
              RYOGA&apos;S
              <br />
              PORTFOLIO
            </p>
          </div>
          <div className="absolute w-[281px] h-[227px] top-[36%] left-[13%] xl:w-[580px] xl:h-[561px] xl:top-[25%] xl:left-[32%]">
            <Image
              src="/favorites/laptop.svg"
              alt=""
              sizes="(max-width:640px) 281px,(max-width:1200px) 623px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-zoomIn"
            />
          </div>
          <div className="absolute w-[50px] h-[50px] top-[40%] left-2 xl:w-[100px] xl:h-[100px] xl:top-[35%] xl:left-[68%]">
            <Image
              src="/favorites/basketball.svg"
              alt=""
              sizes="(max-width:640px) 50px,(max-width:1200px) 100px"
              fill
              style={{ objectFit: "contain" }}
              className="z-10 animate-scaleLeft xl:animate-scaleRight"
            />
          </div>
          <div className="absolute w-[100px] h-[100px] left-2 top-[23%] xl:w-[233px] xl:h-[208px] xl:top-[28%] xl:left-[5%]">
            <Image
              src="/favorites/basketballRim.svg"
              alt=""
              sizes="(max-width:640px) 100px,(max-width:1200px) 233px"
              fill
              style={{ objectFit: "contain" }}
              className="z-10 animate-scaleLeft"
            />
          </div>
          <div className="absolute w-[40px] h-[100px] top-[5%] right-[16%] xl:w-[144px] xl:h-[198px] xl:right-[5%]">
            <Image
              src="/favorites/beer.svg"
              alt=""
              sizes="(max-width:640px) 40px,(max-width:1200px) 144px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleTop"
            />
          </div>
          <div className="absolute w-[120px] h-[100px] left-2 top-[8%] xl:w-[280px] xl:h-[286px] xl:top-0 xl:left-[17%]">
            <Image
              src="/favorites/camera.svg"
              alt=""
              sizes="(max-width:640px) 120px,(max-width:1200px) 280px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleTop"
            />
          </div>
          <div className="absolute w-[130px] h-[100px] left-4 bottom-[10%] xl:w-[267px] xl:h-[164px] xl:left-[80%] xl:bottom-[5%]">
            <Image
              src="/favorites/car.svg"
              alt=""
              sizes="(max-width:640px) 130px,(max-width:1200px) 267px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleBottom"
            />
          </div>
          <div className="absolute w-[120px] h-[100px] left-4 bottom-[22%] xl:w-[306px] xl:h-[261px] xl:bottom-[18%] xl:left-[12%]">
            <Image
              src="/favorites/clinker.svg"
              alt=""
              sizes="(max-width:640px) 120px,(max-width:1200px) 306px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleBottom"
            />
          </div>
          <div className="absolute w-[140px] h-[140px] right-0 bottom-[20%] xl:w-[227px] xl:h-[368px] xl:right-[15%]">
            <Image
              src="/favorites/clothes.svg"
              alt=""
              sizes="(max-width:640px) 140px,(max-width:1200px) 227px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleBottom"
            />
          </div>
          <div className="absolute w-[120px] h-[100px] top-[23%] left-[35%] xl:w-[200px] xl:h-[118px] xl:top-[17%] xl:left-[41%]">
            <Image
              src="/favorites/hamburger.svg"
              alt=""
              sizes="(max-width:640px) 120px,(max-width:1200px) 200px"
              fill
              style={{ objectFit: "contain" }}
              className="z-10 animate-top"
            />
          </div>
          <div className="absolute w-[60px] h-[100px] left-[44%] bottom-[25%] xl:w-[127px] xl:h-[147px] xl:bottom-0 xl:left-[37%]">
            <Image
              src="/favorites/helmet.svg"
              alt=""
              sizes="(max-width:640px)60px,(max-width:1200px) 127px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleBottom"
            />
          </div>
          <div className="absolute w-[100px] h-[100px] top-[15%] right-4 xl:w-[226px] xl:h-[251px] xl:top-[4%] xl:right-[20%]">
            <Image
              src="/favorites/motorcycle.svg"
              alt=""
              sizes="(max-width:640px) 100px,(max-width:1200px) 226px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleTop"
            />
          </div>
          <div className="absolute w-[130px] h-[100px] top-[10%] left-[35%] xl:w-[246px] xl:h-[160px] xl:top-[0%] xl:left-[40%]">
            <Image
              src="/favorites/ps4.svg"
              alt=""
              sizes="(max-width:640px) 130px,(max-width:1200px) 246px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleTop"
            />
          </div>
          <div className="absolute w-[50px] h-[100px] top-[45%] right-2 xl:w-[93px] xl:h-[132px] xl:top-[3%] xl:right-[35%]">
            <Image
              src="/favorites/ramune.svg"
              alt=""
              sizes="(max-width:640px) 50px,(max-width:1200px) 93px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleRight"
            />
          </div>
          <div className="absolute w-[80px] h-[100px] top-[25%] right-[12%] xl:w-[180px] xl:h-[124px] xl:top-[35%] xl:right-[5%]">
            <Image
              src="/favorites/record.svg"
              alt=""
              sizes="(max-width:640px) 80px,(max-width:1200px) 180px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleTop"
            />
          </div>
          <div className="absolute w-[150px] h-[100px] right-[20%] bottom-[8%] xl:w-[366px] xl:h-[185px] xl:right-[23%] xl:bottom-0">
            <Image
              src="/favorites/snowboard.svg"
              alt=""
              sizes="(max-width:640px) 150px,(max-width:1200px) 366px"
              fill
              style={{ objectFit: "contain" }}
              className="-z-10 animate-scaleBottom"
            />
          </div>
          <div className="absolute w-[120px] h-[100px] left-[37%] bottom-[16%] xl:w-[305px] xl:h-[165px] xl:bottom-0 xl:left-[10%]">
            <Image
              src="/favorites/takoyaki.svg"
              alt=""
              sizes="(max-width:640px) 120px,(max-width:1200px) 305px"
              fill
              style={{ objectFit: "contain" }}
              className="animate-scaleBottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
