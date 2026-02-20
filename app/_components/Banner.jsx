"use client";
import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <section id="bannerPart">
        <div className="bg-[url('/bannerBg.png')] bg-cover bg-center bg-no-repeat pt-35 pb-20">
          <Container>
            <Flex className={"gap-40.25"}>
              <div className="pt-20">
                <h1 className="font-oswald font-semibold text-[100px] text-[#FFFFFF] leading-26.5 uppercase w-150 tracking-[-10px]">
                  Innovative{" "}
                  <span className="text-[#C3DF94] uppercase">business</span>{" "}
                  solutions for everyone
                </h1>
                <p className="w-130 font-jakarta font-normal text-[20px] text-white leading-7.5 mt-1.75">
                  Our team prioritizes usability and accessibility to ensure
                  that every visitor enjoys a seamless intuitive.
                </p>
                <Button
                  className={
                    "inline-block bg-[#F75709] font-oswald font-extrabold text-[18px] text-white uppercase mt-10 cursor-pointer"
                  }
                  btntext={"Let's Get in Touch"}
                />
              </div>
              <div className="relative">
                <Image src="/bannerimg.png" alt="" width={688} height={904} />
                <motion.div
                  animate={{ translateX: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="py-5 px-7 bg-white/20 backdrop-blur-md rounded-[20px] inline-block absolute bottom-30 -left-10"
                >
                  <h2 className="font-oswald font-semibold text-[60px] text-white leading-16.5 tracking-[-1.2px]">
                    98%
                  </h2>
                  <p className="font-jakarta font-normal text-[16px] text-white leading-7.5">
                    Return on investment
                  </p>
                </motion.div>
                <motion.div
                  animate={{ translateY: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    
                  }}
                  className="py-5 px-7 bg-white/20 backdrop-blur-md rounded-[20px] inline-block absolute bottom-50 -right-15"
                >
                  <h3 className="font-oswald font-semibold text-[60px] text-white leading-16.5 tracking-[-1.2px]">
                    21.1K
                  </h3>
                  <p className="font-jakarta font-normal text-[16px] text-white leading-7.5">
                    Happy clients worldwide
                  </p>
                </motion.div>
              </div>
            </Flex>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
