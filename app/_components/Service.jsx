import React from "react";
import Container from "./Container";
import Image from "next/image";

const Service = () => {
  return (
    <div>
      <section id="service">
        <div className="pt-[180px]">
          <Container>
            <div className="text-center">
              <p className="font-oswald font-bold text-base text-[#F75709] uppercase">
                Our Services
              </p>
              <h2 className="font-oswald font-bold text-[60px] text-[#063231] leading-16.5 w-133 mx-auto uppercase">
                Versatile Range of Business Solutions
              </h2>
            </div>
            <div className="mt-15 grid grid-cols-2 gap-[24px]">
              <div className="py-10 px-7.5 bg-[#F5F7F7] rounded-[20px]">
                <Image src="/serviceicon.png" alt="" width={80} height={80} className="pb-[50px]" />
                <h3 className="font-oswald font-bold text-[28px] text-[#063231] leading-8.5 tracking-[-0.56px] uppercase">Finance Planning</h3>
                <p className="font-jakarta font-normal text-[18px] text-[#063231] w-145">
                  Our team prioritizes usability and accessibility to ensure
                  that every visitor enjoys a seamless intuitive.
                </p>
              </div>
              <div className="py-10 px-7.5 bg-[#F5F7F7] rounded-[20px]">
                <Image src="/serviceicon.png" alt="" width={80} height={80} className="pb-[50px]" />
                <h3 className="font-oswald font-bold text-[28px] text-[#063231] leading-8.5 tracking-[-0.56px] uppercase">Business Strategy</h3>
                <p className="font-jakarta font-normal text-[18px] text-[#063231] w-145">
                  Our team prioritizes usability and accessibility to ensure
                  that every visitor enjoys a seamless intuitive.
                </p>
              </div>
              <div className="py-10 px-7.5 bg-[#F5F7F7] rounded-[20px]">
                <Image src="/serviceicon.png" alt="" width={80} height={80} className="pb-[50px]" />
                <h3 className="font-oswald font-bold text-[28px] text-[#063231] leading-8.5 tracking-[-0.56px] uppercase">Digital marketing</h3>
                <p className="font-jakarta font-normal text-[18px] text-[#063231] w-145">
                  Our team prioritizes usability and accessibility to ensure
                  that every visitor enjoys a seamless intuitive.
                </p>
              </div>
              <div className="py-10 px-7.5 bg-[#F5F7F7] rounded-[20px]">
                <Image src="/serviceicon.png" alt="" width={80} height={80} className="pb-[50px]" />
                <h3 className="font-oswald font-bold text-[28px] text-[#063231] leading-8.5 tracking-[-0.56px] uppercase">Investment Idea</h3>
                <p className="font-jakarta font-normal text-[18px] text-[#063231] w-145">
                  Our team prioritizes usability and accessibility to ensure
                  that every visitor enjoys a seamless intuitive.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Service;
