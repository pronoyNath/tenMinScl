import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const InstructorInfo = ({ courseData }: { courseData: any }) => {
  if (!courseData?.sections) return null;

  const instructorSection = courseData.sections.find(
    (section: any) => section.type === "instructors"
  );

  const instructors = instructorSection?.values || [];

  return (
    <div className="font-fontTwo space-y-5">
      <h2 className="text-xl font-semibold">{instructorSection?.name}</h2>

      <div className="border border-[#e0e4eb] rounded-lg p-4">
        {instructors.map((instructor: any, idx: number) => (
          <div key={idx} className="flex items-center gap-4 ">
            <div>
              {instructor?.image ? (
                <Image
                  className="h-[82px] w-[82px] rounded-full object-cover"
                  src={instructor.image}
                  alt="instructor-img"
                  width={73}
                  height={73}
                />
              ) : (
                <div className="h-[82px] w-[82px] rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm text-gray-500">No Image</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 hover:text-green-500 text-xl font-medium">
                {instructor?.name || "Unnamed Instructor"}{" "}
                <ChevronRight className="text-gray-400" />
              </h3>
              <p
                className="text-base text-gray-600"
                dangerouslySetInnerHTML={{ __html: instructor?.description || "" }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorInfo;
