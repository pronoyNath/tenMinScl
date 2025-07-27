"use client";

import CourseDetailsSection from "./CourseDetailsSection";
import EngageMentSection from "./EngageMentSection";
import Features from "./Features";
import InstructorInfo from "./InstructorInfo";

const CourseDetails = ({ courseData }: { courseData: any }) => {
  return (
    <div className=" space-y-14">
      <InstructorInfo courseData={courseData} />
      <Features courseData={courseData}/>
      <EngageMentSection courseData={courseData}/>

      <CourseDetailsSection courseData={courseData}/>

      <div className="bg-red-200 min-h-screen"></div>
    </div>
  );
};

export default CourseDetails;
