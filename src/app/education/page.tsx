"use client";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

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

  return (
    <div className="min-h-screen h-full flex flex-col items-center bg-[#d3e1e6]">
      <div className=" w-full h-15 rounded-b-full bg-gray-600 border-3 border-black flex items-center justify-center mb-8 z-50">
        <h1 className="text-3xl font-bold text-white text-shadow-lg">
          Here comes the academics! ✍️
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
      <div onClick={handleKeyDownEdu} className="top-0 left-165 p-6 text-center mb-8 absolute w-50 h-30 rounded-b-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-32 hover:bg-gray-500 z-40">
        <Button
          type="submit"
          variant="ghost"
          className="bg-transparent hover:bg-transparent shadow-none">
          <h1 className="absolute top-12 inset-0 flex font-bold text-[20px] text-center items-center justify-center text-white text-shadow-lg">
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

      <div className="flex h-265 flex-col items-center w-full px-6 mb-8">
        <div className="absolute top-40 w-[50%] h-20 bg-[#9adde5] rounded-[20px] z-20 border-3 border-gray-500">
          <div className="w-full mt-3 space-y-4 text-[30px] font-bold text-yellow-100 text-shadow-lg/10">
            <h1>Elementary</h1>
          </div>
        </div>
        <div className="absolute top-50 w-[40%] h-40 bg-white opacity-50 rounded-[40px] shadow-lg">
          <h1 className="absolute pt-2 inset-0 flex font-bold text-[19px] text-center items-center justify-center text-black text-shadow-lg">
            STA. CRUZ ELEMENTARY SCHOOL <br />
            2012 - 2018 <br />
            Z-5, STA. CRUZ QUIPAYO, CALABANGA, CAMARINES SUR
          </h1>
        </div>
        <div className="flex z-30 absolute top-83 w-47 h-13 bg-[#9adde5] rounded-[20px] z-20 border-3 border-gray-500">
          <div className="w-full mt-3">
            <Drawer>
              <DialogContent>
                <VisuallyHidden>
                  <DialogTitle>Elementary Image Gallery</DialogTitle>
                </VisuallyHidden>
              </DialogContent>
              <DrawerTrigger>
                <div className="w-full space-y-4 text-[17px] font-bold text-white text-shadow-sm">
                  <h1>Click to View Gallery</h1>
                </div>
              </DrawerTrigger>
              <DrawerContent className="bg-black">
                <Carousel className="w-full max-w-7xl mx-auto">
                  <CarouselContent className="-ml-1 mb-2">
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem0.jpeg" alt="Elementary pictures" className="w704 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem1.jpg" alt="Elementary pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem2.jpg" alt="Elementary pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem3.jpg" alt="Elementary pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem4.jpeg" alt="Elementary pictures" className="w704 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem5.jpeg" alt="Elementary pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem6.jpg" alt="Elementary pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem7.jpeg" alt="Elementary pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem8.jpeg" alt="Elementary pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="elem_gallery/elem9.jpg" alt="Elementary pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <DrawerFooter>
                  <DrawerClose className="flex items-center justify-center">
                    <p className="text-black p-2 text-[18px] bg-white w-20 h-10 rounded-[50%] text-center">
                      Close
                    </p>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="absolute top-100 w-[50%] h-20 bg-red-200 rounded-[20px] z-20 border-3 border-gray-500">
          <div className="w-full mt-3 space-y-4 text-[30px] font-bold text-yellow-100 text-shadow-lg/10">
            <h1>Junior High School</h1>
          </div>
        </div>
        <div className="absolute top-110 w-[40%] h-40 bg-white opacity-50 rounded-[40px] shadow-lg">
          <h1 className="absolute pt-2 inset-0 flex font-bold text-[19px] text-center items-center justify-center text-black text-shadow-lg">
            QUIPAYO NATIONAL HIHG SCHOOL <br />
            2018 - 2022 <br />
            SAN ANTONIO QUIPAYO, CALABANGA, CAMARINES SUR
          </h1>
        </div>
        <div className="flex z-30 absolute top-143 w-47 h-13 bg-red-200 rounded-[20px] z-20 border-3 border-gray-500">
          <div className="w-full mt-3">
            <Drawer>
              <DialogContent>
                <VisuallyHidden>
                  <DialogTitle>Junior High Image Gallery</DialogTitle>
                </VisuallyHidden>
              </DialogContent>
              <DrawerTrigger>
                <div className="w-full space-y-4 text-[17px] font-bold text-white text-shadow-sm">
                  <h1>Click to View Gallery</h1>
                </div>
              </DrawerTrigger>
              <DrawerContent className="bg-black">
                <Carousel className="w-full max-w-7xl mx-auto">
                  <CarouselContent className="-ml-1 mb-2">
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs0.jpg" alt="Junior High Pictures" className="w704 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs1.jpeg" alt="Junior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs2.jpg" alt="Junior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs3.jpg" alt="Junior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs4.jpg" alt="Junior High Pictures" className="w704 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs5.jpeg" alt="Junior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs6.jpg" alt="Junior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs7.jpeg" alt="Junior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs8.jpg" alt="Junior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="jhs_gallery/jhs9.jpg" alt="Junior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <DrawerFooter>
                  <DrawerClose className="flex items-center justify-center">
                    <p className="text-black p-2 text-[18px] bg-white w-20 h-10 rounded-[50%] text-center">
                      Close
                    </p>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="absolute top-160 w-[50%] h-20 bg-blue-300 rounded-[20px] z-20 border-3 border-gray-500">
          <div className="w-full mt-3 space-y-4 text-[30px] font-bold text-yellow-100 text-shadow-lg/10">
            <h1>Senior High School</h1>
          </div>
        </div>
        <div className="absolute top-170 w-[40%] h-40 bg-white opacity-50 rounded-[40px] shadow-lg">
          <h1 className="absolute pt-2 inset-0 flex font-bold text-[19px] text-center items-center justify-center text-black text-shadow-lg">
            OUR LADY OF LA PORTERIA ACADEMY <br />
            2022 - 2024 <br />
            SAN ANTONIO POBALCION, CALABANGA, CAMARINES SUR
          </h1>
        </div>
        <div className="flex z-30 absolute top-203 w-47 h-13 bg-blue-300 rounded-[20px] z-20 border-3 border-gray-500">
          <div className="w-full mt-3">
            <Drawer>
              <DialogContent>
                <VisuallyHidden>
                  <DialogTitle>Senior High Image Gallery</DialogTitle>
                </VisuallyHidden>
              </DialogContent>
              <DrawerTrigger>
                <div className="w-full space-y-4 text-[17px] font-bold text-white text-shadow-sm">
                  <h1>Click to View Gallery</h1>
                </div>
              </DrawerTrigger>
              <DrawerContent className="bg-black">
                <Carousel className="w-full max-w-7xl mx-auto">
                  <CarouselContent className="-ml-1 mb-2">
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs1.jpeg" alt="Senior High Pictures" className="w704 h-64 object-cover rounded-lg" />  {/* Added fixed w-64 h-64 for uniform size */}
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs2.jpg" alt="ESenior HighpPctures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs3.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs4.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs5.jpeg" alt="Senior High Pictures" className="w704 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs6.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs7.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs8.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shs9.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shsA.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shsB.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shsC.jpg" alt="ESenior HighpPctures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shsD.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shsE.jpeg" alt="Senior High Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="shs_gallery/shsF.jpg" alt="ESenior HighpPctures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <DrawerFooter>
                  <DrawerClose className="flex items-center justify-center">
                    <p className="text-black p-2 text-[18px] bg-white w-20 h-10 rounded-[50%] text-center">
                      Close
                    </p>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="absolute top-220 w-[50%] h-20 bg-green-300 rounded-[20px] z-20 border-3 border-gray-500">
          <div className="w-full mt-3 space-y-4 text-[30px] font-bold text-yellow-100 text-shadow-lg/10">
            <h1>College</h1>
          </div>
        </div>
        <div className="absolute top-230 w-[40%] h-40 bg-white opacity-50 rounded-[40px] shadow-lg">
          <h1 className="absolute pt-2 inset-0 flex font-bold text-[19px] text-center items-center justify-center text-black text-shadow-lg">
            NAGA COLLEGE FOUNDATION, INC<br />
            2024 - 2nd yr (First sem) <br />
            M.T. VILLANUEVA AVE., NAGA CITY, CAMARINES SUR
          </h1>
        </div>
        <div className="flex z-30 absolute top-263 w-47 h-13 bg-green-300 rounded-[20px] z-20 border-3 border-gray-500">
          <div className="w-full mt-3">
            <Drawer>
              <DialogContent>
                <VisuallyHidden>
                  <DialogTitle>College Image Gallery</DialogTitle>
                </VisuallyHidden>
              </DialogContent>
              <DrawerTrigger>
                <div className="w-full space-y-4 text-[17px] font-bold text-white text-shadow-sm">
                  <h1>Click to View Gallery</h1>
                </div>
              </DrawerTrigger>
              <DrawerContent className="bg-black">
                <Carousel className="w-full max-w-7xl mx-auto">
                  <CarouselContent className="-ml-1 mb-2">
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col1.jpg" alt="College Pictures" className="w704 h-64 object-cover rounded-lg" />  {/* Added fixed w-64 h-64 for uniform size */}
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col2.jpg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col3.jpeg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col4.jpeg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col5.jpeg" alt="College Pictures" className="w704 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col6.jpeg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col7.jpeg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col8.jpg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/col9.png" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/colA.jpeg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/colB.jpg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/colC.jpg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/colD.jpg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 basis-1/4 md:basis-1/5">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-1">
                            <img src="col_gallery/colE.jpg" alt="College Pictures" className="w-70 h-64 object-cover rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <DrawerFooter>
                  <DrawerClose className="flex items-center justify-center">
                    <p className="text-black p-2 text-[18px] bg-white w-20 h-10 rounded-[50%] text-center">
                      Close
                    </p>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bottom-0 left-0 right-0 w-full py-4 h-15 bg-gray-600 border-t-3 border-black rounded-t-full flex items-center justify-center z-10">
        <h1 className="text-3xl font-bold text-white text-shadow-lg/30 opacity-50">
          Keep digging!👌
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
          <div onClick={handleKeyDownEdu} className="bottom-0 left-165 right-0 p-6 text-center mb-15 absolute w-50 h-10 rounded-t-[50px] bg-gray-600 border-3 border-blue-300 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[17px] mt-5 text-center items-center justify-center text-white text-shadow-lg z-20">
                EDUCATION
              </h1>
            </Button>
          </div>
          <div onClick={handleKeyDownHobbies} className="bottom-0 right-105 right-0 p-6 text-center mb-15 absolute w-50 h-15 rounded-t-[50px] bg-gray-400 border-3 border-gray-500 transition-all duration-300 hover:h-20 hover:bg-gray-500">
            <Button
              type="submit"
              variant="ghost"
              className="bg-transparent hover:bg-transparent shadow-none">
              <h1 className="absolute bottom-10 top-2 inset-0 flex font-bold text-[20px] mt-5 text-center items-center justify-center text-[#FAD684] text-shadow-lg z-20">
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
