"use client";
import { PrimaryButton } from "./buttons";
import { LuDiamond } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

export function SeasonalSaleBanner({
  imageBgUrl,
  mainImageUrl,
  preHeader,
  header,
  description,
  textColor,
  saleProductsUrl,
}: {
  imageBgUrl: string | StaticImageData;
  mainImageUrl: string | StaticImageData;
  preHeader: string;
  header: string;
  description: string;
  textColor: string;
  saleProductsUrl: string;
}) {
  return (
    <>
      <div className="relative">
        <Image
          alt="seasonal sale"
          src={imageBgUrl}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="wrapper h-full flex gap-10 justify-center items-center">
          <Image
            className="w-[220px] z-20 w-1/3"
            src={mainImageUrl}
            alt=""
            placeholder="blur"
          />
          <div className="flex gap-2 w-1/3 py-10">
            <div className={`z-20 ${textColor}`}>
              <p className="text-xs font-serif">{preHeader}</p>
              <h3 className="text-3xl font-semibold uppercase mt-2 mb-6 w-1/2">
                {header}
              </h3>
              <p className="text-sm leading-6">{description}</p>
              <div className="flex gap-2 my-6">
                <LuDiamond className="text-xs font-bold" />
                <LuDiamond className="text-xs font-bold" />
                <LuDiamond className="text-xs font-bold" />
              </div>
              <PrimaryButton name="BUY NOW" url="" />
            </div>
          </div>
        </div>
        <div className="absolute bg-red-800 z-10 top-0 left-0 right-0 bottom-0 opacity-80"></div>
      </div>
    </>
  );
}

export function PageHeroBanner({ title }: { title: string }) {
  return (
    <div
      className="page-banner  font-semibold relative"
      style={{
        backgroundImage: "url(/images/banners/seasonal-banner-1.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="wrapper h-48 text-white flex flex-col justify-center z-20 relative">
        <h1 className="uppercase text-xl">{title}</h1>
        <div className="flex gap-2 text-sm pt-2">
          <Link className="text-gray-300 hover:text-red-800" href="/">
            Home{" "}
          </Link>
          <p className="text-gray-300">•</p>
          <p>{title}</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-80"></div>
    </div>
  );
}

export function ProductsSalesBanner() {
  return (
    <div className="h-[250px] flex">
      <div
        className="bg-gray-100 w-3/5 p-10"
        style={{
          backgroundImage: "url(/images/products/electric-guitar-3.png)",
          backgroundPosition: "right bottom",
          backgroundSize: "25%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-serif text-xl font-semibold uppercase">
          TOP 10 SALE
        </p>
        <p className="text-2xl font-semibold uppercase mb-10">
          Fender Electric Guitars - 2024
        </p>
        <PrimaryButton name="VIEW SHOP NOW" url="" />
      </div>
      <div
        className="bg-white p-10 w-2/5"
        style={{
          backgroundImage: "url(/images/products/electric-guitar-1.png)",
          backgroundPosition: "right bottom",
          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-serif text-xl font-semibold uppercase">EPHIPHONE</p>
        <p className="text-2xl font-semibold uppercase">SALE UP TO</p>
        <p className="text-2xl font-semibold text-red-800 mb-10">45%</p>
        <PrimaryButton name="VIEW SHOP NOW" url="" />
      </div>
    </div>
  );
}
