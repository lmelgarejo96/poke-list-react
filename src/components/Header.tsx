import logo from "../assets/poke-logo.png"

const Header = () => {
  return (
    <div className="header h-16 sticky top-0 left-0 w-full">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 py-2">
        <div className="container mx-auto">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="h-10" src={logo} alt="Logo pokemon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
