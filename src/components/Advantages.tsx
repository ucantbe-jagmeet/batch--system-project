import Img from "../../public/assets/featuresIphone.png";
import Image from "next/image";
import ColorDrop from "../../public/assets/color-ring.png";
import BellIcon from "../../public/assets/bell-icon.png";

const Advantages = () => {
  return (
    <div className="relative h-screen grid grid-flow-col grid-cols-7 lg:w-[1180px] mx-auto my-10 overflow-hidden ">
      <div className="col-span-3 flex flex-col justify-center ">
        <div>
          <h2 className="text-[#FF5555] tracking-widest text-xl">Advantages</h2>
          <h1 className="text-black text-[3rem]  font-extrabold">
            why choose Uifry?
          </h1>
        </div>
        <div className="mt-5">
          <h2 className="flex items-center">
            <Image
              src={BellIcon}
              alt="img"
              width={28}
              height={28}
              className="mr-2"
            />
            <span className="font-bold text-lg">Clever Notifications</span>
          </h2>
          <p className="my-5 text-gray-500 tracking-widest leading-7 capitalize">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
      <div className="relative col-span-4  z-2">
        <div className="absolute z-20 scale-125 transform">
          <Image
            src={Img}
            width={800}
            height={900}
            alt="Iphone 13"
            className=""
          />
        </div>
        <div className="absolute -top-10 left-140 transform rotate-45 -translate-x-20 -translate-y-20 w-[700px] h-[800px] scale-100 z-0">
          <Image
            src={ColorDrop}
            alt="ColorDrop"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
