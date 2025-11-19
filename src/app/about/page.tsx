"use client";

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

  return (
    <div className="min-h-screen h-full flex flex-col items-center bg-[#d3e1e6]">
      <div className="fixed w-full h-15 rounded-b-full bg-gray-600 border-3 border-black flex items-center justify-center mb-8 z-50">
        <h1 className="text-3xl font-bold text-black text-shadow-lg">
          'Guess you were curious after all...
        </h1>
      </div>

      <div className="fixed top-0 left-45 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button onClick={handleKeyDownHome}
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-lg">
            HOME
          </h1>
        </Button>
      </div>
      <div className="fixed  top-0 left-105 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button onClick={handleKeyDownAbout}
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-12 inset-0 flex font-bold text-[20px] text-center items-center justify-center text-white text-shadow-lg">
            ABOUT
          </h1>
        </Button>
      </div>
      <div className="fixed  top-0 left-165 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button onClick={handleKeyDownEdu}
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-lg">
            EDUCATION
          </h1>
        </Button>
      </div>
      <div className="fixed  top-0 right-109 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button onClick={handleKeyDownHobbies}
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-lg">
            HOBBIES
          </h1>
        </Button>
      </div>
      <div className="fixed  top-0 right-49 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button onClick={handleKeyDownContact}
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
          <h1 className="font-sans text-4xl font-semibold text-gray-600 drop-shadow-lg left-19 absolute top-80 z-10">
            --------------- Hello Visitor -----------
          </h1>
          <h1 className="font-sans text-4xl font-semibold text-gray-600 drop-shadow-lg right-19 absolute top-80 z-10">
            ----------- It's Francis! ----------------
          </h1>
        </div>

        <div className="absolute top-68 w-[90%] h-20 bg-black rounded-full"></div>
        <div className="absolute top-81 w-[90%] h-20 bg-black rounded-full"></div>
        <div className="absolute top-75 w-[90%] h-20 bg-white rounded-full"></div>

        <img
          src="about-me-pic.jpg"
          alt="Picture profile for website"
          width={290}
          height={145}
          className="relative top-20 z-20 mt-10 rounded-full shadow-xl border-4 border-blue-500 hover:shadow-2xl filter brightness-90 mb-10"
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
        <div className="absolute left-40 mt-25 w-150">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[15px] text-gray-500" >Full Name: </ItemTitle>
              <ItemDescription className="font-bold text-[22px] text-black text-shadow-sm">
                FRANCIS SINOGBA ICARO
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div className="absolute left-40 mt-50 w-150">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[15px] text-gray-500" >Age: </ItemTitle>
              <ItemDescription className="font-bold text-[22px] text-black text-shadow-sm">
                20 years old
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div className="absolute left-40 mt-75 w-150">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[15px] text-gray-500">Birthday: </ItemTitle>
              <ItemDescription className="font-bold text-[22px] text-black text-shadow-sm">
                September 19, 2005
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div className="absolute left-40 mt-100 w-150">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[15px] text-gray-500" >Sex: </ItemTitle>
              <ItemDescription className="font-bold text-[22px] text-black text-shadow-sm">
                MALE
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <div className="absolute left-40 mt-125 w-150">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle className="font-bold text-[15px] text-gray-500">Address: </ItemTitle>
              <ItemDescription className="font-bold text-[22px] text-black text-shadow-sm">
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
        <div className="w-full mt-10 mb-5 space-y-4 text-[35px] font-bold text-red-300 text-shadow-xs">
          <h1>Interests</h1>
        </div>

        {/* Interests Description */}
        <div className="w-full text-center space-y-4 mb-5 -pb-10 text-[18px] leading-2">
         <p>Being a curious person could give you a lot of troubles as it brings lots of interesting things and discoveries. I, myself, even know how chaotic </p>
         <p>it would be, knowing the cluttered stuffs that you'll get. Take me for example, almost everything interests me that makes me become </p>
         <p>clogged and bombarded by many things and tasks and ended up giving me boredome. Nevertheless, this thoughts doesn't get me for I an hungry of knowledge</p>
         <p>Here are some of the things that interests me but my most favorite stuff are always the scary one.</p>
        </div>

        {/* Fun Fact */}
        <div className="w-[50%] left-96 mt-20 text-[18px] h-50 border-6  border-black rounded-[50px] absolute items-center justify-center z-20">
<p>I can binge watch terrifying horror movies at midnight, ALONE. And still be able to sleep like normal and no insomias or nightmares on me.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex w-full h-20 bg-gray-600 border-t-3 border-black rounded-t-full flex items-center justify-center z-20">
        <h1 className="text-3xl font-bold text-black text-shadow-sm">
          'Guess you were curious after all...
        </h1>
        <div>
          <div className="bottom-0 left-45 right-0 p-6 text-center mb-20 absolute w-50 h-20 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownHome}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                HOME
              </h1>
            </Button>
          </div>
          <div className="bottom-0 left-105 right-0 p-6 text-center mb-20 absolute w-50 h-10 rounded-t-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownAbout}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[17px] mt-5 text-center items-center justify-center text-white text-shadow-lg z-20">
                ABOUT
              </h1>
            </Button>
          </div>
          <div className="bottom-0 left-165 right-0 p-6 text-center mb-20 absolute w-50 h-20 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownEdu}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                EDUCATION
              </h1>
            </Button>
          </div>
          <div className="bottom-0 right-105 right-0 p-6 text-center mb-20 absolute w-50 h-20 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownHobbies}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
                HOBBIES
              </h1>
            </Button>
          </div>
          <div className="bottom-0 right-45 right-0 p-6 text-center mb-20 absolute w-50 h-20 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownContact}
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
