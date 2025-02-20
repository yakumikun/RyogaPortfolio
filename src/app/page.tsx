"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Splash from "../app/components/SplashScreen";

//スプラッシュスクリーンの表示を管理
const SplashScreen: React.FC = () => {
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    const splashShown = localStorage.getItem("splashShown");

    if (!splashShown) {
      setSplash(true);
    const timer = setTimeout(() => {
      setSplash(false);
      localStorage.setItem("splashShown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }
  }, []);

  return (
    <div>
      {splash ? (
        <Splash />
      ) : (
        <Home />
      )}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-items-center">
        <h1 className="text-center text-3xl font-bold xl:text-6xl">RYOGA HIGASHIURA</h1>
        <div className="flex items-center">
          <div className="flex flex-col items-center gap-y-4 xl:gap-y-8">
            <Link href="/skills">
              <p className="text-2xl font-bold hover:animate-bounce xl:text-4xl">SKILLS</p>
            </Link>
            <Link href="/works">
              <p className="text-2xl font-bold hover:animate-bounce xl:text-4xl">WORKS</p>
            </Link>
            <Link href="/career">
              <p className="text-2xl font-bold hover:animate-bounce xl:text-4xl">CAREER</p>
            </Link>
          </div>
          <div className="relative w-[200px] h-[241px] xl:w-[400px] xl:h-[482px]">
            <Image
              src="/me.svg"
              alt=""
              sizes="(max-width:640px) 200px,(max-width:1200px) 400px"
              fill
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
