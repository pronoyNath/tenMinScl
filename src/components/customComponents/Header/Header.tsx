// import DummyCourseLogger from "./Chekcing";
import LangToggleButton from "./LangToggleButton";

const Header = () => {
    
  return (
    <header className="  w-full px-10 py-3 border-b">
      <div className="container mx-auto bg-background flex items-center justify-between">
      <div className="text-xl font-bold text-primary">10MinSchool</div>
      <LangToggleButton />
      {/* <DummyCourseLogger/> */}
      </div>
    </header>
  );
};

export default Header;
