import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { div } from "framer-motion/client";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("FooterSection");

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t("title-1")}{" "}
          <span className="text-violet-600 dark:text-purple">
            {t("title-2")}
          </span>{" "}
          {t("title-3")}
        </h1>
        <p className="text-black-200 dark:text-white-200 md:mt-10 my-5 text-center">
          {t("subtitle")}
        </p>
        <a href="mailto:mcarbal23@gmail.com">
          <MagicButton
            title={t("textButton")}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mauricio Carbal Martinez
        </p>
        <div className="flex items-center justify-between md:gap-6 gap-6 mt-2">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link legacyBehavior href={profile.link || "/"}>
                <a href={profile.link || "/"} target="_blank">
                  <img src={profile.img} alt="icon" width={20} height={20} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
