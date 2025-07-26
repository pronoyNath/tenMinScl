"use client";

import Features from "./Features";
import InstructorInfo from "./InstructorInfo";

const CourseDetails = ({ courseData }: { courseData: any }) => {
  return (
    <div className="px-12 space-y-10">
      <InstructorInfo courseData={courseData} />
      <Features courseData={courseData}/>
    </div>
  );
};

export default CourseDetails;
