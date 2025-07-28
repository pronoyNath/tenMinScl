import dynamic from "next/dynamic";

import { getIeltsCourse } from "@/hooks/getIeltsCourse";
import Header from "@/components/customComponents/Header/Header";
const CourseDetails = dynamic(
  () => import("@/components/customComponents/Home/CourseDetails"),
  { loading: () => <Loader /> }
);

const EnrollContent = dynamic(
  () => import("@/components/customComponents/EnrollContent"),
  { loading: () => <Loader /> }
);
import { cookies } from "next/headers";
import Title from "@/components/customComponents/Home/Title";
import Loader from "@/components/customComponents/Loader";

export default async function HomePage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "bn";

  const courseData = await getIeltsCourse(lang);

  return (
    <div>
      <Header />
      <div>
        <Title courseData={courseData} />
      </div>
      <div className="container px-2 md:px-10 xl:px-20  mx-auto grid grid-cols-1 xl:grid-cols-3 items-start justify-between gap-12 py-10">
        <div className="col-span-1 xl:col-span-2 ">
          <CourseDetails courseData={courseData} />
        </div>
        <div className="col-span-1 mt-0 xl:-mt-[300px] min-h-full">
          <EnrollContent courseData={courseData} />
        </div>
      </div>
      <div className="bg-black w-full text-white py-7 text-center px-2">
        2015 - 2025 Copyright © 10 Minute School. All rights reserved.
      </div>
    </div>
  );
}
