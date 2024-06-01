import React from "react";

const Faq = () => {
  return (
    <main className="h-screen lg:w-[1180px] w-full lg:mx-auto my-40">
      <div className="flex justify-center flex-col text-center lg:text-left w-full">
        <h2 className="text-[#FF5555] tracking-widest text-xl uppercase">
          FAQ
        </h2>
        <h1 className="text-black lg:text-[4rem] text-xl font-bold leading-[60px]">
          Frequently Asked
          <br />
          Questions
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-16 w-full mx-20 lg:mx-0">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          const isHighlighted = item === 1 || item === 4 || item === 5;
          const bgColor = isHighlighted ? "lg:bg-[#FF5555]" : "lg:bg-white";
          const textColor = isHighlighted ? "lg:text-white" : "lg:text-black";

          return (
            <div
              key={item}
              className={` ${
                item % 2 !== 0 ? "bg-[#FF5555] text-white" : "text-black"
              }   ${bgColor} ${textColor} capitalize w-full h-[181px] p-5 rounded lg:w-[535px] flex items-center flex-col`}
            >
              <h1 className="font-bold text-3xl tracking-wider">
                The best financial accounting app ever!
              </h1>
              <h2 className="tracking-widest mt-2">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </h2>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Faq;
