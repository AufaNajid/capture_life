import Sidebar, { SidebarItem } from "../app/components/Sidebar";
import {
  Bell,
  Calendar,
  CalendarDays,
  Camera,
  ChartNoAxesCombined,
  CircleDollarSign,
  Images,
  LayoutDashboard,
  LifeBuoy,
  MapPin,
  MoreHorizontal,
  Plus,
  Settings,
  Sparkles,
  Video,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, text: "Dashboard", href: "/" },
  { icon: Images, text: "Gallery", href: "/galery" },
  { icon: Calendar, text: "Events", href: "/events" },
  { icon: ChartNoAxesCombined, text: "Analytics", href: "/analytics" },
];

const FOOTER_NAV_ITEMS = [
  { icon: Settings, text: "Settings", href: "/settings" },
  { icon: LifeBuoy, text: "Help center", href: "/help" },
];

const STATS = [
  {
    label: "Events this month",
    value: "0",
    detail: "Ready for your first one",
    icon: CalendarDays,
    tone: "peach",
  },
  {
    label: "Photos captured",
    value: "0",
    detail: "Make every memory count",
    icon: Camera,
    tone: "purple",
  },
  {
    label: "Active booths",
    value: "0",
    detail: "Your booths will appear here",
    icon: Video,
    tone: "blue",
  },
  {
    label: "Estimated revenue",
    value: "$0",
    detail: "From completed events",
    icon: CircleDollarSign,
    tone: "yellow",
  },
];