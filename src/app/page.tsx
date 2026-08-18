
import "bootstrap/dist/css/bootstrap.css";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  LifeBuoy,
  Images,
  Calendar,
  ChartNoAxesCombined,
  LayoutDashboard,
  Settings,
  CalendarDays,
  Camera,
  Video,
  DollarSign,
} from "lucide-react";

export default function page() {

  return (
    <main className="page d-flex">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert={false}
          href="/"
        />
        <SidebarItem
          icon={<Images size={20} />}
          text="Galery"
          alert={false}
          href="/galery"
        />
        <SidebarItem
          icon={<Calendar size={20} />}
          text="Events"
          alert={false}
          href="/events"
        />
        <SidebarItem
          icon={<ChartNoAxesCombined size={20} />}
          text="Analytics"
          alert={false}
          href="/analytics"
        />
        <hr className="my-3" />
        <SidebarItem
          icon={<Settings size={20} />}
          text="Settings"
          alert={false}
          href="/settings"
        />
        <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Help"
          alert={false}
          href="/help"
        />
      </Sidebar>


        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="!text-xl font-bold text-gray-600">
                Total Events
              </p>
              {<CalendarDays size={50} />}
            </div>
            <p className="!text-xl font-extrabold mt-2">0/month</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="!text-xl font-bold text-gray-600">Photos Taken</p>
              {<Camera size={50} />}
            </div>
            <p className="!text-xl font-extrabold mt-2 ">0</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="!text-xl font-bold text-gray-600">Active Booths</p>
              {<Video size={50} />}
            </div>
            <p className="!text-xl font-extrabold mt-2 ">0</p>
          </div>
          <div className="bg-indigo-600 p-4 shadow-lg rounded-lg">
            <div className="flex justify-between items-center">
              <p className="!text-xl font-bold text-white">Est. Revenue</p>
              {<DollarSign size={50} />}
            </div>
            <p className="!text-xl font-extrabold mt-2 text-white">$0</p>
          </div>
        </div>

        <div className="px-4 mb-6 mt-2">
          <button className="!bg-indigo-600 hover:!bg-indigo-700 
          !text-white font-medium py-2 px-4 !rounded-lg transition-colors 
          shadow-sm">
            + New Event
          </button>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-100">
          <div className="flex justify-between items-center">
            <table className="table caption-top">
              <caption className="!text-xl font-extrabold mt-2 !text-black">
                Upcoming Events
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="!text-gray-500">
                    Event Name
                  </th>
                  <th scope="col" className="!text-gray-500">
                    Date
                  </th>
                  <th scope="col" className="!text-gray-500">
                    Location
                  </th>
                  <th scope="col" className="!text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Tech Summit 2024</td>
                  <td>Oct 24, 2026</td>
                  <td>Moscone Center</td>
                  <td>Ready</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </main>
  );
}
