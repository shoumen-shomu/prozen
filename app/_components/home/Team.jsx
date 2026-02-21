import React from "react";
import Container from "../common/Container";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <section id="team">
        <div className="mt-[130px]">
          <Container>
            <div className="">
              <div className="text-center mb-[60px]">
                <p className="font-oswald font-bold text-base text-[#F75709] uppercase ppb-[10px]">
                  Our Team members
                </p>
                <h2 className="font-oswald font-bold text-[60px] text-[#063231] leading-16.5 uppercase w-161.5 m-auto">
                  Get consulting from our best consultants
                </h2>
              </div>
              <div className="flex justify-between gap-6">
                <div className="text-center">
                    <Image src={"/mone.png"} alt="" width={306} height={370} className="mb-[10px]"/>
                    <h5 className="font-oswald font-semibold text-[25px] text-[#063231] leading-7.5">Linda F. Collins</h5>
                    <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-[26px]">SR Marketer</p>
                </div>
                <div className="text-center">
                    <Image src={"/mtwo.png"} alt="" width={306} height={370} className="mb-[10px]"/>
                    <h5 className="font-oswald font-semibold text-[25px] text-[#063231] leading-7.5">Sandra D. Rainey</h5>
                    <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-[26px]">Executive officer</p>
                </div>
                <div className="text-center">
                    <Image src={"/mthree.png"} alt="" width={306} height={370} className="mb-[10px]"/>
                    <h5 className="font-oswald font-semibold text-[25px] text-[#063231] leading-7.5">Brooklyn simmons</h5>
                    <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-[26px]">CEO & Founder</p>
                </div>
                <div className="text-center">
                    <Image src={"/mfour.png"} alt="" width={306} height={370} className="mb-[10px]"/>
                    <h5 className="font-oswald font-semibold text-[25px] text-[#063231] leading-7.5">Patrick Stewart</h5>
                    <p className="font-jakarta font-normal text-[18px] text-[#063231] leading-[26px]">Finance advisor</p>
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
