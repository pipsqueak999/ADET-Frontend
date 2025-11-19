"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

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
    <div className="min-h-screen flex items-center justify-center bg-[#d3e1e6]">
      <div className="absolute top-0 left-0 right-0 p-6 text-center z-20 mb-8 absolute w-full h-20 rounded-b-full bg-gray-600 border-3 border-black">
        <h1 className="text-3xl font-bold text-black">
          'Guess you were curious after all...
        </h1>
      </div>
      <div className="absolute top-0 left-45 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
        <Button onClick={handleKeyDownHome} type="submit">
          <h1 className="absolute top-18 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] text-shadow-sm z-20">
            HOME
          </h1>
        </Button>
      </div>
      <div className="absolute top-0 left-105 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
        <Button onClick={handleKeyDownAbout} type="submit">
          <h1 className="absolute top-14 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] z-20">
            ABOUT
          </h1>
        </Button>
      </div>
      <div className="absolute top-0 left-165 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
        <Button onClick={handleKeyDownEdu} type="submit">
          <h1 className="absolute top-18 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] z-20">
            EDUCATION
          </h1>
        </Button>
      </div>
      <div className="absolute top-0 right-109 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
        <Button onClick={handleKeyDownHobbies} type="submit">
          <h1 className="absolute top-18 inset-0 flex font-bold text-[17px] text-center items-center justify-center text-[#FAD684] z-20">
            HOBBIES
          </h1>
        </Button>
      </div>
      <div className="absolute top-0 right-49 p-6 text-center mb-8 absolute w-50 h-40 rounded-b-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-32 hover:bg-gray-500">
        <Button onClick={handleKeyDownContact} type="submit">
          <h1 className="absolute top-18 inset-0 flex font-bold text-[20px] text-center items-center justify-center text-white z-20">
            CONTACT
          </h1>
        </Button>
      </div>

      
      <div className="flex flex-col items-center w-full px-6 mb-8">
        --main content
      </div>

      {/* Footer */}
      <footer className="flex w-full h-20 bg-gray-600 border-t-3 border-black rounded-t-full flex items-center justify-center mt-auto z-20">
        <h1 className="text-3xl font-bold text-black">
          'Guess you were curious after all...
        </h1>
        <div>
          <div className="bottom-0 left-45 right-0 p-6 text-center mb-20 absolute w-50 h-20 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownHome}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-sm z-20">
                HOME
              </h1>
            </Button>
          </div>
          <div className="bottom-0 left-105 right-0 p-6 text-center mb-20 absolute w-50 h-10 rounded-t-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownAbout}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[17px] mt-5 text-center items-center justify-center text-white z-20">
                ABOUT
              </h1>
            </Button>
          </div>
          <div className=" bottom-0 left-165 right-0 p-6 text-center mb-20 absolute w-50 h-20 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownEdu}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-sm z-20">
                EDUCATION
              </h1>
            </Button>
          </div>
          <div className=" bottom-0 right-105 right-0 p-6 text-center mb-20 absolute w-50 h-20 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownHobbies}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-sm z-20">
                HOBBIES
              </h1>
            </Button>
          </div>
          <div className="bottom-0 right-45 right-0 p-6 text-center mb-20 absolute w-50 h-20 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500">
            <Button onClick={handleKeyDownContact}
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-sm z-20">
                CONTACT
              </h1>
            </Button>
          </div>
        </div>
      </footer>
    </div >
  );
}
