"use client";

import { cn } from "@/lib/Utils";
import { BackgroundGradientAnimation } from "./GradiantBg";
import { GlobeDemo } from "./GridGlobe";
import { technologies1, technologies2 } from "@/data";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  titleClassName,
  img,
  imgClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: string;
  titleClassName?: string;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("AboutItems");

  const handleCopy = () => {
    if (!navigator.clipboard) {
      console.error("Clipboard API no soportada en este navegador");
      setCopied(false);
      return;
    }

    navigator.clipboard
      .writeText("mcarbal23@gmail.com")
      .then(() => {
        setCopied(true);
        console.log("copiando")
        setTimeout(() => {
          setCopied(false);
        }, 10000);
      })
      .catch((error) => {
        console.error("Error al copiar al portapapeles: ", error);
        setCopied(false);
      });
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-black/[0.1] dark:border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "dark:rgb(2,0,36)",
      }}
    >
      <div className={`${id === "6" && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === "5" && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full"
              )}
            />
          )}
        </div>
        {id === "6" && <BackgroundGradientAnimation />}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight dark:text-neutral-300 text-sm md:text-xs lg:text-xs z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg dark:text-neutral-200 lg:text-2xl max-w-96 z-20 ">
            {title}
          </div>
          {id === "2" && <GlobeDemo />}
          {id === "3" && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2 dark:hover:bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3 justify-center">
                {technologies1.map((item) => (
                  <span
                    key={item.id}
                    className="lg:py-2 lg:px-3 py-2 px-1 text-xs md:py-2 md:px-2 lg:text-base opacity-50 
                    lg:opacity-50 rounded-lg text-center bg-violet-500 dark:bg-[#10132E]"
                  >
                    {item.title}
                  </span>
                ))}
                <span className="lg:py-2 lg:px-3 py-4 px-3  rounded-lg text-center bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500 dark:bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3 ">
                <span className="lg:py-2 lg:px-3 py-4 px-3  rounded-lg text-center bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500 dark:bg-[#10132E]"></span>
                {technologies2.map((item) => (
                  <span
                    key={item.id}
                    className="lg:py-2 lg:px-3 py-2 px-1 text-xs md:py-2 md:px-2 lg:text-base opacity-50 
                    lg:opacity-50 rounded-lg text-center bg-violet-500 dark:bg-[#10132E]"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === "6" && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                />
              </div>
              <MagicButton
                title={copied ? t("emailCopied"): t("copyEmail")}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[151a31"
                handleClick={handleCopy}
                disable={copied}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
