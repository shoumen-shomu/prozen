import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "next/image";
import Button from "../common/Button";


const About = () => {
  return (
    <>
      {/* About Part Start */}
      <section id="about">
        <div className="mt-32.5">
          <Container>
            <div className="">
              <Flex className={"gap-40"}>
                <div className="">
                  <Image src="/aboutimg.png" alt="" width={624} height={682} />
                </div>
                <div className="">
                  <p className="font-oswald font-bold text-base text-[#F75709] uppercase">
                    About company
                  </p>
                  <h2 className="font-oswald font-bold text-[60px] text-[#063231] leading-16.5 w-[620px] tracking-[-1.2px] uppercase">
                    We committed to helping you achieve your goals
                  </h2>
                  <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-7.5 w-130">
                    At the core of our ethos lies a dedication to our clients.
                    Your success is our shared triumph, and we're unwavering in
                    our commitment to delivering exceptional,
                  </p>
                  <Button
                    className={
                      "uppercase bg-[#063231] font-jakarta font-extrabold text-[18px] text-white cursor-pointer inline-block mt-7.5"
                    }
                    btntext={"Let’s Get in Touch"}
                  />
                </div>
              </Flex>
            </div>
          </Container>
        </div>
      </section>
       {/* About Part End */}
    </>
  );
};

export default About;
