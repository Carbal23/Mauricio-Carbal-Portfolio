import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useTranslations } from "next-intl";
import { aboutItems } from "@/data";

const About = () => {
  const t = useTranslations("AboutItems");

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {aboutItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
