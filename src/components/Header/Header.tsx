import logo from "assets/logo.svg";
import close from "assets/close.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-full mb-[-90px] justify-between items-center px-22 pt-11 ">
      <Link to="/" className="flex gap-4 items-center">
        <img src={logo} alt="logo" />
        <h1 className="raleway text-base font-bold">COMPANY NAME</h1>
      </Link>
      <Link to="/">
        <img className="cursor-pointer" src={close} alt="close" />
      </Link>
    </div>
  );
};

export default Header;
