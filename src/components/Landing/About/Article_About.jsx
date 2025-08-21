import Image from "next/image";
import React, { useRef } from "react";
import { ImageImport } from "../../../utils/ImageImport";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Article_About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const showText = useTransform(scrollYProgress, [0, 0.5], [500, 0]);
  return (
    <article
      ref={targetRef}
      className="w-full h-svh grid place-items-center px-4 sm:px-[70px] mt-12  sm:mt-20 lg:mt-[156px]"
      id="about"
    >
      <section className="w-full flex flex-col lg:flex-row gap-[78px] h-full">
        <figure className="basis-1/2 w-full h-full flex max-lg:justify-center items-center lg:items-start">
          <div
            className="
          h-full flex items-end justify-center
        bg-green-50 rounded-tl-[275px] rounded-tr-[275px]"
          >
            <motion.div style={{ y: showText }}>
              <Image
                src={ImageImport.ImageAbout}
                alt="image about"
                width={543}
                height={437}
                className="w-[304px] h-[243px] lg:w-[543px] lg:h-[437px]"
              />
            </motion.div>
          </div>
        </figure>
        <article className="w-full basis-1/2 h-full flex items-start lg:items-center">
          <section className="w-full h-4/5 flex items-center ">
            <motion.div style={{ x: showText }}>
              <header className="pb-10">
                <h1 className="font-nunito-bold text-2xl md:text-4xl text-black">
                  Start <span className="text-emerald-500">Gardening</span> and
                  Make The World{" "}
                  <span className="text-emerald-500">Greener</span>!
                </h1>
              </header>
              <article>
                <p className="text-base sm:text-lg font-nunito-semibold text-gray-400">
                  Plantopia is an agricultural application that makes it easy
                  for both experienced and novice gardeners to plant. Moreover,
                  Plantopia also assists you in taking care of your plants, such
                  as providing watering reminders, accessing weather information
                  to anticipate extreme weather conditions that may harm your
                  plants, and enabling you to organize your plants effortlessly.
                  Join Plantopia now and start gardening to make the world
                  greener!
                </p>
              </article>
            </motion.div>
          </section>
        </article>
      </section>
    </article>
  );
}
