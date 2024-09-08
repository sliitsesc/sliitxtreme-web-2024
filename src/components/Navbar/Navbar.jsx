export default function Navbar() {
  return (
    <nav className={"bg-transparent"}>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="text-xl cursor-pointer font-bold">SLIITXtreme</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4">
            <li>
              <a>Home</a>
            </li>
            {/* <li>
            <details className="w-auto">
              <summary>Parent</summary>
              <ul className="p-2 min-w-max">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
            <li>
              <a>Register</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn hidden lg:flex">Register</a>
          {/* mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
