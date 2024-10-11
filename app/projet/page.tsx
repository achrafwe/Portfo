"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper as SwiperCore } from 'swiper';  

const projets = [
  {
    num: "01",
    category: "Fullstack",
    title: "Développeur Web",
    description: "Conception et implémentation d'une plateforme qui répond au défi de la digitalisation du circuit médical pour des soins de qualité.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }, { name: "Php" }],
    image: 'Portfo/public/assets/projets/esante.png',
    live: "https://esante.co.ma",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Développeur Web",
    description: "Implémentation d'un site web pour la visibilité d'agence et ses clients.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }, { name: "Php" }],
    image: "Portfo/public/assets/projets/optimumstrategy.jpeg",
    live: "https://optimumstrategis.com",
    github: "",
  },
];

const Projet = () => {
  const [projet, setProject] = useState(projets[0]);

  const handleSlideChange = (swiper: SwiperCore) => {
    const currentIndex = swiper.activeIndex;
    setProject(projets[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-112 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projet.num}
              </div>
              <h2 className="text-[42px] font font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projet.category} projet
              </h2>
              <p className="text-white/60">{projet.description}</p>
              <ul className="flex gap-4">
                {projet.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== projet.stack.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={projet.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Lien du Projet</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projet.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Lien Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projets.map((projet, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-8 bottom-8 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={projet.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "iconsStyles="text-white" 
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projet;
