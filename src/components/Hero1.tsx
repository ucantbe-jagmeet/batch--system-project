import Button from "@/utils/Button";
import Navbar from "@/utils/Navbar";
import React from "react";
import Image from "next/image";

import PlayIcon from "../../public/assets/play-icon.png";
import Iphone1 from "../../public/assets/iphone-1.png";
import Iphone2 from "../../public/assets/iphone-2.png";
import Iphone3 from "../../public/assets/iphone-3.png";
import Rings from "../../public/assets/rings3.png";
import ColorDrop from "../../public/assets/color-ring.png";
import Strip from "../../public/assets/strip.png";

const Hero = () => {
  return (
    <main className="h-[150vh] w-full pt-10  ">
      <Navbar />
      <div className="grid col-span-7 grid-flow-col lg:w-[1180px] mx-auto">
        <div className="relative col-span-2 grid gap-y-9 my-20">
          <h1 className="font-bold text-[4rem] leading-tight">
            Make The Best
            <br /> Financial Decisions
          </h1>

          <p className="text-xl">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet{" "}
            <br />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex ">
            <Button text="Get Started" icon={true} className="mr-5" />
            <button
              className="flex items-center justify-center w-44 h-[3.75rem rounded cursor-pointer"
              type="button"
            >
              <Image src={PlayIcon} width={30} height={30} alt="play icon" />
              <h2 className="text-xl ml-2">Watch Video</h2>
            </button>
          </div>
          <div className="absolute w-full h-full transform -rotate-3 translate-x-10 -translate-y-20 scale-110 -z-10">
            <Image
              src={ColorDrop}
              alt="ColorDrop"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="absolute w-full h-full transform  translate-x-0 translate-y-[450px] scale-150 ">
            <Image
              src={Strip}
              alt="ColorDrop"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="col-span-5 image-container ">
          <Image src={Iphone1} width={500} height={700} alt="Iphone 13" />
          <Image src={Iphone2} width={500} height={700} alt="Iphone 13" />
          <Image src={Iphone3} width={500} height={700} alt="Iphone 13" />
          <Image src={Rings} width={500} height={700} alt="Rings" />
          <Image src={ColorDrop} width={500} height={700} alt="Color" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
