"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';  // For auto-scroll (optional)
import 'swiper/css';  // Required Swiper styles
import 'swiper/css/autoplay';  // If using autoplay

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

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

  // Images for Interests
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
    <div className="min-h-screen h-full flex flex-col items-center bg-[#d3e1e6]">
      <div className=" w-full h-15 rounded-b-full bg-gray-600 border-3 border-black flex items-center justify-center mb-8 z-50">
        <h1 className="text-3xl font-bold text-white text-shadow-lg">
          'Guess you were curious after all...🤔
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
      <div onClick={handleKeyDownAbout} className="top-0 left-105 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button 
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-12 inset-0 flex font-bold text-[20px] text-center items-center justify-center text-white text-shadow-lg">
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
      <div onClick={handleKeyDownHobbies} className="top-0 right-109 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button 
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-lg">
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

      <div className="flex flex-col items-center w-full px-6 mb-8">
        <div className="flex justify-between w-full max-w-4xl mb-4">
          <h1 className="font-sans text-4xl font-semibold text-gray-600 drop-shadow-lg left-19 absolute top-88 z-10">
            --------------- Hello Visitor -----------
          </h1>
          <h1 className="font-sans text-4xl font-semibold text-gray-600 drop-shadow-lg right-19 absolute top-88 z-10">
            ----------- It's Francis! ----------------
          </h1>
        </div>

        <div className="absolute top-77 w-[90%] h-20 bg-black rounded-full"></div>
        <div className="absolute top-90 w-[90%] h-20 bg-black rounded-full"></div>
        <div className="absolute top-84 w-[90%] h-20 bg-white rounded-full"></div>

        <img
          src="about-me-pic.jpg"
          alt="Picture profile for website"
          width={290}
          height={145}
          className="relative top-20 z-20 rounded-full shadow-xl border-4 border-blue-500 hover:shadow-2xl filter brightness-90 mb-10"
        />

        {/* Short Descrtion */}
        <div className="w-full text-center mt-20 space-y-4 mb-5 -pb-10 text-[18px] leading-2">
          <p>Hi! I'm <span className="font-bold">Francis</span>, a <span className="italic">Second Year</span> student, taking Bachelors Degree in Computer Science</p>
          <p>at Naga College Foundation, Inc. An aspiring future programmer that has a </p>
          <p>goal to dive into the future and explore the world in 21st century.</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="flex flex-wrap justify-center w-full h-160 border-gray bg-red-200">
        <div className="w-full mt-5 space-y-4 text-[35px] font-bold text-white text-shadow-lg/30">
          <h1>Personal Information:</h1>
        </div>
        <div className="absolute left-40 mt-25 w-140">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[13px] text-gray-500" >Full Name: </ItemTitle>
              <ItemDescription className="w-full font-bold text-[20px] text-black text-shadow-sm">
                FRANCIS SINOGBA ICARO
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div className="absolute left-40 mt-50 w-140">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[13px] text-gray-500">Age: </ItemTitle>
              <ItemDescription className="w-full font-bold text-[20px] text-black text-shadow-sm">
                20 years old
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div className="absolute left-40 mt-75 w-140">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[13px] text-gray-500">Birthday: </ItemTitle>
              <ItemDescription className="w-full font-bold text-[20px] text-black text-shadow-sm">
                September 19, 2005
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div className="absolute left-40 mt-100 w-140">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[13x] text-gray-500">Sex: </ItemTitle>
              <ItemDescription className="w-full font-bold text-[20px] text-black text-shadow-sm">
                MALE
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div className="absolute left-40 mt-125 w-140">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[13x] text-gray-500">Address: </ItemTitle>
              <ItemDescription className="w-full font-bold text-[20px] text-black text-shadow-sm">
                STA. CRUZ QUIPAYO, CALABANGA, CAMARINES SUR
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div>
          <img
            src="about-me-pic-2.jpg"
            alt="Personal Image, Casual attire"
            width={400}
            height={350}
            className="relative left-90 mb-10 z-20 rounded-2xl shadow-xl border-4 border-blue-300 hover:shadow-2xl filter brightness-90"
          />
        </div>
      </div>

      {/* Interests */}
      <div className="w-full min-h-screen bg-[#9adde5] z-10">
        <div className="w-full mt-10 mb-5 space-y-4 text-[40px] font-bold text-red-300 text-shadow-lg/10">
          <h1>Interests</h1>
        </div>

        {/* Interests Description */}
        <p className="w-[70%] mx-auto text-[18px] leading-relaxed text-justify text-center">
          Being a curious person brings interesting discoveries—and sometimes trouble. I know how chaotic it can be, with all the clutter that curiosity gathers. Almost everything interests me, from small DIY crafts to new horizons, leaving me clogged with tasks and eventually boredom.
          Nevertheless, these thoughts never stop me, for I am hungry for knowledge. Here are some of the things that interest me—though my favourites are always the scary ones.
        </p>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Autoplay]}  // Add Autoplay if you want auto-scroll
              spaceBetween={15}  // Space between slides
              slidesPerView={4}  // Number of visible slides
              loop={true}  // Enables infinite loop
              autoplay={{
                delay: 2000,  // Auto-scroll delay in ms
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

        {/* Fun Fact */}
        <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center p-6">
          <div className="w-full text-[40px] font-bold text-black-300 text-shadow-lg/10">
            <h1>Fun Fact!</h1>
          </div>
          <div className="bg-gray-600 rounded-full w-[60%] h-full border-15 border-gray-300 text-center py-4 text-white font-semibold text-[20px] mt-10 mb-30">
            <p className="p-3">I can binge watch terrifying horror movies at midnight, ALONE <br />
              And still be able to sleep like normal and no insomias or nightmares on me.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bottom-0 left-0 right-0 w-full py-4 h-15 bg-gray-600 border-t-3 border-black rounded-t-full flex items-center justify-center z-10">
        <h1 className="text-3xl font-bold text-white text-shadow-lg/30 opacity-50">
          Wanna find out more? 😁
        </h1>
        <div>
          <div onClick={handleKeyDownHome} className="bottom-0 left-45 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button 
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                HOME
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownAbout} className="bottom-0 left-105 right-0 p-6 text-center mb-15 absolute w-50 h-10 rounded-t-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button 
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[17px] mt-5 text-center items-center justify-center text-white text-shadow-lg z-20">
                ABOUT
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownEdu} className="bottom-0 left-165 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button 
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                EDUCATION
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownHobbies} className="bottom-0 right-105 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button 
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                HOBBIES
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownContact} className="bottom-0 right-45 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button 
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                CONTACT
              </h1>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
