import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <section id="team">
        <div className="mt-[130px]">
          <Container>
            <div className="">
              <div className="text-center mb-15">
                <p className="font-oswald font-bold text-base text-[#F75709] uppercase pb-2.5">
                  Our Team members
                </p>
                <h2 className="font-oswald font-bold text-[60px] text-[#063231] leading-16.5 uppercase w-161.5 m-auto">
                  Get consulting from our best consultants
                </h2>
              </div>
              <div className="flex justify-between gap-6">
                <div className="text-center relative group overflow-hidden">
                  <Image
                    src={"/mone.png"}
                    alt=""
                    width={306}
                    height={370}
                    className="mb-2.5 relative"
                  />
                  <div className="flex justify-center items-center gap-2 absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-[20%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-500  ">
                    <a href="https://github.com/shoumen-shomu" target="_blank">
                      <FaGithub
                        className="p-3.5 bg-white rounded-[14px]"
                        size={50}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/shoumenshomu/" target="_blank">
                      <FaLinkedin
                        className="p-3.5 bg-white rounded-[14px]"
                        size={50}
                      />
                    </a>
                  </div>
                  <h5 className="font-oswald font-semibold text-[25px] text-[#063231] leading-7.5">
                    Linda F. Collins
                  </h5>
                  <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-[26px]">
                    SR Marketer
                  </p>
                </div>
                <div className="text-center relative group overflow-hidden">
                  <Image
                    src={"/mtwo.png"}
                    alt=""
                    width={306}
                    height={370}
                    className="mb-[10px]"
                  />
                  <div className="flex justify-center items-center gap-2 absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-[20%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-500  ">
                    <a href="https://github.com/shoumen-shomu" target="_blank">
                      <FaGithub
                        className="p-3.5 bg-white rounded-[14px]"
                        size={50}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/shoumenshomu/" target="_blank">
                      <FaLinkedin
                        className="p-3.5 bg-white rounded-[14px]"
                        size={50}
                      />
                    </a>
                  </div>
                  <h5 className="font-oswald font-semibold text-[25px] text-[#063231] leading-7.5">
                    Sandra D. Rainey
                  </h5>
                  <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-[26px]">
                    Executive officer
                  </p>
                </div>
                <div className="text-center relative group overflow-hidden">
                  <Image
                    src={"/mthree.png"}
                    alt=""
                    width={306}
                    height={370}
                    className="mb-[10px]"
                  />
                  <div className="flex justify-center items-center gap-2 absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-[20%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-500  ">
                    <a href="https://github.com/shoumen-shomu" target="_blank">
                      <FaGithub
                        className="p-3.5 bg-white rounded-[14px]"
                        size={50}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/shoumenshomu/" target="_blank">
                      <FaLinkedin
                        className="p-3.5 bg-white rounded-[14px]"
                        size={50}
                      />
                    </a>
                  </div>
                  <h5 className="font-oswald font-semibold text-[25px] text-[#063231] leading-7.5">
                    Brooklyn simmons
                  </h5>
                  <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-[26px]">
                    CEO & Founder
                  </p>
                </div>
                <div className="text-center relative group overflow-hidden">
                  <Image
                    src={"/mfour.png"}
                    alt=""
                    width={306}
                    height={370}
                    className="mb-[10px]"
                  />
                  <div className="flex justify-center items-center gap-2 absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-[20%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-500  ">
                    <a href="https://github.com/shoumen-shomu" target="_blank">
                      <FaGithub
                        className="p-3.5 bg-white rounded-[14px]"
                        size={50}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/shoumenshomu/" target="_blank">
                      <FaLinkedin
                        className="p-3.5 bg-white rounded-[14px]"
                        size={50}
                      />
                    </a>
                  </div>
                  <h5 className="font-oswald font-semibold text-[25px] text-[#063231] leading-7.5">
                    Patrick Stewart
                  </h5>
                  <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-[26px]">
                    Finance advisor
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Team;
