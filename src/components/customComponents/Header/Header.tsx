import LangToggleButton from "./LangToggleButton";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b px-10 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src="/logo/10mslogo-svg.svg"
          alt="10MinSchool Logo"
          width={150}
          height={40}
        />
        <LangToggleButton />
      </div>
    </header>
  );
};

export default Header;
