import Image from "next/image";
import React from "react";

const Title = ({ courseData }: { courseData: any }) => {
  const bgImage =
    "https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg";

  return (
    <div
      className=" font-fontTwo relative bg-cover bg-center text-white py-16 px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0  bg-opacity-50 z-0" />
      <div className="container mx-auto px-20">
        <div className=" py-5 relative z-10  max-w-3xl  space-y-4">
          <h1 className="font-fontTwo text-3xl md:text-4xl font-bold">
            {courseData?.title}
          </h1>
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
              alt=""
            />
            <h2>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</h2>
          </div>
          <div
            className="text-base md:text-base !text-[#A3A3A3]"
            dangerouslySetInnerHTML={{ __html: courseData?.description || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
