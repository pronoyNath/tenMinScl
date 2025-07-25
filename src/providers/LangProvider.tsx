"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type LangType = "en" | "bn";
type LangContextType = {
  lang: LangType;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({
  lang,
  children,
}: {
  lang: LangType;
  children: ReactNode;
}) => {
  const router = useRouter();

  const toggleLang = () => {
    const newLang = lang === "en" ? "bn" : "en";
    Cookies.set("lang", newLang, { expires: 7 });
    router.refresh(); // SSR reload
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};
