import Image from "next/image";
import React from "react";
import EnrollBtn from "../CourseEnroll/EnrollBtn";
import Link from "next/link";

const EngageMentSection = ({ courseData }: { courseData: any }) => {
  const section = courseData?.sections?.find(
    (s: any) => s.type === "group_join_engagement"
  );

  if (!section || !section.values?.length) return null;

  const item = section.values[0]; // Assuming only one item for now

  return (
    <div
      className="rounded-xl overflow-hidden my-10"
      style={{
        backgroundImage: `url(${item.background.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="font-fontTwo flex flex-col md:flex-row justify-between items-center gap-6 p-6 md:p-10">
        {/* Left Side */}
        <div className="max-w-xl space-y-4 text-center md:text-left">
          <Image
            src={item?.top_left_icon_img}
            alt="pdf free"
            width={190}
            height={100}
          />
          <h3
            className="text-xl md:text-3xl font-bold"
            style={{ color: item.title_color || "#000" }}
          >
            {item.title}
          </h3>
          <p
            className="text-lg"
            style={{ color: item.description_color || "#444" }}
          >
            {item.description}
          </p>
          <div className="mt-7">
            <Link href={item.cta.clicked_url} target="_blank">
              <EnrollBtn
                className="!w-fit"
                btnTxt={item.cta.text || "Download PDF"}
              />
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full h-full md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[300px] rounded-xl overflow-hidden">
            <Image
              src={item.thumbnail}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngageMentSection;
