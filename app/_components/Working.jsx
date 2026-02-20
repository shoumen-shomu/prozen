import React from "react";
import Container from "./Container";

const Working = () => {
  return (
    <>
      <section id="workingPart">
        <div className="bg-[url('/workingbg.png')] bg-cover bg-center bg-no-repeat my-32.5 py-32.5">
          <Container>
            <div className="text-center justify-center">
              <p className="font-oswald font-bold text-base text-[#F75709] uppercase pb-[10px]">
                Working process
              </p>
              <h2 className="font-oswald font-bold text-[60px] text-white leading-16.5 w-140 mx-auto uppercase">
                We make things easy for you to start
              </h2>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Working;
