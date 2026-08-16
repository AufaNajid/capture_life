import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath from "./logo aple.jpg";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  LifeBuoy,
  Images,
  Calendar,
  ChartNoAxesCombined,
  LayoutDashboard,
  Settings,
} from "lucide-react";

export default function page() {
  let items = ["Home", "Product", "Services"];

  return (
    
    <main className="page d-flex">
      <Sidebar>
        < SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
          active={false}
        />
        <SidebarItem icon={<Images size={20} />} text="Galery" active={false} alert={false} />
        <SidebarItem icon={<Calendar size={20} />} text="Events" active={false} alert={false} />
        <SidebarItem icon={<ChartNoAxesCombined size={20} />} text="Analytics" active={false} alert={false} />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" active={false} alert={false} />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" active={false} alert={false} />
      </Sidebar>

      <div className="w-100">
        <Navbar
          brandName="MP Codes"
          imageSrcPath={imagePath}
          navItems={items}
        />
      </div>

    </main>
  );
}
