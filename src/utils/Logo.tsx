import Image from "next/image";
import Img1 from "../../public/assets/logo-fire.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src={Img1} alt="logo" height={34} width={34} className="mr-1" />
      <h2 className="text-[34px] font-bold leading-3 dark:text-[#76e688]">
        uifry
      </h2>
    </div>
  );
};

export default Logo;
