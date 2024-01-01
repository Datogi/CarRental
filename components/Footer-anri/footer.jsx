function Footer() {
  return (
    <footer id="about">
      <div className="p-10 bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4"> company</h4>
              <p className="text-gray-500">
                GEORGIA <br />
                KUTAISI
                <br />
                PASILOKI <br />
                <br />
                <strong>Phone</strong> +995 *** *** *** <br />
                <strong>Emaill</strong> info@example.com <br />
              </p>
            </div>
            <div className="mr-30">
              <h4>Useful Links</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>
                  <a className="hover:text-blue-500" href="#">
                    Home
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>
                  <a className="hover:text-blue-500" href="#">
                    About Us
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>
                  <a className="hover:text-blue-500" href="#">
                    Services
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>
                  <a className="hover:text-blue-500" href="#">
                    Terms Of Services
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>
                  <a className="hover:text-blue-500" href="#">
                    Privacy Policy
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="mr-50">
              <h4 className="">Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-3">
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>{" "}
                  <a className="hover:text-blue-500" href="#">
                    Web Design
                  </a>
                </li>
                <li className="pb-3">
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>{" "}
                  <a className="hover:text-blue-500" href="#">
                    Web Development
                  </a>
                </li>
                <li className="pb-3">
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>{" "}
                  <a className="hover:text-blue-500" href="#">
                    {" "}
                    car Management
                  </a>
                </li>
                <li className="pb-3">
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>{" "}
                  <a className="hover:text-blue-500" href="#">
                    {" "}
                    Marketing
                  </a>
                </li>
                <li className="pb-3">
                  <i className="fa fa-chevron-right text-blue-500 mr-2"></i>{" "}
                  <a className="hover:text-blue-600" href="#">
                    {" "}
                    grapic
                  </a>
                </li>
              </ul>
            </div>
            <div className=" absolute  left-3/4">
              <h4 className="">
                <i className="fa fa-chevron-rught text-blue-400 "></i>Project
                Creators:
              </h4>
              <p className="text-gray-500 pb-2">
                George Mindiashvili, Jaba Margvelashvili, Anri Tsikishvili
              </p>{" "}
              <br />
              <form className="">
                <input
                  type="text"
                  name=""
                  id=""
                  className="text-gray-500 w-1/2 p-2 focus:border-blue-500"
                  placeholder="email@example.com"
                />
                <button className="p-2 w1/2 bg bg-blue-500 text-white hover:bg-blue-600">
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-950 text-gray-500 px-10 ">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center"></div>
      </div>
    </footer>
  );
}
export default Footer;
