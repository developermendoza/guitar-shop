"use client";

import { CartIcon, EyeIcon, HeartIcon } from "./icons";
import { useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { VscTriangleLeft } from "react-icons/vsc";
import moment from "moment";
import { FaBedPulse } from "react-icons/fa6";
import Image from "next/image";
import sales1 from "../../../public/images/sales/sales-1.png";
import sales2 from "../../../public/images/sales/sales-2.png";
import { StaticImageData } from "next/image";
import { PrimaryButton } from "./buttons";
import Link from "next/link";

export function SaleLeftCard() {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="w-80" src={sales1} alt="" placeholder="blur" />
      <div>
        <p
          className="font-bold uppercase text-black text-lg"
          style={{ fontFamily: "monospace" }}
        >
          Electric guitars and accessories
        </p>
        <h3 className="font-bold uppercase text-black text-2xl">
          SALE UP <span className="text-red-800">45%</span>
        </h3>
        <ul className="list-disc pl-4 text-sm py-4">
          <li>Set of strings</li>
          <li>set of Picks</li>
          <li>One premium pedal</li>
          <li>Tuner</li>
        </ul>
        <p className="text-xs font-semibold text-black">
          DETAIL <span className="mx-2">|</span>{" "}
          <span className="text-red-800">ADD TO CART</span>
        </p>
      </div>
    </div>
  );
}
export function SaleRightCard() {
  return (
    <div className="flex gap-4 justify-end items-center">
      <div>
        <p
          className="font-bold uppercase text-black text-lg"
          style={{ fontFamily: "monospace" }}
        >
          Amps and accessories
        </p>
        <h3 className="font-bold uppercase text-black text-2xl">
          SALE UP <span className="text-red-800">45%</span>
        </h3>
        <ul className="list-disc pl-4 text-sm py-4">
          <li>Set of strings</li>
          <li>set of Picks</li>
          <li>One premium pedal</li>
          <li>Tuner</li>
        </ul>
        <p className="text-xs font-semibold text-black">
          DETAIL <span className="mx-2">|</span>{" "}
          <span className="text-red-800">ADD TO CART</span>
        </p>
      </div>
      <Image className="w-80" src={sales2} alt="" placeholder="blur" />
    </div>
  );
}

export function SalesCard() {
  return (
    <div className="grid grid-cols-2 relative">
      <div className="bg-gray-100 h-80 flex items-center">
        <div className="wrapper">
          <SaleLeftCard />
        </div>
      </div>
      <div className="bg-gray-200 h-80 flex items-center">
        <div className="wrapper">
          <SaleRightCard />
        </div>
      </div>
      <div className="bg-white -rotate-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 text-xs font-semibold text-gray-800">
        DEAL OF THE DAY, UP TO 50%
      </div>
    </div>
  );
}

export function PopularCard({
  id,
  images,
  name,
  price,
}: {
  id: number;
  images: string[];
  name: string;
  price: number;
}) {
  const [isCardInfoShowing, setIsCardInfoShowing] = useState(false);
  return (
    <div key={id}>
      <div
        onMouseEnter={() => setIsCardInfoShowing(true)}
        onMouseLeave={() => setIsCardInfoShowing(false)}
        className={`bg-gray-100  cursor-pointer h-80 flex flex-col justify-center relative transition-transform duration-300 ease-in-out transform hover:scale-105 ${
          isCardInfoShowing ? "border border-red-800 shadow-md p-4 mb-4" : ""
        }`}
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <Image
          alt="hero 1"
          src={images[0]}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        /> */}
        {isCardInfoShowing && (
          <div className="bg-white opacity-80 absolute top-0 left-0 right-0 bottom-0"></div>
        )}

        {isCardInfoShowing && (
          <div className="bg-white py-2 w-full z-10 absolute left-0 right-0">
            <div className="flex gap-4 justify-center items-center">
              <CartIcon color="black" />
              <p>|</p>
              <HeartIcon color="black" />
              <p>|</p>
              <EyeIcon color="black" />
            </div>
          </div>
        )}
      </div>
      <div className="text-center mt-4">
        <p className="text-black font-semibold text-sm">{name}</p>
        <p className="text-gray-500 font-semibold text-xs">
          Price: <span className="text-red-800">${price}</span>
        </p>
      </div>
    </div>
  );
}

export function SpecialCard({
  index,
  id,
  images,
  name,
  price,
  isOnSale,
}: {
  index: number;
  id: number;
  images: string[];
  name: string;
  price: number;
  isOnSale: boolean;
}) {
  const [isCardInfoShowing, setIsCardInfoShowing] = useState(false);

  return (
    <div
      className={` grid ${
        index === 4 ? "row-span-2 col-span-2" : "col-span-1 row-span-1"
      } bg-gray-100 p-4 mb-4 cursor-pointer  relative transition-transform duration-300 ease-in-out transform hover:scale-105 ${
        isCardInfoShowing ? "shadow-md p-4 mb-4" : ""
      }`}
      key={id}
      onMouseEnter={() => setIsCardInfoShowing(true)}
      onMouseLeave={() => setIsCardInfoShowing(false)}
    >
      <div
        className={` flex flex-col justify-center ${
          index === 4 ? "h-[550px]" : "h-60"
        } `}
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {isCardInfoShowing && (
          <div className="bg-white opacity-80 absolute top-0 left-0 right-0 bottom-0"></div>
        )}

        {isCardInfoShowing && (
          <div className="bg-white py-2 w-full z-10 absolute left-0 right-0">
            <div className="flex gap-4 justify-center items-center">
              <CartIcon color="black" />
              <p>|</p>
              <HeartIcon color="black" />
              <p>|</p>
              <EyeIcon color="black" />
            </div>
          </div>
        )}
      </div>
      <div className="text-center mt-4">
        <p className="text-black font-semibold text-sm">{name}</p>
        <p className="text-gray-500 font-semibold text-xs">
          Price: <span className="text-red-800">${price}</span>
        </p>
      </div>
      {isOnSale && (
        <div className="absolute top-4 left-0 flex items-center justify-center">
          <VscTriangleLeft className="text-[43px] text-red-800" />
          <div className="bg-red-800 text-white text-xs px-4 py-2 -ml-4">
            SALE
          </div>
        </div>
      )}
    </div>
  );
}

const styleMapping = [
  "col-span-3 row-span-6",
  "col-span-2 row-span-3 col-start-4",
  "col-span-2 row-span-3 col-start-4 row-start-4",
  "col-span-2 row-span-6 col-start-6 row-start-1",
];

export function LatestBlogCard({
  id,
  index,
  name,
  body,
  date,
  images,
}: {
  id: number;
  index: number;
  name: string;
  body: string;
  date: string;
  images: string[];
}) {
  const [overlay, setOverlay] = useState(false);
  const today = new Date(date);
  return (
    <div
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
      className={`text-white relative p-6 ${styleMapping[index]} hover:z-40 hover:shadow-xl bg-red-700 cursor-pointer transition-transform transform hover:scale-110 duration-300`}
      style={{
        backgroundImage: `url(${images[0]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-4 left-4 z-20">
        <p className="text-white font-bold text-xl uppercase">{name}</p>
        <p className="text-white text-sm">
          {moment(today).format("MMMM Do YYYY")}
        </p>
      </div>

      {overlay && (
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-red-700 opacity-20"></div>
      )}
    </div>
  );
}

export function TeamCard({
  name,
  title,
  bgNumber,
  bgImage,
  description1,
  description2,
}: {
  name: string;
  title: string;
  bgNumber: string;
  bgImage: string;
  description1: string;
  description2: string;
}) {
  return (
    <div className="flex">
      .
      <div className="w-1/2 p-8 bg-gray-100 relative overflow-hidden">
        <div className="text-center mb-8">
          <p className="font-bold text-2xl uppercase">{title}</p>
          <p className="font-semibold font-serif uppercase">{name}</p>
        </div>
        <div className="text-sm z-20 relative">
          <p>{description1}</p>
          <p className="mt-8">{description2}</p>
        </div>
        <p className="text-white font-bold text-center text-[180px] m-auto absolute inset-x-0 bottom-0 -mb-28">
          {bgNumber}
        </p>
      </div>
      <div
        className="w-1/2 "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export function BlogCard({
  name,
  id,
  main_image,
  date,
  description,
}: {
  id: number;
  name: string;
  main_image: string;
  date: string;
  description: string;
}) {
  const normalizedSlug = name ? name.replace(/ /g, "-") : "";
  return (
    <div>
      <Link href={`/blog/${id}/${normalizedSlug}`}>
        <div
          className={`bg-gray-100 w-80 cursor-pointer h-80  relative`}
          style={{
            backgroundImage: `url(${main_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Link>
      <div className="w-80 mt-4">
        <p className="font-bold">{name}</p>
        <p className="text-xs">{moment(date).format("MMM DD YYYY")}</p>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

export function SidebarBlogCard({
  main_image,
  name,
  date,
}: {
  main_image: string;
  name: string;
  date: string;
}) {
  return (
    <div className="flex even:flex-row-reverse">
      <div
        className="relative w-1/2 h-40"
        style={{
          backgroundImage: `url(${main_image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-1/2 flex flex-col justify-center p-4">
        <p className="font-semibold">{name}</p>
        <p className="text-xs">{moment(date).format("MMM DD YYYY")}</p>
      </div>
    </div>
  );
}

export function SidebarSalesCard() {
  return (
    <div
      className="mt-10 bg-gray-100 w-full h-80 flex justify-center flex-col"
      style={{
        backgroundImage: "url(/images/sales/sales-1.png)",
        backgroundPositionX: "150px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pl-6 text-gray-700">
        <p className="font-serif">ELECTRIC GUITARS</p>
        <p className="font-semibold text-4xl font-sans">FOR SALE</p>
        <p className="font-semibold text-5xl font-sans text-red-800">45%</p>
        <div className="mt-4">
          <PrimaryButton name="VIEW SHOP NOW" url="" />
        </div>
      </div>
    </div>
  );
}
