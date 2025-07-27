import { getIeltsCourse } from "@/hooks/getIeltsCourse";
import Header from "@/components/customComponents/Header/Header";
import CourseDetails from "@/components/customComponents/Home/CourseDetails";
import CourseBuy from "@/components/customComponents/Home/CourseBuy";
import { cookies } from "next/headers";
import Title from "@/components/customComponents/Home/Title";

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
      <div className="container px-20  mx-auto grid grid-cols-3 items-start justify-between gap-12 py-10">
        <div className=" col-span-2 ">
          <CourseDetails courseData={courseData} />
        </div>
        <div className="col-span-1 -mt-[300px] min-h-full">
          <div className="sticky top-10">
            <CourseBuy courseData={courseData} />
          </div>
        </div>
      </div>
    </div>
  );
}
