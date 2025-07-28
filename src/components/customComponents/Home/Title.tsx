import { CourseData } from "@/types/type";
import React from "react";
import MediaCarousel from "../CourseEnroll/MediaGallery";
import EnrollBtn from "../CourseEnroll/EnrollBtn";

const Title = ({ courseData }: { courseData: CourseData }) => {
  const bgImage =
    "https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg";

  return (
    <div
      className=" font-fontTwo relative bg-cover bg-center text-white py-0 px-0 xl:py-6 xl:px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="block xl:hidden p-5">
        <MediaCarousel media={courseData.media} />
      </div>
      {/* main title of course  */}
     <div className="p-0 xl:p-8">
       <div className="absolute inset-0  bg-opacity-50 z-0" />
      <div className="container mx-auto px-2 md:px-10 xl:px-20 ">
        <div className=" text-center xl:text-left  py-5 relative z-10  max-w-3xl lg:w-full xl:max-w-3xl mx-0 lg:mx-auto xl:mx-0 space-y-4">
          <h1 className="font-fontTwo text-center xl:text-left  text-xl md:text-4xl font-bold">
            {courseData?.title}
          </h1>
          <div className="flex flex-col md:flex-row w-full justify-center xl:justify-start items-center gap-2">
            <img
              src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
              alt=""
            />
            <h2>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</h2>
          </div>
          <div
            className="text-sm lg:text-base !text-[#A3A3A3]"
            dangerouslySetInnerHTML={{ __html: courseData?.description || "" }}
          />
        </div>
      </div>
     </div>
       <div className="block xl:hidden p-5 space-y-3 bg-white text-black">
        <div className="flex items-center gap-4  py-3">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold font-fontTwo">৳ 3850</h3>
            <h3 className="line-through">৳5000</h3>
          </div>

          <div className="c-Tukmu inline-block">
            <p className="card-price font-fontTwo">1150 ৳ ছাড়</p>
          </div>
        </div>
        <div>
          <EnrollBtn btnTxt={courseData?.cta_text?.name} />
        </div>
        <div className="font-fontTwo mt-10 ">
          <div className="font-fontTwo mt-10">
            <h3 className="font-semibold text-lg mb-3">এই কোর্সে যা থাকছে</h3>
            {/* course facilities  */}
            <ul className="space-y-2">
              {courseData?.checklist
                ?.filter((item) => item.list_page_visibility)
                .map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <img src={item.icon} alt="icon" className="w-5 h-5" />
                    <span>{item.text}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
