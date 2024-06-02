import React from "react";

const Faq = () => {
  return (
    <main className="h-auto lg:s-screen xl:w-[1180px] w-full lg:mx-auto px-10 lg:px-0 lg:my-40 dark:bg-black">
      <div className="flex justify-center flex-col text-center  w-full">
        <h2 className="text-[#FF5555] tracking-widest text-xl uppercase dark:text-[#76e688]">
          FAQ
        </h2>
        <h1 className=" lg:text-[4rem] text-3xl font-bold lg:leading-[60px] dark:text-white">
          Frequently Asked
          <br />
          Questions
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-5  pt-16 w-full ">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          const isHighlighted = item === 1 || item === 4 || item === 5;
          const bgColor = isHighlighted
            ? "lg:bg-[#FF5555] dark:lg:bg-[#76e688] "
            : "lg:bg-white dark:lg:bg-black";
          const textColor = isHighlighted
            ? "lg:text-white"
            : "lg:text-black dark:lg:text-white";

          return (
            <div
              key={item}
              className={` ${
                item % 2 !== 0 ? "bg-[#FF5555]   text-white" : "text-black"
              }   ${bgColor} ${textColor} capitalize w-full lg:h-[181px] p-5 rounded lg:w-[535px] flex items-center flex-col`}
            >
              <h1 className="font-bold lg:text-3xl text-2xl tracking-wider">
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
