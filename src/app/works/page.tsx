import React from "react";
import Image from "next/image";
import Link from "next/link";
import ModalButton from "../components/ModalButton";
import { WorksContents } from "../components/WorksContents"; // データをインポート

export default function Works() {
  return (
    <div>
      <div className="pt-20">
        <h1 className="text-center font-bold text-2xl">WORKS</h1>
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
        <div>
          {WorksContents.map((work) => (
            <div key={work.id} className="flex flex-col items-center">
              <div className="relative w-[300px] h-[168px] xl:w-[917px] xl:h-[515px]">
                <Image
                  src={work.image}
                  alt={work.name}
                  sizes="(max-width:640px) 300px,(max-width:1200px) 917px"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="xl:text-xl">
                <h2 className="font-bold">
                  {work.title}
                  <br />「{work.name}」
                </h2>
              </div>
              <ModalButton content={work.description} domain={work.url ?? ""} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
