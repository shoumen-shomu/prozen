import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <section id="header">
        {/* Top Header Start */}
        {/* <div className="py-2 bg-red-500 fixed top-0 left-0 w-full">
          <Container>
            <div className=" ">
              <Flex className={"justify-between"}>
                <div className="flex items-center gap-2">
                  <FaLocationDot className="font-jakarta font-normal text-[18px] text-white leading-[30px]" />
                  <p className="font-jakarta font-normal text-[18px] text-white leading-[30px]">
                    {" "}
                    2774 Oak Drive, Plattsburgh, New York
                  </p>
                </div>
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-2 ">
                    <FaPhone className="font-jakarta font-normal text-[18px] text-white leading-[30px]" />
                    <p className="font-jakarta font-normal text-[18px] text-white leading-[30px]">
                      518-564-3200
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <IoMdMail className="font-jakarta font-normal text-[18px] text-white leading-[30px]" />
                    <p className="font-jakarta font-normal text-[18px] text-white leading-[30px]">
                      hello@example.com
                    </p>
                  </div>
                </div>
              </Flex>
            </div>
          </Container>
        </div> */}
        {/* Top Header End */}

        {/* Menu Part Start */}
        <div className=" mt-5 fixed top-0 left-0 w-full">
          <Container>
            <div className="py-4.25 px-3.75 flex items-center gap-15 justify-between rounded-[20px] bg-white ">
              <div className="flex items-center justify-between gap-15">
                <div className="">
                  <Image src="/logo.png" alt="ProZen" width={131} height={33} />
                </div>
                <div className="">
                  <ul className="flex gap-8">
                    <li className="font-oswald font-bold text-base text-[#063231] hover:text-[#F75709] duration-300">
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li className="font-oswald font-bold text-base text-[#063231] hover:text-[#F75709] duration-300">
                      <Link href={"/"}>Pages</Link>
                    </li>
                    <li className="font-oswald font-bold text-base text-[#063231] hover:text-[#F75709] duration-300">
                      <Link href={"/"}>Portfolio</Link>
                    </li>
                    <li className="font-oswald font-semibold text-base text-[#063231] hover:text-[#F75709] duration-300">
                      <Link href={"/"}>Blog</Link>
                    </li>
                    <li className="font-oswald font-bold text-base text-[#063231] hover:text-[#F75709] duration-300">
                      <Link href={"/"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Button
                  className={
                    "font-jakarta font-extrabold text-[18px] text-[#063231] uppercase cursor-pointer bg-[#C3DF94]"
                  }
                  btntext={"lets get in touch"}
                />
              </div>
            </div>
          </Container>
        </div>
        {/* Menu Part End */}
      </section>
    </>
  );
};

export default Header;
