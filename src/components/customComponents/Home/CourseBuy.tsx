"use client";

import MediaGallery from "../CourseEnroll/MediaGallery";
import EnrollBtn from "../CourseEnroll/EnrollBtn";
import { Phone } from "lucide-react";
import { CourseData } from "@/types/type";
import { useEffect, useRef, useState } from "react";

const CourseBuy = ({ courseData }: { courseData: CourseData }) => {
  const [showSticky, setShowSticky] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* DESKTOP ONLY */}
      <div className="bg-white border font-fontTwo hidden xl:block">
        <div className="border-6 border-white">
          <MediaGallery media={courseData.media} />
        </div>
        <div className="p-5  space-y-3">
          <div className="flex items-center gap-4 py-3">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold font-fontTwo">৳ 3850</h3>
              <h3 className="line-through">৳5000</h3>
            </div>
            <div className="c-Tukmu inline-block">
              <p className="card-price font-fontTwo">1150 ৳ ছাড়</p>
            </div>
          </div>
          <EnrollBtn btnTxt={courseData?.cta_text?.name} />
          <div className="font-fontTwo mt-10">
            <h3 className="font-semibold text-lg mb-3">এই কোর্সে যা থাকছে</h3>
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

      {/* HIDDEN REF — for observing position (mobile/tab only) */}
      <div ref={observerRef} className="xl:hidden w-full h-1" />

      {/* MOBILE/TAB STICKY BOTTOM */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md sticky-popup xl:hidden px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold font-fontTwo">৳ 3850</h3>
                <h3 className="line-through text-sm text-gray-500">৳5000</h3>
              </div>
              <p className="card-price font-fontTwo text-sm mt-1">1150 ৳ ছাড়</p>
            </div>
            <EnrollBtn btnTxt={courseData?.cta_text?.name} />
          </div>
        </div>
      )}

      {/* PHONE CTA — always shown */}
      <div className="flex items-center justify-between py-3 px-2 text-sm">
        <h3 className="text-gray-400">কোর্সটি সম্পর্কে বিস্তারিত জানতে</h3>
        <h3 className="flex items-center cursor-pointer gap-1 underline text-green-600">
          <Phone className="h-5 w-5" />
          ফোন করুন (16910)
        </h3>
      </div>
    </div>
  );
};

export default CourseBuy;
