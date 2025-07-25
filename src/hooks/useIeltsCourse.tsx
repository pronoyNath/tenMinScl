"use client";

import { useLang } from "@/providers/LangProvider";
import { useEffect, useState } from "react";

type IeltsCourseData = {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: any[];
  checklist: any[];
  seo: {
    title: string;
    description: string;
    image: string;
    canonical: string;
  };
  cta_text: any;
  sections: any[];
};

export const useIeltsCourse = () => {
  const { lang } = useLang();
  const [course, setCourse] = useState<IeltsCourseData | null>(null);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await fetch(
          `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
          {
            headers: {
              "X-TENMS-SOURCE-PLATFORM": "web",
              Accept: "application/json",
            },
          }
        );

        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error("Failed to fetch IELTS course:", error);
      }
    };

    getCourse();
  }, [lang]);

  return course;
};
