import { Carousel } from "flowbite-react";
import Image from "next/image";
import hero1 from "../../../public/images/hero-1.jpeg";
import hero2 from "../../../public/images/hero-2.jpeg";
import hero3 from "../../../public/images/hero-3.jpeg";
export default function Hero() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400">
          <Image
            alt="hero 1"
            src={hero1}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <p className="text-white z-10">Slide 1</p>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image
            alt="hero 2"
            src={hero2}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <p className="text-white z-10">Slide 2</p>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image
            alt="hero 3"
            src={hero3}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <p className="text-white z-10">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
}
