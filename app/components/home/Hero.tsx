"use client";

import React from "react";
import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-20 md:pt-36 padding-x">
        <h1 className="hero__title">
          クイズ <br className="hidden md:block" />
          これ何のWiki?
        </h1>
        <p className="hero__subtitle">あなたの知識を試してみませんか？</p>
        <CustomButton
          title="クイズに挑戦"
          containerStyles="bg-teal-500 text-white rounded-full mt-10 ml-12"
          handleClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Hero;
