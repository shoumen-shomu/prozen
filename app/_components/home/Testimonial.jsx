"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  const swiperRef = useRef(null);
  return (
    <section className="py-20">
      <div className="max-w-[1320px] mx-auto bg-[#F8F9F9] rounded-[20px] p-10 lg:p-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center relative">
        {/* Left Side: Title and Navigation */}
        <div className="w-full">
          <span className="font-jakarta font-bold text-[#F75709] uppercase tracking-wider text-base leading-4">
            Testimonials
          </span>
          <h2 className="font-oswald font-bold text-[40px] lg:text-[55px] text-[#063231] leading-[1.1] mt-1 mb-10 uppercase w-104.75">
            What are they saying about us?
          </h2>

          {/* Slider Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#063231] hover:bg-[#F75709] hover:text-white transition-all duration-300"
            >
              <GoArrowLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-[#F75709] flex items-center justify-center text-white hover:bg-[#063231] transition-all duration-300"
            >
              <GoArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-[1px] h-[300px] bg-gray-200"></div>

        {/* Right Side: Content */}
        <div className="">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            style={{
              paddingBottom: "40px",
            }}
          >
             <SwiperSlide>
            <div className="w-full lg:w-2/3">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                <FaStar className="text-[#F75709]" />
                <FaStar className="text-[#F75709]" />
                <FaStar className="text-[#F75709]" />
                <FaStar className="text-[#F75709]" />
                <FaStar className="text-[#F75709]" />
              </div>

              <p className="font-jakarta font-medium text-[18px] lg:text-[22px] text-[#063231] leading-[1.6] italic mb-10">
                "Guidance transformed the way we business. Their innovative
                solutions and forward-thinking approach revitalized our
                organization. The results for themselves, and we couldn't be
                happier with the outcome. Trusting Guidance was a wise
                investment in our future."
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/testi.png"
                    alt="John Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-[18px] text-[#063231] uppercase">
                    John Smith
                  </h4>
                  <p className="font-jakarta text-[14px] text-gray-500">
                    Head of Developer
                  </p>
                </div>
              </div>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
