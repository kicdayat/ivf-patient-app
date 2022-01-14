import { Link } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/outline";

import { useAuth } from "contexts/authContext";

// const user = {
//   name: "Chelsea Hagon",
//   email: "chelseahagon@example.com",
//   role: "Human Resources Manager",
//   imageUrl:
//   "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };

const schedules = [
  {
    id: 1,
    title: "Konsultasi IVF Day 3",
    date: "11 Januari 2022",
    href: "#",
    preview:
      "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
  },
  {
    id: 2,
    title: "Pengambilan Specimen",
    date: "14 Januari 2022",
    href: "#",
    preview:
      "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
  },
];

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {/* Main 3 column grid */}
      <div className="mt-4 grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          {/* Welcome panel */}
          <section aria-labelledby="profile-overview-title">
            <div className="rounded-lg bg-white overflow-hidden shadow">
              <h2 className="sr-only" id="profile-overview-title">
                Profile Overview
              </h2>
              <div className="bg-white p-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:space-x-5">
                    <div className="flex-shrink-0">
                      <img
                        className="mx-auto h-20 w-20 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt={user?.name}
                      />
                    </div>
                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p className="text-sm font-medium text-gray-600">
                        Welcome back,
                      </p>
                      <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {user?.name}
                      </p>
                      <p className="text-sm font-medium text-gray-600">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-center sm:mt-0">
                    <Link
                      to="/my-profile"
                      className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          {/* schedules */}
          <section aria-labelledby="schedules-title">
            <div className="rounded-lg bg-white overflow-hidden shadow">
              <div className="p-6">
                <div className="flex space-x-2 items-center">
                  <CalendarIcon className="text-primary-700 w-6 h-6" />
                  <h2
                    className="text-base font-medium text-gray-900"
                    id="schedules-title"
                  >
                    Schedule
                  </h2>
                </div>
                <div className="flow-root mt-6">
                  <ul className="-my-5 divide-y divide-gray-200">
                    {schedules.map((announcement) => (
                      <li key={announcement.id} className="py-5">
                        <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <div className="flex justify-between items-center">
                            <h3 className="text-sm font-semibold text-gray-800">
                              <a
                                href={announcement.href}
                                className="hover:underline focus:outline-none"
                              >
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                />
                                {announcement.title}
                              </a>
                            </h3>
                            <p className="text-sm text-gray-600">
                              {announcement.date}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                            {announcement.preview}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  {/* <a
                    href="#"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View all
                  </a> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
