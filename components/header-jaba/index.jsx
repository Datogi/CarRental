import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Button from "./Button";

function Header() {
  return (
    <header
      id="main"
      className="h-screen bg-cover"
      style={{
        backgroundImage: "url(./background.jpg)",
      }}
    >
      <div className="w-full fixed top-0 bg-white shadow-lg z-50">
        <div className="w-4/5 mx-auto py-3 flex justify-between items-center">
          <img
            src="./logo.png"
            className="w-12 h-auto hover:scale-110 bg-transparent"
            alt="logo"
          />

          <ul className="flex gap-6 text-gray-700">
            <li className="hover:text-blue-500 hover:underline">
              <Link
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                მთავარი
              </Link>
            </li>
            <li className="hover:text-blue-500 hover:underline">
              <Link
                to="cars"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                მანქანები
              </Link>
            </li>
            <li className="hover:text-blue-500 hover:underline">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                ჩვენ შესახებ
              </Link>
            </li>
          </ul>

          <Button />
        </div>
      </div>

      <hr className="mt-5" />
      <div className="flex px-5 h-full justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-wide">
          იქირავე შენთვის სასურველი მანქანა იაფად!
        </h1>

        <img
          src="./banner.jpg"
          className=" rounded-xl mt-24 h-80 ml-44 "
          alt="img"
        />
      </div>
    </header>
  );
}

export default Header;
