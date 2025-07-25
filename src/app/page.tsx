import { getIeltsCourse } from "@/hooks/getIeltsCourse";
import Header from "@/components/customComponents/Header/Header";
import CourseDetails from "@/components/customComponents/Home/CourseDetails";
import CourseBuy from "@/components/customComponents/Home/CourseBuy";
import { cookies } from "next/headers";

export default async function HomePage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "bn";

  const courseData = await getIeltsCourse(lang);

  return (
    <div>
      <Header />
      <div className="container mx-auto grid grid-cols-3 items-start justify-between gap-5 py-10">
        <div className="border col-span-2">
          <CourseDetails courseData={courseData} />
        </div>
        <div className="border col-span-1">
          <CourseBuy courseData={courseData} />
        </div>
      </div>
    </div>
  );
}
