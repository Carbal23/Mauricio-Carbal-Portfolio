import { companies, projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
const PinContainer = dynamic(
  () => import("../components/ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);

const RecentProjects = () => {
  const t = useTranslations("ProjectsSection");
  const u = useTranslations("ProjectsItems");

  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        {t("title-1")}{" "}
        <span className="text-violet-600 dark:text-purple">{t("title-2")}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh]sm:h-[40vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={project.img}
                  alt={u(`${project.id}.title`)}
                  className="z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 rotate-[-10deg] rounded-lg"
                  height="250"
                  width="400"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl  text-base line-clamp-1">
                {u(`${project.id}.title`)}
              </h1>
              <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2">
                {u(`${project.id}.des`)}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, i) => (
                    <div
                      key={icon.name}
                      className="border dark:border-white/[0.2] rounded-full border-black-200/[0.3] bg-violet-800 dark:bg-black-200 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * i * 2}px)`,
                      }}
                    >
                      <img
                        src={icon.img}
                        alt={icon.img}
                        className="p-2"
                        title={icon.name}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col justify-center items-center">
                  {/* <div className="flex justify-start items-center">
                    <p className="flex lg:text-lg md:text-xs text-sm text-neutral-100">
                      Check Repository
                    </p>
                    <img src="/git.svg" alt="git" width={20} height={20} className="ms-3" />
                  </div> */}
                  <div className="flex justify-start items-center mt-2">
                    <p className="flex lg:text-lg md:text-xs text-sm text-violet-800 dark:text-purple">
                      {t("checkSite")}
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
        <div className="pt-20 pb-10">
          <h3 className="heading">
            {t("title-3")}{" "}
            <span className="text-violet-600 dark:text-purple">
              {t("title-4")}{" "}
            </span>
            {t("title-5")}
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-lg:mt-10 bg-violet-500 dark:bg-transparent rounded-md mt-10 w-full">
          {companies.map(({ id, img, name }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-40 w-32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
