import Image from "next/image";
import { PrimaryButton } from "../ui/buttons";
import landingAbout from "../../../public/images/about/landing-about.jpeg";

export default function About() {
  return (
    <div className="h-[800px] mt-20 flex flex-col justify-center items-center relative">
      <Image
        alt="about"
        src={landingAbout}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="wrapper z-20">
        <h2 className="text-black uppercase text-center font-serif font-bold text-[80px] ">
          SK STORE
        </h2>
        <p className="text-center max-w-2xl m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          inventore consequuntur ipsa fuga sunt cumque, accusamus totam repellat
          illum quaerat alias molestiae modi sequi tempore. Consequatur beatae
          non placeat maxime. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius perferendis non quisquam ipsam, libero,
          explicabo dolorum dolorem modi in mollitia, placeat iusto officiis?
          Vel, itaque sed nobis quaerat ratione molestias.
        </p>
        <div className="text-center mt-8">
          <PrimaryButton name="READ MORE" url="" />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-40 z-10"></div>
    </div>
  );
}
