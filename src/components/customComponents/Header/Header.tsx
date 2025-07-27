import LangToggleButton from "./LangToggleButton";
import Image from "next/image";

const Header = () => {
  return (
    <header className="  w-full px-10 py-3 border-b">
      <div className="container mx-auto bg-background flex items-center justify-between">
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
