import React from "react";
import Img1 from "../../public/assets/testimonial-img.png";
import Img2 from "../../public/assets/testimonial-img2.png";
import ColorDrop from "../../public/assets/color-ring.png";

import Image from "next/image";
const Testimonials = () => {
  return (
    <main className="h-screen w-[1180px] mx-auto">
      <div className="flex justify-center flex-col  items-center mb-10">
        <h2 className="text-[#FF5555] tracking-widest text-xl uppercase">
          Testimonials
        </h2>
        <h1 className="text-black text-[4rem] font-bold leading-[60px]">
          What Our Users <br />
          Say About Us ?
        </h1>
      </div>
      <div className="relative flex">
        <div className="relative w-1/2 ">
          <div className="relative z-10">
            <Image
              src={Img1}
              width={800}
              height={900}
              alt="Iphone 13"
              className="scale-125 transform"
            />
          </div>
          <div className="absolute -top-10 left-140 transform rotate-45 -translate-x-20 -translate-y-20 w-[700px] h-[800px] scale-115 z-0">
            <Image
              src={ColorDrop}
              alt="ColorDrop"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center  relative w-1/2 pl-20">
          <h1 className="text-black text-[2rem] font-bold capitalize leading-10 mb-4">
            the best financial accounting app ever!
          </h1>
          <p className="tracking-wide text-xl text-gray-500">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="mt-5">
            <h2 className="flex  flex-col">
              <Image
                src={Img2}
                alt="img"
                width={200}
                height={40}
                className="my-5"
              />
              <span className="font-bold text-lg">Nick Jonas</span>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
