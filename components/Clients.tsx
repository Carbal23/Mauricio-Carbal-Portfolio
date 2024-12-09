import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { useTranslations } from "next-intl";

const Clients = () => {
  const t = useTranslations("ClientsSection")
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        {t("title-1")}
        <span className="text-violet-600 dark:text-purple"> {t("title-2")}</span>
      </h1>
      <div className="flex flex-col items-center max-lg::mt-10 mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
      </div>
    </section>
  );
};

export default Clients;
