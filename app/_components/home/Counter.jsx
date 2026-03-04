"use client";
import React from "react";
import Container from "../common/Container";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      {/* Counter Part Start */}

      <section id="counter">
        <Container>
          <div className="py-7.5 rounded-[20px] bg-[#F5F7F7] flex justify-between mt-32.5">
            <div className="w-108 text-center ">
              <p
                ref={ref}
                className="font-oswald font-semibold text-[80px] text-[#063231] leading-21.25 tracking-[-1.6px] mb-[13px]"
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={8}
                    duration={4.5}
                    decimals={0}
                    suffix="K"
                  />
                ) : (
                  "0"
                )}
                <span className="font-oswald font-semibold text-[80px] text-[#F75709] leading-21.25 tracking-[-1.6px]">
                  +
                </span>
              </p>
              <h5 className="font-oswald font-semibold text-[24px] leading-7.5 tracking-[-0.48px] uppercase">
                Years in business
              </h5>
              <p className="font-jakarta font-normal text-[18px] leading-7.5 tracking-[-0.48px]">
                Creating the successful path
              </p>
            </div>
            <div className="w-108 text-center border-x border-[#D7DEDE]">
              <p
                ref={ref}
                className="font-oswald font-semibold text-[80px] text-[#063231] leading-21.25 tracking-[-1.6px] mb-[13px]"
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={340}
                    duration={4.5}
                    decimals={0}
                    suffix=""
                  />
                ) : (
                  "0"
                )}
                <span className="font-oswald font-semibold text-[80px] text-[#F75709] leading-21.25 tracking-[-1.6px]">
                  +
                </span>
              </p>
              <h5 className="font-oswald font-semibold text-[24px] leading-7.5 tracking-[-0.48px] uppercase">
                Projects
              </h5>
              <p className="font-jakarta font-normal text-[18px] leading-7.5 tracking-[-0.48px]">
                with client satisfaction in 6 years
              </p>
            </div>
            <div className="w-108 text-center">
              <p
                ref={ref}
                className="font-oswald font-semibold text-[80px] text-[#063231] leading-21.25 tracking-[-1.6px] mb-[13px]"
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={37}
                    duration={4.5}
                    decimals={0}
                    suffix=""
                  />
                ) : (
                  "0"
                )}
                <span className="font-oswald font-semibold text-[80px] text-[#F75709] leading-21.25 tracking-[-1.6px]">
                  +
                </span>
              </p>
              <h5 className="font-oswald font-semibold text-[24px] leading-7.5 tracking-[-0.48px] uppercase">
                members
              </h5>
              <p className="font-jakarta font-normal text-[18px] leading-7.5 tracking-[-0.48px]">
                Working for your success
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Counter Part End */}
    </>
  );
};

export default Counter;
