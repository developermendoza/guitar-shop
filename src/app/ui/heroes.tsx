import Image from "next/image";
import aboutHero from "../../../public/images/about/about-hero.jpeg";
import contactHero from "../../../public/images/contact/map.jpg";

export function AboutHero() {
  return (
    <div>
      <div className="h-[550px] flex justify-center items-center relative overflow-hidden">
        <Image
          alt="about"
          src={aboutHero}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <h1 className="text-white text-6xl font-bold z-10">ABOUT US</h1>
      </div>
    </div>
  );
}

export function ContactHero() {
  return (
    <div className="h-[550px] flex justify-center items-center relative overflow-hidden">
      <Image
        alt="about"
        src={contactHero}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
