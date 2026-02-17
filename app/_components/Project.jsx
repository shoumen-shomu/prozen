import React from "react";
import Container from "./Container";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

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
              <div className="flex gap-7.5">
                <div className="">
                  <Image
                    src={"/projectimgOne.png"}
                    alt=""
                    width={469}
                    height={618}
                  />
                  <div className="px-5 py[18px] bg-teal-500 rounded-[20px]">
                    <h3 className="font-oswald font-semibold text-[28px] text-[#063231] leading-[34px] tracking-[-0.56px] w-[349px]">Digital Transformation Readiness</h3>
                    <div className="">
                        <p className="font-jakarta font-normal text-[]">Digital marketing</p>
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
