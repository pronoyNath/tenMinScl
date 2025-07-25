"use client";

const CourseDetails = ({ courseData }: { courseData: any }) => {
  return (
    <div>
      <h1>{courseData?.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: courseData?.description || "" }}
      />
    </div>
  );
};

export default CourseDetails;
