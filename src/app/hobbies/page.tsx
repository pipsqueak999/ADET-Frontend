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

  // Mini-Projects Images
  const mini_projects = [
    "Mini_projects/mp0.jpg",
    "Mini_projects/mp1.jpg",
    "Mini_projects/mp2.jpg",
    "Mini_projects/mp3.jpg",
    "Mini_projects/mp4.jpg",
    "Mini_projects/mp5.png"
  ];

  // DIY Crafts Images
  const diyCrafts = [
    "DIY-Crafts/diy0.jpg",
    "DIY-Crafts/diy1.jpg",
    "DIY-Crafts/diy2.jpg",
    "DIY-Crafts/diy3.jpeg",
    "DIY-Crafts/diy4.jpg",
    "DIY-Crafts/diy5.jpg",
    "DIY-Crafts/diy6.jpg"
  ]

  // Music Images
  const music = [
    "Music/m0.png",
    "Music/m1.png",
    "Music/m2.png",
    "Music/m3.png",
    "Music/m4.png",
    "Music/m5.png",
    "Music/m6.png",
    "Music/m7.jpg",
    "Music/m8.jpg"
  ]

  // Studies Images
  const study = [
    "Study/stud0.jpg",
    "Study/stud1.jpg",
    "Study/stud2.png",
    "Study/stud3.jpg",
    "Study/stud4.jpg",
    "Study/stud5.jpg",
    "Study/stud6.jpg"
  ]

  // Puzzle Images
  const puzzles = [
    "puzzles/puz0.jpg",
    "puzzles/puz1.jpg",
    "puzzles/puz2.jpg",
    "puzzles/puz3.jpg",
    "puzzles/puz4.jpg",
    "puzzles/puz5.jpg",
  ]

  // Movies Images
  const movies = [
    "watching_movies/mv0.png",
    "watching_movies/mv1.jpg",
    "watching_movies/mv2.jpg",
    "watching_movies/mv3.png",
    "watching_movies/mv4.png",
    "watching_movies/mv5.jpg",
    "watching_movies/mv6.png",
    "watching_movies/mv7.png",
    "watching_movies/mv8.png",
    "watching_movies/mv9.png",
    "watching_movies/mvA.jpg",
    "watching_movies/mvB.jpg",

  ]

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
            <AccordionTrigger className="border-3 border-grey shadow-lg pl-10">
              <p className="font-bold text-[20px] text-[#a5450b] text-shadow-lg">
                ===================== Small Coding Project =====================</p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-blue-200 border-3 rounded-[30px] p-5 border-blue-500">
              <p className="font-bold text-[17px] text-center items-center justify-center text-[#054279] text-shadow-lg">
               I just recently acquired this hobby as a requirement for me to learn coding<br />
               Making mini-projects like simple math converter, calculator, and basic coding stuffs <br />
               Becomes a great help for me to improve my skills and master programming language.  
               </p>
              <div className="flex flex-col items-center justify-center p-3 pb-5 border-3 rounded-[30px] border-black bg-[#d3e1e6]">
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
                    {mini_projects.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
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
            <AccordionTrigger className="border-3 border-grey shadow-lg pl-10">
              <p className="font-bold text-[20px] text-center items-center justify-center text-[#a5450b] text-shadow-lg">
                ========================= DIY Crafts ======================== </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-blue-200 border-3 rounded-[30px] p-5 border-blue-500">
              <p className="font-bold text-[17px] text-center items-center justify-center text-[#054279] text-shadow-lg">
                Making DIYs is a boredom escape-way for me. <br />
                I enjoy crafting and making cute stuffs when I have nothing to do. <br />
                This hobby is kinda influenced by my mother cause she likes to do many crafts.
              </p>
              <div className="flex flex-col items-center justify-center p-3 pb-5 border-3 rounded-[30px] border-black bg-[#d3e1e6]">
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
                    {diyCrafts.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
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
            <AccordionTrigger className="border-3 border-grey shadow-lg pl-10">
              <p className="font-bold text-[20px] text-center items-center justify-center text-[#a5450b] text-shadow-lg">
                =========================  Studying ========================= </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-blue-200 border-3 rounded-[30px] p-5 border-blue-500">
              <p className="font-bold text-[17px] text-center items-center justify-center text-[#054279] text-shadow-lg">
                I must say that studying is also a habit of mine. <br />
                My brain wasn't fortunate enough to become gifted and have a great intelligence <br />
                With that, studying becomes one of my habit that benefits my academics
              </p>
              <div className="flex flex-col items-center justify-center p-3 pb-5 border-3 rounded-[30px] border-black bg-[#d3e1e6]">
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
                    {study.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
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
            <AccordionTrigger className="border-3 border-grey shadow-lg pl-10">
              <p className="font-bold text-[20px] text-center items-center justify-center text-[#a5450b] text-shadow-lg">
                ====================== Listening to Music ======================</p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-blue-200 border-3 rounded-[30px] p-5 border-blue-500">
              <p className="font-bold text-[17px] text-center items-center justify-center text-[#054279] text-shadow-lg">
                Fellings that can't come out are always expressed through the Music <br />
                Melodies that heals, lyrics that hit so hard, songs that brings life <br />
                I enjoy music as much as I enjoy this life.
              </p>
              <div className="flex flex-col items-center justify-center p-3 pb-5 border-3 rounded-[30px] border-black bg-[#d3e1e6]">
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
                    {music.map((image, index) => (
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
            <AccordionTrigger className="border-3 border-grey shadow-lg pl-10">
              <p className="font-bold text-[20px] text-center items-center justify-center text-[#a5450b] text-shadow-lg">
                =================== Playing and Solving Puzzle ===================</p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-blue-200 border-3 rounded-[30px] p-5 border-blue-500">
              <p className="font-bold text-[17px] text-center items-center justify-center text-[#054279] text-shadow-lg">
                I love solving puzzles because they boost my mood, pleasure, and problem-solving skills. <br />
                I can play them all day and finish entire levels in one sitting. <br />
                I’ve just completed my previous game last month and now enjoy these new ones.
              </p>
              <div className="flex flex-col items-center justify-center p-3 pb-5 border-3 rounded-[30px] border-black bg-[#d3e1e6]">
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
                    {puzzles.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
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
            <AccordionTrigger className="border-3 border-grey shadow-lg pl-10">
              <p className="font-bold text-[20px] text-center items-center justify-center text-[#a5450b] text-shadow-lg">
                ========================= Watching ======================== </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-blue-200 border-3 rounded-[30px] p-5 border-blue-500">
              <p className="font-bold text-[17px] text-center items-center justify-center text-[#054279] text-shadow-lg">
                Here are some of the photos and screenshots that I took while watching movies. <br />
                Horror and Thriller genre are the kind of movies that I love to binge watch <br />
                I also love watching different series like the famous Alice in Borderland, my favourite.</p>
              <div className="flex flex-col items-center justify-center p-3 pb-5 border-3 rounded-[30px] border-black bg-[#d3e1e6]">
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
                    {movies.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
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
      <footer className="relative w-full py-4 h-15 mt-20 bg-gray-600 border-t-3 border-black rounded-t-full flex items-center justify-center flex-shrink-0 z-10">
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
