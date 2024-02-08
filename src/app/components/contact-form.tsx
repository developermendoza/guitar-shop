"use client";

import { TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { PrimaryButton } from "../ui/buttons";
import { MdLocationPin } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="flex mb-20 -mt-20 z-10 relative">
      <div className="bg-gray-100 w-2/3 p-16 ">
        <h1 className="text-center font-semibold text-4xl mb-10 ">
          CONTACT US
        </h1>
        <p className="font-semibold mb-4">LEAVE A MESSAGE</p>
        <div className="flex flex-col gap-6">
          <div>
            <TextInput rightIcon={FaRegUser} placeholder="name" required />
          </div>
          <div>
            <TextInput
              type="email"
              rightIcon={HiMail}
              placeholder="email"
              required
            />
          </div>
          <div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={8}
            />
          </div>
          <div className="flex justify-end">
            <div className="max-w-sm">
              <PrimaryButton url="" name="send message" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-1/3 py-28 px-10 flex flex-col gap-4">
        <div className="flex gap-2 items-start">
          <MdLocationPin className="mt-1" />
          <div>
            <p className="font-semibold">ADDRESS</p>
            <div className="text-sm text-gray-400 mt-2">
              <p>PO Box CTI98582 Collins Street West.</p>
              <p>Victoria 8007, Australia</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <FaMobileAlt className="mt-1" />
          <div>
            <p className="font-semibold">MOBILE</p>
            <div className="text-sm text-gray-400 mt-2">
              <p>+1 (2) 345 6789 - +1(2) 345 5486</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <HiMail className="mt-1" />
          <div>
            <p className="font-semibold">EMAIL</p>
            <div className="text-sm text-gray-400 mt-2">
              <p>Contact@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
