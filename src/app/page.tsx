"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  HoverCard, HoverCardContent, HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const handleKeyDownAbout = () => {
    router.push("/about");
  };

  const handleEduSubmit = () => {
    if (eduAnswer.trim().toLowerCase() === "ncf") {
      setEduOpen(false);
      router.push("/education");
    } else {
      setEduFeedback("❌ Wrong answer, try again!");
    }
  };

  const handleContactSubmit = () => {
    if (contactAnswer.trim() === "09") {
      setContactOpen(false);
      router.push("/contact"); // Adjust if your contact page path differs
    } else {
      setContactFeedback("❌ Wrong answer, try again!");
    }
  };

  const handleKeyDownEdu = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEduSubmit();
    }
  };

  const handleKeyDownHobbies = () => {
    router.push("/hobbies");
  };

  const handleKeyDownContact = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleContactSubmit();
    }
  };

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 p-6 bg-[#173d4b] text-center z-20 mb-8">
        <h1 className="text-3xl font-bold text-gray-100">
          Welcome to My Personal Website
        </h1>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-[#d3e1e6] relative top-10">
        <div className="grid grid-cols-2 grid-rows-2 flex flex-wrap justify-center gap-4 w-full max-w-4xl">
          {/* ABOUT Dialog */}
          <Dialog>
            <DialogTrigger>
              <div className="col-start-1 row-start-1 flex items-center justify-center rounded-2xl border-2 p-6 border-red-400 shadow-sm min-w-[200px] h-64 
                              hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <h2 className="font-semibold text-xl">ABOUT</h2>

              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Surprise 1: About Me</DialogTitle>
                <DialogDescription>
                  If you wish to proceed, kindly answer the question.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center border-2 border-blue-300 rounded-xl p-6 shadow mb-4">
                <h4 className="text-xl font-semibold tracking-tight text-center">
                  Do you wanna know some things about me?
                </h4>
              </div>
              <DialogFooter>
                <div className="w-full flex justify-center gap-4">
                  <DialogClose asChild>
                    <Button variant="outline">Nah</Button>
                  
                  </DialogClose>
                  <Button onClick={handleKeyDownAbout} type="submit">
                    Let's dig in!
                  </Button>
                </div>

              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* EDUCATION Dialog */}
          <Dialog open={eduOpen} onOpenChange={setEduOpen}>
            <DialogTrigger>
              <div className="col-start-2 row-start-1 flex items-center justify-center rounded-2xl border-2 p-6 border-red-400 shadow-sm min-w-[200px] h-64
                              hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <h2 className="font-semibold text-xl">EDUCATION</h2>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Surprise 2: Academics</DialogTitle>
                <DialogDescription>
                  If you wish to proceed, kindly answer the question.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center border-2 border-blue-300 rounded-xl p-6 shadow mb-4">
                <h4 className="text-xl font-semibold tracking-tight text-center">
                  3 letter-name, my current school
                </h4>
              </div>
              <DialogFooter>
                <div className="w-full flex flex-col items-center gap-4">
                  <Input
                    type="text"
                    placeholder="Your Answer"
                    className="text-center w-64"
                    value={eduAnswer}
                    onChange={(e) => setEduAnswer(e.target.value)}
                    onKeyDown={handleKeyDownEdu}
                  />
                  <div className="flex gap-4">
                    <DialogClose asChild>
                      <Button variant="outline">Dunno?</Button>
                    </DialogClose>
                    <Button onClick={handleEduSubmit}>Submit</Button>
                  </div>
                  {eduFeedback && (
                    <p className="text-red-600 font-semibold mt-2">{eduFeedback}</p>
                  )}
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* HOBBIES Dialog */}
          <Dialog>
            <DialogTrigger>
              <div className="col-start-1 row-start-2 flex items-center justify-center rounded-2xl border-2 p-6 border-orange-400 shadow-sm min-w-[200px] h-64
                              hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <h2 className="font-semibold text-xl">HOBBIES</h2>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Surprise 3: Activities of Mine</DialogTitle>
                <DialogDescription>
                  If you wish to proceed, kindly answer the question.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center border-2 border-blue-300 rounded-xl p-6 shadow mb-4">
                <h4 className="text-xl font-semibold tracking-tight text-center">
                  Having leisure and destressing is very good for health, isn't it?
                </h4>
              </div>
              <DialogFooter>
                <div className="w-full flex justify-center gap-4">
                  <DialogClose asChild>
                    <Button variant="outline">I Disagree</Button>
                  </DialogClose>

                  <Button onClick={handleKeyDownHobbies} type="submit">
                    I Agree!
                  </Button>
                </div>

              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* CONTACT Dialog */}
          <Dialog open={contactOpen} onOpenChange={setContactOpen}>
            <DialogTrigger>
              <div className="col-start-2 row-start-2 flex items-center justify-center rounded-2xl border-2 p-6 border-orange-400 shadow-sm min-w-[200px] h-64
                              hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <h2 className="font-semibold text-xl">CONTACT</h2>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Surprise 4: Access me</DialogTitle>
                <DialogDescription>
                  If you wish to proceed, kindly answer the question.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center border-2 border-blue-300 rounded-xl p-6 shadow mb-4">
                <h4 className="text-xl font-semibold tracking-tight text-center">
                  Initial 2 digits of phone number in the Philippines
                </h4>
              </div>
              <DialogFooter>
                <div className="w-full flex flex-col items-center gap-4">
                  <Input
                    type="text"
                    placeholder="Your Answer"
                    className="text-center w-64"
                    value={contactAnswer}
                    onChange={(e) => setContactAnswer(e.target.value)}
                    onKeyDown={handleKeyDownContact}
                  />
                  <div className="flex gap-4">
                    <DialogClose asChild>
                      <Button variant="outline">Dunno?</Button>
                    </DialogClose>
                    <Button onClick={handleContactSubmit}>Submit</Button>
                  </div>
                  {contactFeedback && (
                    <p className="text-red-600 font-semibold mt-2">{contactFeedback}</p>
                  )}
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="absolute flex items-center justify-center cursor-pointer">
              <div className="rounded-full hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                {/* Background Box for HI VISITOR */}
                <div className="rounded-full border-4 p-2 border-orange-500 shadow-lg bg-orange-100 opacity-80 min-w-[200px] w-60 h-60"></div>

                {/* Overlapping HI VISITOR */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center rounded-full border-2 p-10 border-gray-400 shadow bg-white shadow-sm min-w-[150px] w-52 h-52">
                    <h1 className="font-bold text-3xl text-center">Hi Visitor!🫶</h1>
                  </div>
                </div>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 flex items-center justify-center">
            <p className="text-xl font-semibold tracking-tight text-center">Click any box if you wish to know me better😁.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="absolute w-full h-20 rounded-t-full bg-black"></div>
    </div>
  );
}
