"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

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

import Sidebar, { SidebarItem } from "./components/Sidebar";

const NAV_ITEMS = [
  { icon: LayoutDashboard, text: "Dashboard", href: "/" },
  { icon: Images, text: "Gallery", href: "/admin/galery" },
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

function DashboardSidebar() {
  return (
    <Sidebar>
      {NAV_ITEMS.map(({ icon: Icon, text, href }) => (
        <SidebarItem key={href} icon={<Icon size={19} />} text={text} href={href} />
      ))}

      <div className="sidebar-divider" />

      {FOOTER_NAV_ITEMS.map(({ icon: Icon, text, href }) => (
        <SidebarItem key={href} icon={<Icon size={19} />} text={text} href={href} />
      ))}
    </Sidebar>
  );
}

function DashboardHeader() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">
          <Sparkles size={14} /> Your happy little corner
        </p>
        <h1>Dashboard</h1>
        <p className="header-copy">Here&apos;s what&apos;s blooming in your photo world.</p>
      </div>

      <div className="header-actions">
        <button type="button" className="round-action" aria-label="Notifications">
          <Bell size={19} />
        </button>

        <div className="profile-chip">
          <span className="profile-avatar">M</span>
          <span>
            <strong>Mel</strong>
            <small>Admin</small>
          </span>
        </div>

        <button className="create-event" onClick={() => setIsPopupOpen(true)}>
          <Plus size={18} /> New event
        </button>
      </div>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </header>
  );
}

function CameraIllustration() {
  return (
    <div className="camera-illustration" aria-hidden="true">
      <span className="spark spark-one">✦</span>
      <span className="spark spark-two">✦</span>
      <div className="sunset" />

      <div className="camera-body">
        <div className="camera-lens">
          <div />
        </div>
        <span className="camera-flash" />
      </div>

      <div className="photo-print">
        <span>♥</span>
        <div className="photo-hills" />
      </div>
    </div>
  );
}

function WelcomeCard() {
  return (
    <article className="welcome-card">
      <div className="welcome-copy">
        <span className="welcome-tag">Good morning, Mel!</span>
        <h2>
          Let&apos;s make some
          <br />
          <em>memories</em> today.
        </h2>
        <p>Your dashboard is ready whenever the next celebration calls.</p>
        <a href="/events" className="text-link">
          Plan an event <span>→</span>
        </a>
      </div>

      <CameraIllustration />
    </article>
  );
}

function StatsGrid() {
  return (
    <section className="stats-grid" aria-label="Overview">
      {STATS.map(({ label, value, detail, icon: Icon, tone }) => (
        <article key={label} className={`stat-card stat-${tone}`}>
          <div className="stat-icon">
            <Icon size={21} strokeWidth={2.25} />
          </div>

          <button type="button" aria-label={`More about ${label}`}>
            <MoreHorizontal size={18} />
          </button>

          <p>{label}</p>
          <strong>{value}</strong>
          <small>{detail}</small>
        </article>
      ))}
    </section>
  );
}

function UpcomingEvents() {
  return (
    <section className="events-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Coming up</p>
          <h2>Your upcoming events</h2>
        </div>
        <a href="/events">
          View all <span>→</span>
        </a>
      </div>

      <div className="empty-events">
        <span className="empty-icon">
          <CalendarDays size={25} />
        </span>

        <div>
          <h3>Your calendar is open</h3>
          <p>Set up your first event and all the joyful details will live here.</p>
        </div>

        <a href="/events" className="mini-button">
          <Plus size={16} /> Create event
        </a>
      </div>
    </section>
  );
}

function TodayCard() {
  const today = new Date();
  const day = String(today.getDate());
  const month = today.toLocaleDateString("en-US", { month: "short" });

  return (
    <section className="today-card">
      <div className="mini-heading">
        <p className="eyebrow">Today</p>
        <span>
          {month} {day}
        </span>
      </div>

      <h2>
        A lovely day to
        <br />
        capture life.
      </h2>

      <div className="date-orb">
        <span>{day}</span>
        <small>{month.toUpperCase()}</small>
      </div>

      <div className="tiny-dots">
        <i />
        <i />
        <i />
      </div>
    </section>
  );
}

function TipsCard() {
  return (
    <section className="tips-card">
      <div className="tips-title">
        <span>
          <Sparkles size={17} />
        </span>
        <h2>Little tip</h2>
      </div>

      <p>Adding a location helps your guests find every photo faster.</p>

      <a href="/settings">
        <MapPin size={15} /> Update your details
      </a>
    </section>
  );
}


export function Popup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      
      <div className="relative w-full max-w-sm bg-white p-6 border border-gray-200 rounded-2xl shadow-xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold"
        >
          ✕
        </button>
        <form action="#">
          <h5 className="text-xl font-semibold text-heading mb-6">Add Events</h5>
          <div className="mb-4">
            <label className="block mb-2.5 text-sm font-medium text-heading">Event Name</label>
            <input className="!rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="nama event" required />
          </div>
          


<div className="relative max-w-sm">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
    </svg>
  </div>
  <input 
    id="default-datepicker" 
    type="date" 
    className="!rounded-lg block w-full ps-10 pe-3 py-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-indigo-600 focus:border-indigo-600 shadow-sm placeholder:text-gray-400" 
  />
</div>

            <div className="mb-4">
                <label className="block mb-2.5 text-sm font-medium text-heading">Location</label>
                <input className="!rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="location" required />
            </div>
            <div className="flex items-center justify-center">
    <button type="submit" className="px-4 py-2 bg-blue-600 text-white !rounded-lg hover:bg-blue-700 transition-colors">
    Submit
    </button>
    </div>
            </form>
        </div>
        </div>
    );
    }

export default function Page() {
  return (
    <main className="app-shell">
      <DashboardSidebar />

      <section className="dashboard-content">
        <DashboardHeader />

        <div className="dashboard-grid">
          <section className="main-column">
            <WelcomeCard />
            <StatsGrid />
            <UpcomingEvents />
          </section>

          <aside className="side-column">
            <TodayCard />
            <TipsCard />
          </aside>
        </div>
      </section>
    </main>
  );
}