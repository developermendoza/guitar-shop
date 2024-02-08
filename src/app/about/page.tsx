import { PageHeroBanner } from "../ui/banner";
import { TeamCard } from "../ui/cards";
import { AboutHero } from "../ui/heroes";
import aboutus1 from "../../../public/images/about/about-us-1.jpeg";
import aboutus2 from "../../../public/images/about/about-us-2.jpeg";
import landingAbout from "../../../public/images/about/landing-about.jpeg";
import aboutauthor from "../../../public/images/about/about-author.jpeg";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <div
        className="wrapper flex w-[1000px] z-10 relative"
        style={{ marginTop: "-100px" }}
      >
        <div className="bg-gray-200 w-1/2 p-10 text-sm text-gray-700">
          <p className="font-bold uppercase text-3xl text-black text-center mb-10">
            WHO WE ARE
          </p>
          <p className="mb-8 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            eveniet, labore ea neque veritatis aliquam ut ratione provident
            error voluptates quibusdam repudiandae.
          </p>
          <p className="mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            eveniet, labore ea neque veritatis aliquam ut ratione provident
            error voluptates quibusdam repudiandae.Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quis eveniet, labore ea neque
            veritatis aliquam ut ratione provident error voluptates quibusdam
            repudiandae.
          </p>
          <p className="mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            eveniet, labore ea neque veritatis aliquam ut ratione provident
            error voluptates quibusdam repudiandae.Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quis eveniet, labore ea neque
            veritatis aliquam ut ratione provident error voluptates quibusdam
            repudiandae.
          </p>
          <p className="mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            eveniet, labore ea neque veritatis aliquam ut ratione provident
            error voluptates quibusdam repudiandae.Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quis eveniet, labore ea neque
            veritatis aliquam ut ratione provident error voluptates quibusdam
            repudiandae.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            eveniet, labore ea neque veritatis aliquam ut ratione provident
            error voluptates quibusdam repudiandae.
          </p>
        </div>
        <div className="w-1/2">
          <div className="h-[400px] relative">
            <Image
              alt="about us 1"
              src={aboutus1}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="h-[400px] relative">
            <Image
              alt="about us 2"
              src={aboutus2}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <Image
          alt="holding guitars in the air"
          src={landingAbout}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="wrapper z-20 flex items-center">
          <Image
            alt="author"
            src={aboutauthor}
            quality={100}
            className="h-96 -mr-10 z-30 w-auto"
          />
          <div className="p-10 pl-20 text-sm w-2/5 bg-white text-gray-700">
            <p className="font-bold uppercase text-3xl text-black text-center mb-10">
              WHY CHOOSE US
            </p>
            <p className="mb-8 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              eveniet, labore ea neque veritatis aliquam ut ratione provident
              error voluptates quibusdam repudiandae.
            </p>
            <p className="mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              eveniet, labore ea neque veritatis aliquam ut ratione provident
              error voluptates quibusdam repudiandae.Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quis eveniet, labore ea neque
              veritatis aliquam ut ratione provident error voluptates quibusdam
              repudiandae.
            </p>
            <p className="mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              eveniet, labore ea neque veritatis aliquam ut ratione provident
              error voluptates quibusdam repudiandae.Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quis eveniet, labore ea neque
              veritatis aliquam ut ratione provident error voluptates quibusdam
              repudiandae.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-40 z-10"></div>
      </div>
      <div className="py-20">
        <div className="flex justify-center items-center relative h-56 mb-20">
          <div className="border-8 border-gray-600 h-56 w-28 absolute m-auto" />
          <div className="text-gray-600 text-center bg-white z-20 py-4">
            <h2 className="uppercase text-4xl font-bold">OUR TEAM</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="flex gap-8">
            <TeamCard
              name="LUCY MARY"
              title="FOUNDER"
              bgNumber="01"
              bgImage="/images/team/ceo.jpeg"
              description1="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo blanditiis porro consequuntur minus reprehenderit
                    atque maiores quis, dolorem minima vel dicta aliquid quam,
                    deleniti culpa tempore at, sit facilis laborum?"
              description2="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo blanditiis porro consequuntur minus reprehenderit
                    atque maiores quis, dolorem minima vel dicta aliquid quam,
                    deleniti culpa tempore at, sit facilis laborum?"
            />
            <TeamCard
              name="ALEX KIM"
              title="SALES DIRECTOR"
              bgNumber="02"
              bgImage="/images/team/sales-director.jpeg"
              description1="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo blanditiis porro consequuntur minus reprehenderit
                    atque maiores quis, dolorem minima vel dicta aliquid quam,
                    deleniti culpa tempore at, sit facilis laborum?"
              description2="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo blanditiis porro consequuntur minus reprehenderit
                    atque maiores quis, dolorem minima vel dicta aliquid quam,
                    deleniti culpa tempore at, sit facilis laborum?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
