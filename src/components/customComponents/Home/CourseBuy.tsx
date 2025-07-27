"use client";

import MediaGallery from "../CourseEnroll/MediaGallery";
import EnrollBtn from "../CourseEnroll/EnrollBtn";
import { Phone } from "lucide-react";
import { CourseData } from "@/types/type";

const CourseBuy = ({ courseData }: { courseData: CourseData }) => {
  return (
    <div>
    <div className="bg-white border font-fontTwo">
      {/* <h1>{courseData?.title}</h1> */}
      {/* etc */}
      <div className="border-6 border-white">
        <MediaGallery media={courseData.media} />
      </div>
      <div className="p-5 space-y-3">
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
    <div>
     <div className="flex items-center justify-between py-3 px-2 text-sm">
       <h3 className=" text-gray-400">কোর্সটি সম্পর্কে বিস্তারিত জানতে</h3>
      <h3 className="flex items-center cursor-pointer gap-1 underline text-green-600">
        <Phone className="h-5 w-5"/>
        ফোন করুন (16910)</h3>
     </div>
    </div>
    </div>
  );
};

export default CourseBuy;
