import React from "react";
import Container from "../common/Container";

const Working = () => {
  return (
    <>
    {/* Working Part Start */}
      <section id="workingPart">
        <div className="bg-[url('/workingbg.png')] bg-cover bg-center bg-no-repeat my-32.5 py-32.5">
          <Container>
            <div className="text-center justify-center relative">
              <p className="font-oswald font-bold text-base text-[#F75709] uppercase pb-2.5">
                Working process
              </p>
              <h2 className="font-oswald font-bold text-[60px] text-white leading-16.5 w-140 mx-auto uppercase">
                We make things easy for you to start
              </h2>
              <div className="bg-[#294F4E] w-full h-0.5 absolute top-[53%] left-0 z-0"></div>
              <div className="mt-10.5 flex gap-41.25">        
                <div className="pt-6.25 px-3 z-10 relative ">
                    <div className="bg-[#294F4E] h-17.5 w-0.5 absolute top-[28%] left-[50%] z-9"></div>
                  <div className="uppercase py-3 px-5.5 bg-[#C3DF94] rounded-xl font-oswald font-semibold text-[18px] text-[#063231] leading-7.5 mb-26.25 inline-block">
                    step 01
                  </div>
                  <h3 className="font-oswald font-semibold text-[28px] text-white leading-8.5 tracking-[-0.56px] uppercase">
                    Onboarding
                  </h3>
                  <p className="font-jakarta font-normal text-[18px] text-white leading-7.5 pt-0.75 w-76.5">
                    Initial consultations to identify the client's goals and
                    challenges.
                  </p>
                </div>
                <div className="pt-6.25 px-3 z-10 relative ">
                    <div className="bg-[#294F4E] h-17.5 w-0.5 absolute top-[28%] left-[50%] z-9"></div>
                  <div className="uppercase py-3 px-5.5 bg-[#C3DF94] rounded-xl font-oswald font-semibold text-[18px] text-[#063231] leading-7.5 mb-26.25 inline-block">
                    step 02
                  </div>
                  <h3 className="font-oswald font-semibold text-[28px] text-white leading-8.5 tracking-[-0.56px] uppercase">
                    Planning
                  </h3>
                  <p className="font-jakarta font-normal text-[18px] text-white leading-7.5 pt-0.75 w-76.5">
                    Initial consultations to identify the client's goals and
                    challenges.
                  </p>
                </div>
                <div className="pt-6.25 px-3 z-10 relative ">
                    <div className="bg-[#294F4E] h-17.5 w-0.5 absolute top-[28%] left-[50%] z-9"></div>
                  <div className="uppercase py-3 px-5.5 bg-[#C3DF94] rounded-xl font-oswald font-semibold text-[18px] text-[#063231] leading-7.5 mb-26.25 inline-block">
                    step 03
                  </div>
                  <h3 className="font-oswald font-semibold text-[28px] text-white leading-8.5 tracking-[-0.56px] uppercase">
                    Implementation
                  </h3>
                  <p className="font-jakarta font-normal text-[18px] text-white leading-7.5 pt-0.75 w-76.5">
                    Initial consultations to identify the client's goals and
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    {/* Working Part End */}

    </>
  );
};

export default Working;
