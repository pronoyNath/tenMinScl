"use client";

import CourseDetailsSection from "./CourseDetailsSection";
import Features from "./Features";
import InstructorInfo from "./InstructorInfo";

const CourseDetails = ({ courseData }: { courseData: any }) => {
  return (
    <div className=" space-y-10">
      <InstructorInfo courseData={courseData} />
      <Features courseData={courseData}/>
      <CourseDetailsSection courseData={courseData}/>
    </div>
  );
};

export default CourseDetails;
