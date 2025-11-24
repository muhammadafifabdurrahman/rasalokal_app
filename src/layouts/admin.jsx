import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen w-full">
      {/* NAVBAR FIXED */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-50 w-full px-4 py-2.5">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-2 ">
            {/* Sidebar Toggle (Flowbite) */}
            <button
              data-drawer-target="sidebar"
              data-drawer-toggle="sidebar"
              aria-controls="sidebar"
              className="p-2 rounded-lg md:hidden 
             !text-blue-600 hover:!bg-blue-100 
             dark:!text-blue-400 dark:hover:!bg-blue-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            </button>

            {/* LOGO */}
            <Link to="/admin" className="flex items-center gap-2">
              <img src="rasaLokal.png" className="w-10 h-8 rounded-full" />
              <span className="text-xl font-semibold dark:text-white">
                RasaLokal
              </span>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 
              dark:hover:bg-gray-700 rounded-lg text-sm font-medium"
            >
              Login
            </Link>

            {/* USER MENU */}
            <button
              data-dropdown-toggle="userDropdown"
              className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300"
            >
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                className="w-full h-full"
              />
            </button>

            <div
              id="userDropdown"
              className="hidden z-50 w-56 bg-white dark:bg-gray-700 rounded-xl shadow divide-y divide-gray-200 dark:divide-gray-600"
            >
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  User
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  user@mail.com
                </p>
              </div>

              <ul className="py-1">
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 
        transition-transform -translate-x-full md:translate-x-0 
        bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-5 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-2 text-gray-900 dark:text-white">
                  Dashboard
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/users"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-2 text-gray-900 dark:text-white">
                  Users
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/categories"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-2 text-gray-900 dark:text-white">
                  Categories
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/menus"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-2 text-gray-900 dark:text-white">
                  Menus
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/ordersItem"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-2 text-gray-900 dark:text-white">
                  Order Item
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/orders"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-2 text-gray-900 dark:text-white">
                  Orders
                </span>
              </Link>
            </li>
          </ul>

          <ul className="pt-6 mt-6 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link
                to="/admin/payments"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-2 text-gray-900 dark:text-white">
                  Payments
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/logout"
                className="flex items-center p-2 rounded-lg bg-red-100 hover:bg-red-200 dark:hover:bg-gray-700"
              >
                <span className="ml-2 text-red-700 dark:text-white">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="pt-20 md:ml-100 w-full">
        <div className="min-h-screen border-2 border-dashed rounded-lg  mr-4 p-4 w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
