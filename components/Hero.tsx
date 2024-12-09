"use client";

import React from "react";
import { useTheme } from "next-themes";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const Spotlight = dynamic(() => import('./ui/Spotlight'), { ssr: false });
const ModeToggle = dynamic(() => import('../components/ModeToggle'), { ssr: false });
const LanguageSwitcher = dynamic(() => import('../components/LanguageSwitcher'), { ssr: false });

const Hero = () => {
  const { theme } = useTheme();
  const t = useTranslations('Hero');

  const spotlightColor1 = theme === "dark" ? "white" : "black";
  const spotlightColor2 = theme === "dark" ? "#8B5CF6" : "#6B7280"; // Morado oscuro o gris
  const spotlightColor3 = theme === "dark" ? "#3B82F6" : "#10B981"; // Azul o verde

  return (
    <div className="pb-20 pt-20 relative">
      <div className="absolute top-5 right-5 z-20 flex space-x-4">
        <LanguageSwitcher />
        <ModeToggle />
      </div>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill={spotlightColor1}
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill={spotlightColor2}
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill={spotlightColor3}
        />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] 
      bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
        dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 
            text-black-100 max-w-80">
            {t('title')}
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={t('phrase')} // Traducción del título
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {t('description')}
          </p>
          <a href="#about">
            <MagicButton
              title={t('buttonText')} // Traducción del texto del botón
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
