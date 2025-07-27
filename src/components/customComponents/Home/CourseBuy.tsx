"use client";

import MediaGallery from "../CourseEnroll/MediaGallery";

const CourseBuy = ({ courseData }: { courseData: any }) => {
  return (
    <div className="bg-white border">
      {/* <h1>{courseData?.title}</h1> */}
      {/* etc */}
      <div className="border-6 border-white">
      <MediaGallery media={courseData.media} />
      </div>
    </div>
  );
};

export default CourseBuy;
