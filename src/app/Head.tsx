import { getIeltsCourse } from "@/hooks/getIeltsCourse";
import { cookies } from "next/headers";

export default async function Head() {
  const lang = ((await cookies()).get("lang")?.value || "en") as "en" | "bn";
  const data = await getIeltsCourse(lang);
  const seo = data?.seo;

  return (
    <>
      <title>{seo?.title || "IELTS Course by Munzereen Shahid"}</title>
      <meta name="description" content={seo?.description || ""} />
      {seo?.keywords && (
        <meta name="keywords" content={seo.keywords.join(", ")} />
      )}

      {seo?.defaultMeta?.map((meta: any, i: number) =>
        meta.type === "property" ? (
          <meta key={i} property={meta.value} content={meta.content} />
        ) : (
          <meta key={i} name={meta.value} content={meta.content} />
        )
      )}

      {seo?.schema?.map(
        (item: any, i: number) =>
          item.meta_value && (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: item.meta_value }}
            />
          )
      )}


    </>
  );
}
