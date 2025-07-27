import { CourseData } from "@/types/type";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const ExclusiveFeature = ({ courseData }: { courseData: CourseData }) => {
  const section = courseData?.sections?.find(
    (sec) => sec.type === "feature_explanations"
  );

  if (!section) return null;

  return (
    <div className="font-fontTwo">
      <h3 className="text-2xl font-semibold">{section?.name}</h3>
      <div className="space-y-6  p-5 border rounded-xl mt-5">
        {section.values?.map((item, index) => (
          <div
            key={item.id}
            className={`flex justify-between items-start gap-6 pb-6 ${
              index !== section.values.length - 1 ? "border-b" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 space-y-3">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <ul className="space-y-2">
                {item.checklist?.map((point: any, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-600 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div className="w-[200px] min-w-[200px]">
              <Image
                src={item.file_url}
                alt={item.title}
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveFeature;
