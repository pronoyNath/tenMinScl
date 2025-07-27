import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import parse from "html-react-parser";

const CourseDetailsSection = ({ courseData }: { courseData: any }) => {
  const aboutSection = courseData?.sections?.find(
    (section: any) => section.type === "about"
  );

  if (!aboutSection || !aboutSection.values?.length) {
    return null;
  }

  return (
    <div className="font-fontTwo">
      <h3 className=" text-2xl font-semibold">{aboutSection?.name}</h3>
      <div className="p-5 border rounded-xl mt-5">
        <Accordion
          type="single"
          collapsible
          defaultValue={aboutSection?.values[0]?.id}
        >
          {aboutSection.values.map((item: any, index: number) => {
            const isLast = index === aboutSection.values.length - 1;
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={`!border-dashed !border-gray-300 ${
                  !isLast ? "!border-b" : ""
                }`}
              >
                <AccordionTrigger className="text-lg hover:no-underline">
                  {parse(item.title)}
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-[#4F5866] !text-lg font-fontThree">
                  {parse(item.description)}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseDetailsSection;
