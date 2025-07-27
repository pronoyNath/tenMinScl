"use client";

import { CourseData } from "@/types/type";
import CourseDetailsSection from "./CourseDetailsSection";
import EngageMentSection from "./EngageMentSection";
import Features from "./Features";
import InstructorInfo from "./InstructorInfo";
import WhatWillLearn from "./WhatWillLearn";
import ExclusiveFeature from "./ExclusiveFeature";

const CourseDetails = ({ courseData }: { courseData: CourseData }) => {
  return (
    <div className=" space-y-14">
      <InstructorInfo courseData={courseData} />
      <Features courseData={courseData} />
      <EngageMentSection courseData={courseData} />
      <WhatWillLearn courseData={courseData}/>
      <CourseDetailsSection courseData={courseData} />
      <ExclusiveFeature courseData={courseData}/>

    </div>
  );
};

export default CourseDetails;
