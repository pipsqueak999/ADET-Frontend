"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Textarea } from "@/components/ui/textarea"

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

  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      alert("Please enter a message!");
      return;
    }

    const email = "message@gmail.com";
    const subject = "New Message";
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    alert("Your message is ready to send through your email app!");
    setMessage("");
  }

  return (
    <div className="min-h-screen h-full flex flex-col items-center bg-[#d3e1e6]">
      <div className=" w-full h-15 rounded-b-full bg-gray-600 border-3 border-black flex items-center justify-center mb-8 z-50">
        <h1 className="text-3xl font-bold text-white text-shadow-lg">
          Reach me out! 🤙
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
      <div onClick={handleKeyDownEdu} className="top-0 right-165 p-6 text-center mb-8 absolute w-50 h-25 rounded-b-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
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
      <div onClick={handleKeyDownContact} className="top-0 right-49 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-12 inset-0 flex font-bold text-[20px] text-center items-center justify-center text-white text-shadow-lg">
            CONTACT
          </h1>
        </Button>
      </div>

      <div className="flex h-150 mt-20 flex-col items-center w-full px-6 mb-20">
        <div>
          <img
            src="ICARO.jpeg"
            alt="image"
            width={350}
            height={300}
            className="relative right-65 mb-10 z-20 rounded-full shadow-xl border-4 border-blue-300 hover:shadow-2xl filter brightness-110"
          />
        </div>
        <div className=" top-10 shadow-lg/20">
          <div className="absolute bottom-160 right-65 w-[30%] h-15 bg-white rounded-[50px] shadow-lg/20 z-10">
            <img src="email.png" alt="email icon" className="flex mt-2 ml-5 justify-center w-10 " />
            <h1 className="absolute inset-0 flex font-bold text-[25px] text-center items-center justify-center text-black text-shadow-lg">
              ficaro@gbox.ncf.edu.ph
            </h1>
          </div>
          <div className="absolute bottom-155 right-65 w-[30%] h-20 bg-black opacity-50 rounded-[50px]"></div>
        </div>
        <div className=" top-10 shadow-lg/20">
          <div className="absolute bottom-132 right-65 w-[30%] h-15 bg-white rounded-[50px] shadow-lg/20 z-10">
            <img src="phone-call.png" alt="email icon" className="flex mt-2 ml-4 justify-center w-10 " />
            <h1 className="absolute inset-0 flex font-bold text-[25px] text-center items-center justify-center text-black text-shadow-lg">
              +639942756897
            </h1></div>
          <div className="absolute bottom-127 right-65 w-[30%] h-20 bg-black opacity-50 rounded-[50px]"></div>
        </div>
        <div className=" top-10 shadow-lg/20">
          <div className="absolute bottom-105 right-65 w-[30%] h-15 bg-white rounded-[50px] shadow-lg/20 z-10">
            <img src="facebook.png" alt="email icon" className="flex mt-2 ml-4 justify-center w-10 " />
            <h1 className="absolute inset-0 flex font-bold text-[25px] text-center items-center justify-center text-black text-shadow-lg">
              Francis Sinogba Icaro
            </h1></div>
          <div className="absolute bottom-100 right-65 w-[30%] h-20 bg-black opacity-50 rounded-[50px]"></div>
        </div>
      </div>

      <div className="flex flex-col gap-4 absolute grid grid-cols-2 grid-rows-1 gap-4 w-full max-w-4xl h-50 top-140 bottom-50 pb-10">
        <p className="flex font-bold text-[30px] mr-18 text-black right-250 text-shadow-lg mt-10">
          Feel free to send me any message!!
        </p>

        <Textarea
          placeholder="Type your message here."
          className="shadow-lg w-130 p-5"
          style={{
            resize: 'none',    // Non-resizable
            overflow: 'auto'   // Scrollable
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button onClick={handleSend} className="absolute top-45 left-162 pb-10 p-4 mb-10">Send message</Button>
      </div>

      {/* Footer */}
      <footer className="bottom-0 left-0 right-0 w-full py-4 h-15 bg-gray-600 border-t-3 border-black rounded-t-full flex items-center justify-center z-0">
        <h1 className="text-3xl font-bold text-white text-shadow-lg/30 opacity-50">
          Reach me out! 🤙
        </h1>
        <div>
          <div onClick={handleKeyDownHome} className="bottom-0 left-45 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-50">
                HOME
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownAbout} className="bottom-0 left-105 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-50">
                ABOUT
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownEdu} className="bottom-0 right-165 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-50">
                EDUCATION
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownHobbies} className="bottom-0 right-105 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-50">
                HOBBIES
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownContact} className="bottom-0 right-45 right-0 p-6 text-center mb-15 absolute w-50 h-10 rounded-t-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[17px] mt-5 text-center items-center justify-center text-white text-shadow-lg z-50">
                CONTACT
              </h1>
            </Button>
          </div>
        </div>
      </footer>
    </div >
  );
}
