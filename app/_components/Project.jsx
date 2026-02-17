import React from "react";
import Container from "./Container";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Project = () => {
  return (
    <>
      <section id="project">
        <div className="mt-32.5">
          <Container>
            <div className="">
              <p className="font-oswald font-bold text-base text-[#F75709] uppercase">
                Selected Works
              </p>
              <div className="flex justify-between mb-6.25">
                <h2 className="font-oswald font-bold text-[60px] text-[#063231] leading-16.5 w-133 uppercase">
                  Our complete project list
                </h2>
                <div className="flex gap-1 items-end">
                  <div className="w-16 h-16 rounded-[50%] border border-[#D7DEDE] flex items-center justify-center group hover:bg-[#F75709] hover:border-[#F75709] duration-500">
                    <MdKeyboardArrowLeft className="text-black text-[30px] group-hover:text-white" />
                  </div>
                  <div className="w-16 h-16 rounded-[50%] border border-[#D7DEDE] flex items-center justify-center group hover:bg-[#F75709] hover:border-[#F75709] duration-500">
                    <MdKeyboardArrowRight className="text-black text-[30px] group-hover:text-white" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-7.5">
                <div className="relative group overflow-hidden">
                  <Image
                    src={"/three.png"}
                    alt=""
                    width={469}
                    height={618}
                    className="w-full object-cover"
                  />
                  <div className="w-[90%] px-5 py-4.5 bg-white rounded-[20px] w-107.25 mx-auto absolute bottom-[5%] left-1/2 -translate-x-1/2 translate-y-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-500 ">
                    <h3 className="font-oswald font-semibold text-[28px] text-[#063231] leading-8.5 tracking-[-0.56px] w-87.25">
                      Digital Transformation Readiness
                    </h3>
                    <div className="flex justify-between">
                      <p className="font-jakarta font-normal text-base text-[#063231] leading-7.5">
                        Digital marketing
                      </p>
                      <GoArrowUpRight className="text-[#F75709] text-[30px]" />
                    </div>
                  </div>
                </div>
                <div className="relative group overflow-hidden">
                  <Image
                    src={"/projectimgOne.png"}
                    alt=""
                    width={469}
                    height={618}
                    className="w-full object-cover"
                  />
                  <div className="w-[90%] px-5 py-4.5 bg-white rounded-[20px] w-107.25 mx-auto absolute bottom-[5%] left-1/2 -translate-x-1/2 translate-y-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-500 ">
                    <h3 className="font-oswald font-semibold text-[28px] text-[#063231] leading-8.5 tracking-[-0.56px] w-87.25">
                      Digital Transformation Readiness
                    </h3>
                    <div className="flex justify-between">
                      <p className="font-jakarta font-normal text-base text-[#063231] leading-7.5">
                        Digital marketing
                      </p>
                      <GoArrowUpRight className="text-[#F75709] text-[30px]" />
                    </div>
                  </div>
                </div>
                <div className="relative group overflow-hidden">
                  <Image
                    src={"/three.png"}
                    alt=""
                    width={469}
                    height={618}
                    className="w-full object-cover"
                  />
                  <div className="w-[90%] px-5 py-4.5 bg-white rounded-[20px] w-107.25 mx-auto absolute bottom-[5%] left-1/2 -translate-x-1/2 translate-y-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-500 ">
                    <h3 className="font-oswald font-semibold text-[28px] text-[#063231] leading-8.5 tracking-[-0.56px] w-87.25">
                      Digital Transformation Readiness
                    </h3>
                    <div className="flex justify-between">
                      <p className="font-jakarta font-normal text-base text-[#063231] leading-7.5">
                        Digital marketing
                      </p>
                      <GoArrowUpRight className="text-[#F75709] text-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Project;
