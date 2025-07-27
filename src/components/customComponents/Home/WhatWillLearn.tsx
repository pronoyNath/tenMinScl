import { CourseData } from "@/types/type";
import React from "react";
import { Check } from "lucide-react";

const WhatWillLearn = ({ courseData }: { courseData: CourseData }) => {
  const pointerSection = courseData?.sections?.find(
    (section) => section.type === "pointers"
  );

  const values = pointerSection?.values || [];

  const renderIcon = (iconCode: string) => {
    switch (iconCode) {
      case "0":
        return (
          <div className="w-5 h-5 flex-shrink-0 mt-1 text-blue-600">
            <Check size={20} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-fontTwo">
      <h3 className="text-2xl font-semibold">{pointerSection?.name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-5 border rounded-xl mt-5">
        {values.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white p-4 flex items-start gap-3 ${
              index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2"
            }`}
          >
            {renderIcon(item.icon)}
            <p className="text-black text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWillLearn;
