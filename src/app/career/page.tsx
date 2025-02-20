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
                        <p className="text-right pr-4">HOME</p>
                    </Link>
                    <div className="flex justify-center">
                        <div className="flex items-center border-r-4 border-black text-xl tabular-nums pt-24 pl-4">
                            <h2>2003</h2>
                            <div className="relative bg-white border-solid border-4 rounded-full border-black w-5 h-5 left-3" />
                        </div>
                        <ScrollRevealContainer move="right">
                        <div className="flex items-center pt-24">
                            <div className="w-[25px] h-[19px] border-y-[10px] border-r-[15px] border-transparent border-r-black" />
                            <div className="flex items-center border-solid border-4 rounded-lg border-black w-64 h-24">
                                <div className="border-solid border-2 rounded-full border-black w-16 h-16 ml-2">
                                    <Image src="/careerIcons/child.svg" alt="" width={60} height={60} />
                                </div>
                                <div className="w-[160px] ml-2">
                                    <h2 className="text-sm font-bold">幼少期</h2>
                                    <p className="text-[10px]">東京で生まれる。運動が好きで、幼少期は主に野球をしていた。この頃からパソコンでゲームなどをしていた。</p>
                                </div>
                            </div>
                        </div>
                        </ScrollRevealContainer>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-center border-r-4 border-black text-xl tabular-nums pt-24 pl-4">
                            <h2>2016</h2>
                            <div className="relative bg-white border-solid border-4 rounded-full border-black w-5 h-5 left-3" />
                        </div>
                        <ScrollRevealContainer move="right">
                        <div className="flex items-center pt-24">
                            <div className="w-[25px] h-[19px] border-y-[10px] border-r-[15px] border-transparent border-r-black" />
                            <div className="flex items-center border-solid border-4 rounded-lg border-black w-64 h-24">
                                <div className="border-solid border-2 rounded-full border-black w-16 h-16 ml-2">
                                    <Image src="/careerIcons/junior.svg" alt="" width={60} height={60} />
                                </div>
                                <div className="w-[160px] ml-2">
                                    <h2 className="text-sm font-bold">中学時代</h2>
                                    <p className="text-[10px]">バスケットボール部に所属し、キャプテンを務める。体育のシャトルランで140回を記録し、先生に誘われ東京駅伝に足立区代表として出場。</p>
                                </div>
                            </div>
                        </div>
                        </ScrollRevealContainer>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-center border-r-4 border-black text-xl tabular-nums pt-24 pl-4">
                            <h2>2019</h2>
                            <div className="relative bg-white border-solid border-4 rounded-full border-black w-5 h-5 left-3" />
                        </div>
                        <ScrollRevealContainer move="right">
                        <div className="flex items-center pt-24">
                            <div className="w-[25px] h-[19px] border-y-[10px] border-r-[15px] border-transparent border-r-black" />
                            <div className="flex items-center border-solid border-4 rounded-lg border-black w-64 h-24">
                                <div className="border-solid border-2 rounded-full border-black w-16 h-16 ml-2">
                                    <Image src="/careerIcons/highSchool.svg" alt="" width={60} height={60} />
                                </div>
                                <div className="w-[160px] ml-2">
                                    <h2 className="text-sm font-bold">高校時代</h2>
                                    <p className="text-[10px]">高校でもバスケットボール部のキャプテンを務め、部員数は50人程。仲間やコーチに助けてもらいながらチームをまとめる。</p>
                                </div>
                            </div>
                        </div>
                        </ScrollRevealContainer>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-center border-r-4 border-black text-xl tabular-nums pt-24 pl-4 pb-24">
                            <h2>2022</h2>
                            <div className="relative bg-white border-solid border-4 rounded-full border-black w-5 h-5 left-3" />
                        </div>
                        <ScrollRevealContainer move="right">
                        <div className="flex items-center pt-24 pb-24">
                            <div className="w-[25px] h-[19px] border-y-[10px] border-r-[15px] border-transparent border-r-black" />
                            <div className="flex items-center border-solid border-4 rounded-lg border-black w-64 h-24">
                                <div className="border-solid border-2 rounded-full border-black w-16 h-16 ml-2">
                                    <Image src="/careerIcons/collage.svg" alt="" width={60} height={60} />
                                </div>
                                <div className="w-[160px] ml-2">
                                    <h2 className="text-sm font-bold">大学1〜2年生</h2>
                                    <p className="text-[10px]">建設現場でのバイトをしながら建築について学ぶも、身近にいる大切な人から海の向こうにいる人まで、より多くの人の生活を便利にできるITという分野に興味を持つ。</p>
                                </div>
                            </div>
                        </div>
                        </ScrollRevealContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}