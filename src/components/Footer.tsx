import React from "react";
import Logo from "@/utils/Logo";
import mailImg from "../../public/assets/footer-msg.png";
import phoneImg from "../../public/assets/footer-phone.png";
import Image from "next/image";
import Button from "@/utils/Button";

type FooterData = {
  [key: string]: string[];
};

const footerData: FooterData = {
  links: ["Home", "About Us", "Bookings", "Blog"],
  legal: ["Terms of Use", "Privacy Policy", "Reviews"],
  product: ["Take Tour", "Live Chat", "Reviews"],
};

const Footer: React.FC = () => {
  return (
    <main className="h-[80vh] lg:w-[1180px] mx-auto my-20">
      <div className=" grid grid-cols-6 ">
        <ul className="flex gap-y-5 flex-col ">
          <li>
            <Logo />
          </li>
          <li className="flex items-center capitalize gap-3">
            <Image src={mailImg} width={24} height={24} alt="mail" />
            <span className="font-semibold text-gray-600">help@Frybix.com</span>
          </li>
          <li className="flex items-center capitalize gap-3">
            <Image src={phoneImg} width={24} height={24} alt="phone" />
            <span className="font-semibold text-gray-600">
              +1 234 456 678 89
            </span>
          </li>
        </ul>

        {Object.keys(footerData).map((key, index) => (
          <ul key={index} className="flex gap-y-5 flex-col col-span-1">
            <li className="font-bold capitalize text-3xl tracking-wider">
              {key}
            </li>
            {footerData[key].map((item, subIndex) => (
              <li
                key={subIndex}
                className="capitalize font-semibold text-gray-600"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}

        <ul className="flex gap-y-5 flex-col col-span-1">
          <li className="font-bold capitalize text-3xl tracking-wider">
            Newsletter
          </li>
          <li className="font-semibold text-gray-600">Stay Up To Date</li>
          <li>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 border rounded-l-md w-full"
              />
            </form>
          </li>
        </ul>
        <ul className="self-end mb-14">
          <Button text="Subscribe" className="" icon={false} />
        </ul>
      </div>
      <div className="col-span-6 mt-28">
        <div className="relative mt-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
        <div className="text-center mt-10  text-xl tracking-wider text-gray-600">
          Copyright by jagmeetsingh2921@gmail.com
        </div>
      </div>
    </main>
  );
};

export default Footer;
