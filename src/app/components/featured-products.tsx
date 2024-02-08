"use client";
import { MdOutlineLibraryMusic } from "react-icons/md";
import SectionHeader from "./section-header";
import Carousel from "react-multi-carousel";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { Button } from "flowbite-react";
import { PrimaryButton } from "../ui/buttons";

import { IoMdEye } from "react-icons/io";

import "react-multi-carousel/lib/styles.css";
import product1 from "../../../public/images/products/product-1.jpeg";
import product2 from "../../../public/images/products/product-2.jpeg";
import product3 from "../../../public/images/products/product-3.jpeg";
import product4 from "../../../public/images/products/product-4.jpeg";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionHeader
          title1="featured"
          title2="products"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          praesentium amet nulla eaque deserunt nesciunt quis, eveniet est
          aperiam, sed ab, alias molestias!"
        />
      </div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        // containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        afterChange={(previousSlide, { currentSlide, onMove }) => {
          console.log("test", currentSlide);
        }}
        // focusOnSelect={currentItem}
        // responsive={{
        //   desktop: {
        //     breakpoint: {
        //       max: 3000,
        //       min: 1024,
        //     },
        //     items: 3,
        //     partialVisibilityGutter: 40,
        //   },
        //   mobile: {
        //     breakpoint: {
        //       max: 464,
        //       min: 0,
        //     },
        //     items: 1,
        //     partialVisibilityGutter: 30,
        //   },
        //   tablet: {
        //     breakpoint: {
        //       max: 1024,
        //       min: 464,
        //     },
        //     items: 2,
        //     partialVisibilityGutter: 30,
        //   },
        // }}
        rewind={true}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        className="my-12"
      >
        <div className="h-[400px] flex flex-col justify-center items-center">
          <Image
            alt=""
            src={product1}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="z-10">
            <div className="flex gap-2 ">
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <LuShoppingCart className="text-[20px]" />
              </div>
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <FaRegHeart />
              </div>
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <IoMdEye className="text-[25px]" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="font-semibold text-white capitalize">
                guitar title 1
              </p>
              <p className="text-sm text-gray-100">
                Price:{" "}
                <span className="font-semibold text-lg text-white">
                  $599.99
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-[400px] flex flex-col justify-center items-center">
          <Image
            alt=""
            src={product2}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="z-10">
            <div className="flex gap-2">
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <LuShoppingCart className="text-[20px]" />
              </div>
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <FaRegHeart />
              </div>
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <IoMdEye className="text-[25px]" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="font-semibold text-white capitalize">
                guitar title 2
              </p>
              <p className="text-sm text-gray-100">
                Price:{" "}
                <span className="font-semibold text-lg text-white">
                  $599.99
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-[400px] flex flex-col justify-center items-center">
          <Image
            alt=""
            src={product3}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="z-10">
            <div className="flex gap-2">
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <LuShoppingCart className="text-[20px]" />
              </div>
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <FaRegHeart />
              </div>
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <IoMdEye className="text-[25px]" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="font-semibold text-white capitalize">
                guitar title 3
              </p>
              <p className="text-sm text-gray-100">
                Price:{" "}
                <span className="font-semibold text-lg text-white">
                  $599.99
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-[400px] flex flex-col justify-center items-center">
          <Image
            alt=""
            src={product4}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="z-10">
            <div className="flex gap-2">
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <LuShoppingCart className="text-[20px]" />
              </div>
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <FaRegHeart />
              </div>
              <div className="flex flex-col border-2 border-gray-100 h-10 w-10 justify-center items-center bg-white hover:bg-red-800 hover:text-white cursor-pointer">
                <IoMdEye className="text-[25px]" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="font-semibold text-white capitalize">
                guitar title 4
              </p>
              <p className="text-sm text-gray-100">
                Price:{" "}
                <span className="font-semibold text-lg text-white">
                  $599.99
                </span>
              </p>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="flex justify-center">
        <PrimaryButton name="view all collection" url="/products" />
      </div>
    </section>
  );
}
