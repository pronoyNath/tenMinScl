"use server";

export const getIeltsCourse = async (lang: string = "en") => {
  const apiUrl =
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course";

  try {
    const res = await fetch(`${apiUrl}?lang=${lang}`, {
      method: "GET",
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: {
        tags: ["ielts-course"],
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch IELTS course");
    }

    const result =  await res.json();
    return result?.data; 
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
};
