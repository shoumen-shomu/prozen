import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section id="bannerPart">
        <div className="bg-[url('/bannerBg.png')] bg-cover bg-center bg-no-repeat pt-30">
          <Container>
            <Flex className={"gap-40.25"}>
              <div className="">
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
                    "inline-block bg-[#F75709] font-jakarta font-extrabold text-[18px] text-white uppercase mt-3.5 cursor-pointer"
                  }
                  btntext={"Let's Get in Touch"}
                />
              </div>
              <div className="">
                <Image src="/bannerimg.png" alt="" width={688} height={904} />
              </div>
            </Flex>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
