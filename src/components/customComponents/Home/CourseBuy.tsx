"use client";

import MediaGallery from "../CourseEnroll/MediaGallery";

const CourseBuy = ({ courseData }: { courseData: any }) => {
  return (
    <div>
      {/* <h1>{courseData?.title}</h1> */}
      {/* etc */}
      <MediaGallery media={courseData.media} />
    </div>
  );
};


export default CourseBuy;