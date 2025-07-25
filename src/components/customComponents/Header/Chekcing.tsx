"use client";

import { useIeltsCourse } from "@/hooks/useIeltsCourse";
import { useEffect } from "react";


const DummyCourseLogger = () => {
  const course = useIeltsCourse();

  useEffect(() => {
    if (course) {
      console.log("IELTS Course Data:", course);
    }
  }, [course]);

  return <div>Check console for IELTS course data...</div>;
};

export default DummyCourseLogger;
