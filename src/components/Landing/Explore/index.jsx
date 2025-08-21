"use client";
import Image from "next/image";
import { ImageImport } from "../../../utils/ImageImport";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Explore() {
  const targetRef = useRef(null);

  // scroll progress section Explore
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // 0 saat section belum masuk, 1 saat sudah keluar
  });

  // animasi: dari atas (-200px) ke posisi normal (0)
  const heading1 = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const heading2 = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const img1 = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const img2 = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  return (
    <div className="my-10" id="features" ref={targetRef}>
      <div className="text-center px-[25px] w-[716px] max-[430px]:w-auto m-auto">
        <p className="font-[700] text-[36px] text-[#030712] font-nunito-bold">
          Explore the{" "}
          <span className="font-[700] text-[36px] text-[#10B981]">
            Plantopia
          </span>{" "}
          App
        </p>
        <p className="font-[600] text-[16px] text-[#9CA3AF] font-nunito-semibold">
          Discover a range of innovative features designed to assist you in
          cultivating plants and contributing to a greener world
        </p>
      </div>
      <div className="lg:flex items-center justify-center m-auto xl:w-[1120px] ">
        <div className="">
          <div className="m-5 p-5 rounded-lg flex lg:w-[400px] xl:w-[550px] max-[430px]:h-auto h-[265px] bg-[#F9FAFB] hover:bg-[#ECFDF5] overflow-hidden">
            <motion.div
              style={{ y: heading1 }}
              className="max-[430px]:z-10 relative w-[303px] font-nunito-bold flex flex-row justify-start items-center"
            >
              <div>
                <p className="font-nunito-bold text-2xl text-black">
                  Planting Instruction
                </p>
                <p className="font-nunito-semibold text-base text-gray-600">
                  You can learn step-by-step planting tailored to the specific
                  plants you want to grow. This ensures each plant thrives and
                  flourishes beautifully.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ y: img1 }}
              className="max-[430px]:z-0 mt-auto hover:overflow-visible h-[180px] relative ml-auto"
            >
              <motion.div
                className="max-[430px]:top-[70px] relative transition duration-500 transform hover:scale-125"
                whileHover={{ y: -25 }}
                animate={{ y: 30 }}
              >
                <div className="rounded-full w-[249px] h-[249px] p-10 bg-[#A7F3D0] absolute top-5 right-[-40px]  max-[430px]:top-1 max-[430px]:right-[-150px] opacity-50"></div>
                <Image
                  width={148}
                  height={306}
                  src={ImageImport.Imagephone1}
                  alt="imagephone"
                  className="relative"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="m-5 p-5 rounded-lg flex lg:w-[400px] xl:w-[550px] max-[430px]:h-auto  h-[265px] bg-[#F9FAFB] hover:bg-[#ECFDF5] overflow-hidden">
            <motion.div
              style={{ x: heading1 }}
              className="relative w-[303px] font-nunito-bold flex flex-row justify-start items-center"
            >
              <div>
                <p className="font-nunito-bold text-2xl text-black">
                  Organize Your Plants
                </p>
                <p className="font-nunito-semibold text-sm text-gray-600">
                  You can organize the plants you own and have added to the app.
                  This way, you'll find it easier to care for your plants.
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y: img2 }}
              className="hover:overflow-visible h-[180px] relative ml-auto"
            >
              <motion.div
                className=" relative transition duration-500 transform hover:scale-125"
                whileHover={{ y: -20 }}
                animate={{ y: -50 }}
              >
                <div className="rounded-full w-[249px] h-[249px] p-10 bg-[#A7F3D0] absolute bottom-32 right-[-40px]  max-[430px]:bottom-1 max-[430px]:right-[-150px] opacity-50"></div>
                <Image
                  width={148}
                  height={306}
                  src={ImageImport.Imagephone2}
                  alt="imagephone"
                  className=" z-10 relative  mb-[300px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="">
          <div className="m-5 p-5 rounded-lg flex lg:w-[400px] xl:w-[550px] max-[430px]:h-auto h-[265px] bg-[#F9FAFB] hover:bg-[#ECFDF5] overflow-hidden">
            <motion.div
              style={{ y: heading2 }}
              className=" max-[430px]:z-10 relative w-[303px] font-nunito-bold flex flex-row justify-start items-center"
            >
              <div>
                <p className="font-nunito-bold text-black text-2xl">
                  Watering Reminder
                </p>
                <p className="font-nunito-semibold text-sm text-gray-600">
                  You will receive notifications to remind you to water your
                  plants. Additionally, you can manually adjust and customize
                  these watering notifications to suit your schedule.
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y: img2 }}
              className="max-[430px]:z-0 hover:overflow-visible h-[180px] relative ml-auto"
            >
              <motion.div
                className="relative transition duration-500 transform hover:scale-125"
                whileHover={{ y: -20 }}
                animate={{ y: -50 }}
              >
                <div className="rounded-full w-[249px] h-[249px] p-10 bg-[#A7F3D0] absolute bottom-20 right-[-40px] max-[430px]:bottom-1 max-[430px]:right-[-150px]  opacity-50"></div>
                <Image
                  width={148}
                  height={306}
                  src={ImageImport.Imagephone3}
                  alt="imagephone"
                  className="relative mb-[300px]"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="m-5 p-5 rounded-lg flex lg:w-[400px] xl:w-[550px] max-[430px]:h-auto  h-[265px] bg-[#F9FAFB] hover:bg-[#ECFDF5] overflow-hidden">
            <motion.div
              style={{ x: heading1 }}
              className="max-[430px]:z-10 relative w-[303px] font-nunito-bold flex flex-row justify-start items-center"
            >
              <div>
                <p className="font-nunito-bold text-black text-2xl">
                  Planting Instruction
                </p>
                <p className="font-nunito-semibold text-sm text-gray-600">
                  You can learn step-by-step planting tailored to the specific
                  plants you want to grow. This ensures each plant thrives and
                  flourishes beautifully.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ y: img1 }}
              className="mt-auto hover:overflow-visible h-[180px] relative ml-auto"
            >
              <motion.div
                className="max-[430px]:top-[70px] relative transition duration-500 transform hover:scale-125"
                animate={{ y: 10 }}
                whileHover={{ y: -40 }}
              >
                <div className="max-[430px]:z-0 rounded-full w-[249px] h-[249px] p-10 bg-[#A7F3D0] absolute top-12 right-[-40px] max-[430px]:top-1 max-[430px]:right-[-150px]  opacity-50"></div>
                <Image
                  width={148}
                  height={306}
                  src={ImageImport.Imagephone4}
                  alt="imagephone"
                  className="relative"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
