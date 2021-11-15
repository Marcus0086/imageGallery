import SearchBar from "./searchBar";
import SearchIcon from "./icons/searchicon";
import CrossIcon from "./icons/crossicon";
import HamBurgerIcon from "./icons/hamburger";
import Toggle from "./toggle";
import NavUlComponent from "./navulcomponent";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isHidden, setHidden] = useState(false);
  const [isHiddenSearch, setHiddenSearch] = useState(false);

  const turnSideNavOn = () => {
    setHidden(true);
  };
  const turnSideNavOff = () => {
    setHidden(false);
  };

  const turnSearchNavOff = () => {
    setHiddenSearch(false);
  };
  const turnSearchNavOn = () => {
    setHiddenSearch(!isHiddenSearch ? true : false);
  };
  return (
    <>
      <nav
        className="flex items-center justify-between 
        flex-1 py-6 px-4 laptop:px-16 desktop:px-20 text-secondary-600 dark:text-primary"
      >
        <h3 className="text-pattya text-2xl lgmobile:text-3xl ">
          Image Gallery
        </h3>
        <SearchBar className='search' />
        <NavUlComponent className="hidden desktop:flex items-center justify-between text-sm font-bold w-60 desktop:w-72" />
        <div className="hidden desktop:flex items-center justify-center mx-12">
          <h3 className="text-sm font-bold mx-2">Dark Mode</h3>
          <Toggle />
        </div>
        <div className="desktop:hidden flex items-center justify-center">
          <SearchIcon className="option" onClick={turnSearchNavOn} />
          <HamBurgerIcon className="option" onClick={turnSideNavOn} />
        </div>
        <aside
          className={`desktop:hidden transform top-0 right-0 w-62 mobile:w-96 bg-white dark:!bg-primary text-grayish dark:text-white fixed h-full 
          shadow-lg
        overflow-auto ease-in-out transition-all duration-300 z-30 p-4 ${isHidden ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div>
            <CrossIcon className="option w-10" onClick={turnSideNavOff} />
          </div>
          <br />
          <div className="flex flex-col items-center justify-between h-auto my-auto">
            <ul
              className="desktop:hidden flex flex-col items-start 
            justify-center font-bold w-full text-2xl mobile:text-3xl"
            >
              <li className="my-4 option w-full">
                <Link href={"/explore"}>Explore</Link>
              </li>
              <li className="my-4 option w-full">
                <Link href={"/collection"}>Collection</Link>
              </li>
              <li className="my-4 option w-full">
                <Link href={"/community"}>Community</Link>
              </li>
            </ul>
            <div className="desktop:hidden flex items-center justify-center m-12">
              <h3 className="text-sm font-bold mx-2">Dark Mode</h3>
              <Toggle />
            </div>
          </div>
        </aside>
        <nav className={`desktop:hidden transform top-0 right-0 left-0 bg-white dark:!bg-primary text-grayish dark:text-white fixed 
        overflow-auto ease-in-out transition-all duration-300 z-30 p-6 ${isHiddenSearch ? "translate-y-0" : "-translate-y-full"
          }`}>
          <CrossIcon onClick={turnSearchNavOff} className='option w-10' />
          <br />
          <SearchBar className="searchn" />
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
