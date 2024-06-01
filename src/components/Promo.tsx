import Image from "next/image";
import Img from "../../public/assets/promo.png";
import ColorDrop from "../../public/assets/color-ring.png";

const Promo = () => {
  return (
    <main className="relative lg:w-[1180px] mx-auto h-screen flex items-center justify-center z-5">
      <Image src={Img} width={1180} height={800} alt="Img" className="z-10" />
      <div className="absolute -top-[150px] -left-[300px] transform translate-x-1 translate-y-1 w-[600px] h-[600px] scale-115 z-0">
        <Image
          src={ColorDrop}
          alt="ColorDrop"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </main>
  );
};

export default Promo;
