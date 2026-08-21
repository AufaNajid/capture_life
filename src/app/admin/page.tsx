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

import Sidebar, { SidebarItem } from "../components/Sidebar";

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

        <a className="create-event" href="/events">
          <Plus size={18} /> New event
        </a>
      </div>
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