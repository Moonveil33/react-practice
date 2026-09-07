import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="fixed top-5 right-0 left-0 z-50 backdrop-blur-md bg-black/20 max-w-[768px] mx-auto  border rounded-lg shadow-xl border-gray-200/10 ">
      <nav className="max-w-7xl mx-auto px-6 py-4" dir="rtl">
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "text-2xl font-bold" : "";
                }}
              >
                خانه
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "text-2xl font-bold" : "";
                }}
              >
                درباره ما
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/services"
                className={({ isActive }) => {
                  return isActive ? "text-2xl font-bold" : "";
                }}
              >
                خدمات
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                تماس با ما
              </NavLink>
            </li>
          </ul>
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            لوگو
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
