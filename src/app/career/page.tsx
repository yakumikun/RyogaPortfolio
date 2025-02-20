import React from "react";
import Image from "next/image";
import ScrollRevealContainer from "../components/ScrollRevealContainer";
import Link from "next/link";

export default function Career() {
  return (
    <div>
      <div>
        <div className="w-screen mt-20">
          <h1 className="text-center text-2xl font-bold">CAREER</h1>
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
          <div className="flex justify-center">
            <div className="flex items-center border-r-4 border-black text-xl tabular-nums pt-24 pl-4 xl:border-r-8 xl:text-4xl">
              <h2>2003</h2>
              <div className="relative bg-white border-solid border-4 rounded-full border-black w-5 h-5 left-3 xl:border-8 xl:w-10 xl:h-10 xl:left-6" />
            </div>
            <ScrollRevealContainer move="right">
              <div className="flex items-center pt-24">
                <div className="w-[25px] h-[19px] border-y-[10px] border-r-[15px] border-transparent border-r-black xl:w-[50px] xl:h-[38px] xl:border-y-[20px] xl:border-r-[30px]" />
                <div className="flex items-center border-solid border-4 rounded-lg border-black w-64 h-24 xl:border-8 xl:w-[512px] xl:h-48">
                  <div className="relative border-solid border-2 rounded-full border-black w-16 h-16 ml-2 xl:border-4 xl:w-32 xl:h-32 xl:ml-4">
                    <Image
                      src="/careerIcons/child.svg"
                      alt=""
                      sizes="(max-width-640px) 64px,(max-width-1200px) 128px"
                      fill
                    />
                  </div>
                  <div className="w-[160px] ml-2 xl:w-[320px] xl:ml-4">
                    <h2 className="text-sm font-bold xl:text-xl">幼少期</h2>
                    <p className="text-[10px] xl:text-[20px]">
                      東京で生まれる。運動が好きで、幼少期は主に野球をしていた。この頃からパソコンでゲームなどをしていた。
                    </p>
                  </div>
                </div>
              </div>
            </ScrollRevealContainer>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center border-r-4 border-black text-xl tabular-nums pt-24 pl-4 xl:border-r-8 xl:text-4xl">
              <h2>2016</h2>
              <div className="relative bg-white border-solid border-4 rounded-full border-black w-5 h-5 left-3 xl:border-8 xl:w-10 xl:h-10 xl:left-6" />
            </div>
            <ScrollRevealContainer move="right">
              <div className="flex items-center pt-24">
                <div className="w-[25px] h-[19px] border-y-[10px] border-r-[15px] border-transparent border-r-black xl:w-[50px] xl:h-[38px] xl:border-y-[20px] xl:border-r-[30px]" />
                <div className="flex items-center border-solid border-4 rounded-lg border-black w-64 h-24 xl:border-8 xl:w-[512px] xl:h-48">
                  <div className="relative border-solid border-2 rounded-full border-black w-16 h-16 ml-2 xl:border-4 xl:w-32 xl:h-32 xl:ml-4">
                    <Image
                      src="/careerIcons/junior.svg"
                      alt=""
                      sizes="(max-width-640px) 64px,(max-width-1200px) 128px"
                      fill
                    />
                  </div>
                  <div className="w-[160px] ml-2 xl:w-[320px] xl:ml-4">
                    <h2 className="text-sm font-bold xl:text-xl">中学時代</h2>
                    <p className="text-[10px] xl:text-[20px]">
                      バスケットボール部に所属し、キャプテンを務める。体育のシャトルランで140回を記録し、先生に誘われ東京駅伝に足立区代表として出場。
                    </p>
                  </div>
                </div>
              </div>
            </ScrollRevealContainer>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center border-r-4 border-black text-xl tabular-nums pt-24 pl-4 xl:border-r-8 xl:text-4xl">
              <h2>2019</h2>
              <div className="relative bg-white border-solid border-4 rounded-full border-black w-5 h-5 left-3 xl:border-8 xl:w-10 xl:h-10 xl:left-6" />
            </div>
            <ScrollRevealContainer move="right">
              <div className="flex items-center pt-24">
                <div className="w-[25px] h-[19px] border-y-[10px] border-r-[15px] border-transparent border-r-black xl:w-[50px] xl:h-[38px] xl:border-y-[20px] xl:border-r-[30px]" />
                <div className="flex items-center border-solid border-4 rounded-lg border-black w-64 h-24 xl:border-8 xl:w-[512px] xl:h-48">
                  <div className="relative border-solid border-2 rounded-full border-black w-16 h-16 ml-2 xl:border-4 xl:w-32 xl:h-32 xl:ml-4">
                    <Image
                      src="/careerIcons/highSchool.svg"
                      alt=""
                      sizes="(max-width-640px) 64px,(max-width-1200px) 128px"
                      fill
                    />
                  </div>
                  <div className="w-[160px] ml-2 xl:w-[320px] xl:ml-4">
                    <h2 className="text-sm font-bold xl:text-xl">高校時代</h2>
                    <p className="text-[10px] xl:text-[20px]">
                      高校でもバスケットボール部のキャプテンを務め、部員数は50人程。仲間やコーチに助けてもらいながらチームをまとめる。
                    </p>
                  </div>
                </div>
              </div>
            </ScrollRevealContainer>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center border-r-4 border-black text-xl tabular-nums pt-24 pl-4 pb-24 xl:border-r-8 xl:text-4xl">
              <h2>2022</h2>
              <div className="relative bg-white border-solid border-4 rounded-full border-black w-5 h-5 left-3 xl:border-8 xl:w-10 xl:h-10 xl:left-6" />
            </div>
            <ScrollRevealContainer move="right">
              <div className="flex items-center pt-24 pb-24">
                <div className="w-[25px] h-[19px] border-y-[10px] border-r-[15px] border-transparent border-r-black xl:w-[50px] xl:h-[38px] xl:border-y-[20px] xl:border-r-[30px]" />
                <div className="flex items-center border-solid border-4 rounded-lg border-black w-64 h-24 xl:border-8 xl:w-[512px] xl:h-48">
                  <div className="relative border-solid border-2 rounded-full border-black w-16 h-16 ml-2 xl:border-4 xl:w-32 xl:h-32 xl:ml-4">
                    <Image
                      src="/careerIcons/collage.svg"
                      alt=""
                      sizes="(max-width-640px) 64px,(max-width-1200px) 128px"
                      fill
                    />
                  </div>
                  <div className="w-[160px] ml-2 xl:w-[320px] xl:ml-4">
                    <h2 className="text-sm font-bold xl:text-xl">
                      大学1〜2年生
                    </h2>
                    <p className="text-[10px] xl:text-[20px]">
                      建設現場でのバイトをしながら建築について学ぶも、より多くの人の生活を便利にできるITという分野に興味を持つ。
                    </p>
                  </div>
                </div>
              </div>
            </ScrollRevealContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
