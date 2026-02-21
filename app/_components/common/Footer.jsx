import React from "react";
import Container from "./Container";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="bg-[#063231] ">
          <Container>
            <div className="pt-[120px] pb-[70px] border-b border-[#575a5a]">
              <Image src={"/footerlogo.png"} alt="" width={131} height={31} />
              <div className="flex justify-between items-end">
                <p className="font-jakarta font-normal text-[18px] text-white leading-[30px] w-[497px] mt-[10px]">
                  At the core of our ethos lies a dedication to our clients.
                  Your success is our shared triumph, and we're.
                </p>
                <div className="flex gap-2 ">
                  <div className="bg-[#1F4746] w-[44px] h-[44px] rounded-[12px] flex justify-center items-center cursor-pointer ">
                    <FaTwitter className="text-white text-base" />
                  </div>
                  <div className="bg-[#1F4746] w-[44px] h-[44px] rounded-[12px] flex justify-center items-center cursor-pointer ">
                    <FaInstagram className="text-white text-base"  />
                  </div>
                  <div className="bg-[#1F4746] w-[44px] h-[44px] rounded-[12px] flex justify-center items-center cursor-pointer ">
                    <FaFacebookF className="text-white text-base"  />
                  </div>
                  <div className="bg-[#1F4746] w-[44px] h-[44px] rounded-[12px] flex justify-center items-center cursor-pointer ">
                    <FaLinkedin className="text-white text-base"  />
                  </div>
                </div>
              </div>
            </div>
            <p className="font-jakarta font-bold font-semibold text-white text-center py-5">All Rights Reserved By Shoumen</p>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Footer;
