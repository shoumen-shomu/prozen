import React from "react";
import Container from "./Container";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="bg-[#063231] ">
          <Container>
            <div className="pt-30 pb-17.5 border-b border-[#575a5a]">
              <Image src={"/footerlogo.png"} alt="" width={131} height={31} />
              <div className="flex justify-between items-end">
                <p className="font-jakarta font-normal text-[18px] text-white leading-[30px] w-[497px] mt-[10px]">
                  At the core of our ethos lies a dedication to our clients.
                  Your success is our shared triumph, and we're.
                </p>
                <div className="flex gap-2 ">
                  <div className="bg-[#1F4746] w-[44px] h-[44px] rounded-[12px] flex justify-center items-center cursor-pointer hover:bg-[#F75709] hover:text-white duration-500 ">
                    <FaTwitter className="text-white text-base" />
                  </div>
                  <div className="bg-[#1F4746] w-[44px] h-[44px] rounded-[12px] flex justify-center items-center cursor-pointer hover:bg-[#F75709] hover:text-white duration-500 ">
                    <FaInstagram className="text-white text-base"  />
                  </div>
                  <div className="bg-[#1F4746] w-[44px] h-[44px] rounded-[12px] flex justify-center items-center cursor-pointer  hover:bg-[#F75709] hover:text-white duration-500">
                    <FaFacebookF className="text-white text-base"  />
                  </div>
                  <div className="bg-[#1F4746] w-[44px] h-[44px] rounded-[12px] flex justify-center items-center cursor-pointer  hover:bg-[#F75709] hover:text-white duration-500">
                    <FaLinkedin className="text-white text-base"  />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[250px] mt-[65px]">
              <div className="">
                <h4 className="font-jakarta font-bold text-[20px] text-white leading-8 pb-[30px]">Features</h4>
                <ul>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Advanced Analytics</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Advanced Analytics</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Auto Track</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Data Insights</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-jakarta font-bold text-[20px] text-white leading-8 pb-[30px]">Menu</h4>
                <ul>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Article & Blog</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Documentation</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Learn Gulaly</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Tutorials</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-jakarta font-bold text-[20px] text-white leading-8 pb-[30px]">Company</h4>
                <ul>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>About Us</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Our Team</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Press</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="font-jakarta font-bold text-[20px] text-white leading-8 pb-[30px]">Resources</h4>
                <ul>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Blog and Article</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Community</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Documentation</Link>
                  </li>
                  <li className="font-jakarta font-normal text-[16px] text-white leading-8">
                    <Link href={"/"}>Tutorials</Link>
                  </li>
                </ul>
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
