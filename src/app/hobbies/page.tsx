"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';  // For auto-scroll (optional)
import 'swiper/css';  // Required Swiper styles
import 'swiper/css/autoplay';  // If using autoplay

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  // State for progressive breadcrumb trail
  const [breadcrumbTrail, setBreadcrumbTrail] = useState([{ label: 'Home', href: '/' }]);
  // Update breadcrumb trail when pathname changes
  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    let currentPath = '';
    const newTrail = [{ label: 'Home', href: '/' }];  // Always start with Home
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      newTrail.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1),  // Capitalize
        href: currentPath,
      });
    });
    setBreadcrumbTrail(newTrail);
  }, [pathname]);  // Runs whenever the path changes

  // Education answer state
  const [eduAnswer, setEduAnswer] = useState("");
  const [eduFeedback, setEduFeedback] = useState("");
  const [eduOpen, setEduOpen] = useState(false);

  // Contact answer state
  const [contactAnswer, setContactAnswer] = useState("");
  const [contactFeedback, setContactFeedback] = useState("");
  const [contactOpen, setContactOpen] = useState(false);

  // Handlers
  const handleKeyDownHome = () => {
    router.push("/");
  };

  const handleKeyDownAbout = () => {
    router.push("/about");
  };

  const handleKeyDownEdu = () => {
    router.push("/education");
  };

  const handleKeyDownHobbies = () => {
    router.push("/hobbies");
  };

  const handleKeyDownContact = () => {
    router.push("/contact");
  };

  // Hobbies images
  const images = [
    "studies.jpg",
    "programming.jpg",
    "crafts.jpeg",
    "music.jpg",
    "anime.png",
    "wisteria.jpg",
    "dusk.jpg",
    "dark--nights.jpeg",
    "watching-movies.jpg",
    "scary-movies.jpg"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#d3e1e6]">
      <div className=" w-full h-15 rounded-b-full bg-gray-600 border-3 border-black flex items-center justify-center mb-8 z-50">
        <h1 className="text-3xl font-bold text-white text-shadow-lg">
          The stress reliever that I love 💖
        </h1>
      </div>

      <div onClick={handleKeyDownHome} className="top-0 left-45 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-lg">
            HOME
          </h1>
        </Button>
      </div>
      <div onClick={handleKeyDownAbout} className="top-0 left-105 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-lg">
            ABOUT
          </h1>
        </Button>
      </div>
      <div onClick={handleKeyDownEdu} className="top-0 left-165 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-lg">
            EDUCATION
          </h1>
        </Button>
      </div>
      <div onClick={handleKeyDownHobbies} className="top-0 right-109 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-12 inset-0 flex font-bold text-[20px] text-center items-center justify-center text-white text-shadow-lg">
            HOBBIES
          </h1>
        </Button>
      </div>
      <div onClick={handleKeyDownContact} className="top-0 right-49 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-lg">
            CONTACT
          </h1>
        </Button>
      </div>


      <div className="flex-1 flex flex-col items-center w-full px-6 mb-8">
        <Accordion
          type="multiple"
          className="w-[60%] mt-20 "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-blue-200">
              <p>DESCRIPTION</p>
              <div className="flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-6xl">
                  <Swiper
                    modules={[Autoplay]}  // Add Autoplay if you want auto-scroll
                    spaceBetween={15}  // Space between slides
                    slidesPerView={4}  // Number of visible slides
                    loop={true}  // Enables infinite loop
                    autoplay={{
                      delay: 700,  // Auto-scroll delay in ms
                      disableOnInteraction: false // Continue autoplay after user interaction
                    }}

                    breakpoints={{
                      640: { slidesPerView: 1 },  // 1 slide on small screens
                      768: { slidesPerView: 2 },  // 2 slides on medium screens
                      1024: { slidesPerView: 3 },  // 3 slides on large screens
                    }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-[99%] h-90 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>DESCRIPTION</p>
              <div className="flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-6xl">
                  <Swiper
                    modules={[Autoplay]}  // Add Autoplay if you want auto-scroll
                    spaceBetween={15}  // Space between slides
                    slidesPerView={4}  // Number of visible slides
                    loop={true}  // Enables infinite loop
                    autoplay={{
                      delay: 700,  // Auto-scroll delay in ms
                      disableOnInteraction: false // Continue autoplay after user interaction
                    }}

                    breakpoints={{
                      640: { slidesPerView: 1 },  // 1 slide on small screens
                      768: { slidesPerView: 2 },  // 2 slides on medium screens
                      1024: { slidesPerView: 3 },  // 3 slides on large screens
                    }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-[99%] h-90 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>DESCRIPTION</p>
              <div className="flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-6xl">
                  <Swiper
                    modules={[Autoplay]}  // Add Autoplay if you want auto-scroll
                    spaceBetween={15}  // Space between slides
                    slidesPerView={4}  // Number of visible slides
                    loop={true}  // Enables infinite loop
                    autoplay={{
                      delay: 700,  // Auto-scroll delay in ms
                      disableOnInteraction: false // Continue autoplay after user interaction
                    }}

                    breakpoints={{
                      640: { slidesPerView: 1 },  // 1 slide on small screens
                      768: { slidesPerView: 2 },  // 2 slides on medium screens
                      1024: { slidesPerView: 3 },  // 3 slides on large screens
                    }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-[99%] h-90 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>DESCRIPTION</p>
              <div className="flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-6xl">
                  <Swiper
                    modules={[Autoplay]}  // Add Autoplay if you want auto-scroll
                    spaceBetween={15}  // Space between slides
                    slidesPerView={4}  // Number of visible slides
                    loop={true}  // Enables infinite loop
                    autoplay={{
                      delay: 700,  // Auto-scroll delay in ms
                      disableOnInteraction: false // Continue autoplay after user interaction
                    }}

                    breakpoints={{
                      640: { slidesPerView: 1 },  // 1 slide on small screens
                      768: { slidesPerView: 2 },  // 2 slides on medium screens
                      1024: { slidesPerView: 3 },  // 3 slides on large screens
                    }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-[99%] h-90 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>DESCRIPTION</p>
              <div className="flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-6xl">
                  <Swiper
                    modules={[Autoplay]}  // Add Autoplay if you want auto-scroll
                    spaceBetween={15}  // Space between slides
                    slidesPerView={4}  // Number of visible slides
                    loop={true}  // Enables infinite loop
                    autoplay={{
                      delay: 700,  // Auto-scroll delay in ms
                      disableOnInteraction: false // Continue autoplay after user interaction
                    }}

                    breakpoints={{
                      640: { slidesPerView: 1 },  // 1 slide on small screens
                      768: { slidesPerView: 2 },  // 2 slides on medium screens
                      1024: { slidesPerView: 3 },  // 3 slides on large screens
                    }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-[99%] h-90 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>DESCRIPTION</p>
              <div className="flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-6xl">
                  <Swiper
                    modules={[Autoplay]}  // Add Autoplay if you want auto-scroll
                    spaceBetween={15}  // Space between slides
                    slidesPerView={4}  // Number of visible slides
                    loop={true}  // Enables infinite loop
                    autoplay={{
                      delay: 700,  // Auto-scroll delay in ms
                      disableOnInteraction: false // Continue autoplay after user interaction
                    }}

                    breakpoints={{
                      640: { slidesPerView: 1 },  // 1 slide on small screens
                      768: { slidesPerView: 2 },  // 2 slides on medium screens
                      1024: { slidesPerView: 3 },  // 3 slides on large screens
                    }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-[99%] h-90 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Footer */}
      <footer className="relative w-full py-4 h-15 bg-gray-600 border-t-3 border-black rounded-t-full flex items-center justify-center flex-shrink-0 z-10">
        <h1 className="text-3xl font-bold text-white text-shadow-lg/30 opacity-50">
          That was fun! Having a great time? 🤝
        </h1>
        <div>
          <div onClick={handleKeyDownHome} className="bottom-0 left-45 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                HOME
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownAbout} className="bottom-0 left-105 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                ABOUT
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownEdu} className="bottom-0 left-165 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                EDUCATION
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownHobbies} className="bottom-0 right-105 right-0 p-6 text-center mb-15 absolute w-50 h-10 rounded-t-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[17px] mt-5 text-center items-center justify-center text-white text-shadow-lg z-20">
                HOBBIES
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownContact} className="bottom-0 right-45 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                CONTACT
              </h1>
            </Button>
          </div>
        </div>
      </footer>
    </div >
  );
}
