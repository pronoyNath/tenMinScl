"use client";

import { Button } from "@/components/ui/button";
import { useLang } from "@/providers/LangProvider";

const LangToggleButton = () => {
  const { lang, toggleLang } = useLang();

  return (
    <Button
      onClick={toggleLang}
      variant="outline"
      className="flex items-center gap-2"
    >
      {lang === "en" ? (
        <>
          <span className="text-gray-500 text-xs flex flex-col items-center">
            <span className="mr-4">অ</span> <span className="-mt-1.5">A</span>
          </span>
          বাং
        </>
      ) : (
        <>
          <span className="text-gray-500 text-xs flex flex-col items-center">
            <span className="mr-4">অ</span> <span className="-mt-1.5">A</span>
          </span>
          ENG
        </>
      )}
    </Button>
  );
};

export default LangToggleButton;
