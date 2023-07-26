"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="pt-36 padding-x z-10">
        <h1 className="hero__title">
          クイズ <br className="hidden md:block" />
          これ何のWiki?
        </h1>
        <p className="hero__subtitle">あなたの知識を試してみませんか？</p>
        <CustomButton
          title="クイズに挑戦"
          containerStyles="bg-teal-500 text-white rounded-full mt-4 sm:mt-10 mx-auto md:ml-12"
          handleClick={() => {}}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/icons8-wiki.svg"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
