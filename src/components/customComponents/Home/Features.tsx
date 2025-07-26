import Image from "next/image";
import React from "react";

const Features = ({ courseData }: { courseData: any }) => {
  if (!courseData?.sections) return null;

  const featuresSection = courseData.sections.find(
    (section: any) => section.type === "features"
  );

  const features = featuresSection?.values || [];

  return (
    <div className="font-fontTwo space-y-5">
      <h2 className="text-xl font-semibold">{featuresSection?.name}</h2>

      <div className="bg-[#111827] text-white grid grid-cols-1 md:grid-cols-2  rounded-lg">
        {features.map((feature: any) => (
          <div
            key={feature.id}
            className="flex items-start gap-4 p-7 rounded-xl"
          >
            <Image
              src={feature.icon}
              alt="feature-icon"
              width={32}
              height={32}
              className="object-contain"
            />
            <div>
              <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-[#9CA3AF]">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
