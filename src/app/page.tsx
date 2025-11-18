"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

  // Education answer state
  const [eduAnswer, setEduAnswer] = useState("");
  const [eduFeedback, setEduFeedback] = useState("");
  const [eduOpen, setEduOpen] = useState(false);

  // Contact answer state
  const [contactAnswer, setContactAnswer] = useState("");
  const [contactFeedback, setContactFeedback] = useState("");
  const [contactOpen, setContactOpen] = useState(false);

  // Handlers
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

  const handleKeyDownContact = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    handleContactSubmit();
  }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-6">

      {/* ABOUT Dialog */}
      <Dialog>
        <DialogTrigger className="flex items-center justify-center border-1 border-blue-300 rounded-xl p-6 shadow">
          ABOUT
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
                <Button variant="outline">No</Button>
              </DialogClose>
              <Button type="submit">Let's Dig In!</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* EDUCATION Dialog */}
      <Dialog open={eduOpen} onOpenChange={setEduOpen}>
        <DialogTrigger className="flex items-center justify-center border-1 border-blue-300 rounded-xl p-6 shadow">
          EDUCATION
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

      <div className="flex items-center justify-center h-screen"> 
        <h2 className="scroll-m-20 text-center border-b pb-2 text-4xl font-semibold tracking-tight text-balance first:mt-0"> 
          Hello Visitor! 
        </h2>
      </div>

      {/* HOBBIES Dialog */}
      <Dialog>
        <DialogTrigger className="flex items-center justify-center border-1 border-blue-300 rounded-xl p-6 shadow">
          HOBBIES
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
              <Button type="submit">I Agree!</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* CONTACT Dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogTrigger className="flex items-center justify-center border-1 border-blue-300 rounded-xl p-6 shadow">
          CONTACT
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
  );
}
