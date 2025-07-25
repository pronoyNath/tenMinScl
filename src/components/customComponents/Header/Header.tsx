import LangToggleButton from "./LangToggleButton";

const Header = () => {
    
  return (
    <header className="w-full px-10 py-3 border-b bg-background flex items-center justify-between">
      <div className="text-xl font-bold text-primary">10MinSchool</div>
      <LangToggleButton />
    </header>
  );
};

export default Header;
