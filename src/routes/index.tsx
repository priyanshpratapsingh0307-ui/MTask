import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  Calendar,
  KanbanSquare,
  ListChecks,
  BarChart3,
  Bot,
  Bell,
  Search,
  Plus,
  CheckCircle2,
  Circle,
  Clock,
  TrendingUp,
  Users,
  Inbox,
  Settings,
  Home,
  FolderKanban,
  Flag,
  ChevronRight,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Dribbble,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MTask — Take Control of Your Tasks" },
      {
        name: "description",
        content:
          "MTask is the calm, intelligent task workspace for focused teams. Plan, prioritize, and ship with editorial clarity.",
      },
      { property: "og:title", content: "MTask — Take Control of Your Tasks" },
      {
        property: "og:description",
        content:
          "The calm, intelligent task workspace for focused teams. Plan, prioritize, and ship with editorial clarity.",
      },
    ],
  }),
  component: Index,
});

const ease = [0.22, 1, 0.36, 1] as const;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <DashboardMock />
        <Logos />
        <Features />
        <AISection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-hairline/60">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center">
            <div className="h-2.5 w-2.5 rounded-sm bg-background" />
          </div>
          <span className="font-display font-semibold tracking-tight text-[17px]">MTask</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[15px] text-ink-soft">
          {["Product", "Solutions", "Pricing", "Changelog", "Customers"].map((l) => (
            <a
              key={l}
              href="#"
              className="relative group transition-colors hover:text-ink"
            >
              {l}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:block text-[15px] text-ink-soft hover:text-ink">
            Sign in
          </a>
          <PillButton>Get started</PillButton>
        </div>
      </div>
    </header>
  );
}

/* ---------------- PILL BUTTON ---------------- */
function PillButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full text-[15px] font-semibold transition-all duration-300 shadow-soft hover:shadow-float";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:scale-[1.03]"
      : "bg-surface text-ink border border-hairline hover:scale-[1.03]";
  const dot =
    variant === "primary"
      ? "bg-background/15 text-primary-foreground"
      : "bg-primary text-primary-foreground";
  return (
    <button className={`${base} ${styles}`}>
      <span>{children}</span>
      <span
        className={`h-8 w-8 rounded-full grid place-items-center transition-transform duration-300 group-hover:translate-x-0.5 ${dot}`}
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
      </span>
    </button>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const pills = [
    { label: "AI Assistant", icon: Sparkles, x: "-58%", y: "-30%", rot: -6, delay: 0.2 },
    { label: "Task Management", icon: ListChecks, x: "60%", y: "-40%", rot: 5, delay: 0.35 },
    { label: "Kanban", icon: KanbanSquare, x: "-70%", y: "30%", rot: -4, delay: 0.5 },
    { label: "Analytics", icon: BarChart3, x: "62%", y: "28%", rot: 6, delay: 0.65 },
    { label: "To-do List", icon: CheckCircle2, x: "0%", y: "55%", rot: -2, delay: 0.8 },
  ];
  return (
    <section className="relative">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10 pt-24 pb-10 lg:pt-32 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-3xl flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 text-[13px] text-ink-soft shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            New · MTask 2.0 with AI Planning
          </span>
        </motion.div>

        <div className="relative mx-auto max-w-5xl mt-8">
          {/* Floating pills */}
          {pills.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20, rotate: p.rot }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  rotate: p.rot,
                }}
                transition={{
                  opacity: { duration: 0.6, delay: p.delay, ease },
                  y: {
                    duration: 6 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                  },
                }}
                style={{
                  left: `calc(50% + ${p.x})`,
                  top: `calc(50% + ${p.y})`,
                }}
                className="hidden md:flex absolute -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-surface border border-hairline px-4 py-2 text-[13px] font-medium text-ink shadow-float"
              >
                <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                {p.label}
              </motion.div>
            );
          })}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="font-display text-center text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.035em] font-semibold text-ink"
          >
            Take control
            <br />
            of your tasks.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mx-auto max-w-xl text-center mt-8 text-[18px] leading-relaxed font-light text-ink-soft"
        >
          The calm, intelligent workspace for focused teams. Plan,
          prioritize, and ship — without the noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <PillButton>Start for free</PillButton>
          <p className="text-[13px] text-ink-muted">
            Free forever for up to 5 teammates · No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- DASHBOARD MOCK ---------------- */
function DashboardMock() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="relative rounded-[28px] border border-hairline bg-surface shadow-float overflow-hidden"
        >
          {/* Top toolbar */}
          <div className="flex items-center justify-between border-b border-hairline px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E5]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E5]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E5]" />
              <span className="ml-4 text-[13px] text-ink-muted">
                MTask.app / workspace / acme
              </span>
            </div>
            <div className="flex items-center gap-3 text-ink-muted">
              <Search className="h-4 w-4" />
              <Bell className="h-4 w-4" />
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground grid place-items-center text-[10px] font-semibold">
                AM
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-0">
            {/* Sidebar */}
            <aside className="col-span-3 lg:col-span-2 border-r border-hairline p-4 hidden md:block">
              <div className="space-y-1">
                {[
                  { i: Home, l: "Home", active: true },
                  { i: Inbox, l: "Inbox" },
                  { i: FolderKanban, l: "Projects" },
                  { i: Calendar, l: "Calendar" },
                  { i: BarChart3, l: "Analytics" },
                  { i: Users, l: "Team" },
                  { i: Settings, l: "Settings" },
                ].map(({ i: Icon, l, active }) => (
                  <div
                    key={l}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] ${
                      active
                        ? "bg-secondary text-ink font-medium"
                        : "text-ink-soft"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {l}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-hairline">
                <p className="text-[11px] uppercase tracking-wider text-ink-muted mb-2 px-2">
                  Projects
                </p>
                {["Website Redesign", "Mobile App v2", "Q4 Launch"].map((p, i) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 px-2.5 py-1.5 text-[13px] text-ink-soft"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        i === 0 ? "bg-success" : i === 1 ? "bg-warning" : "bg-ink-muted"
                      }`}
                    />
                    {p}
                  </div>
                ))}
              </div>
            </aside>

            {/* Main panel */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10 p-6 bg-background/40">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-[13px] text-ink-muted">Wednesday, Oct 23</p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight mt-1">
                    Good morning, Alex
                  </h3>
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1.5 text-[13px] font-semibold">
                  <Plus className="h-3.5 w-3.5" /> New task
                </button>
              </div>

              <div className="grid grid-cols-12 gap-4">
                {/* Today's tasks */}
                <Card className="col-span-12 lg:col-span-7">
                  <CardHeader title="Today" sub="6 tasks · 3 done" />
                  <div className="divide-y divide-hairline">
                    {[
                      { t: "Review onboarding flow with design", done: true, tag: "Design" },
                      { t: "Ship analytics dashboard v2", done: true, tag: "Engineering" },
                      { t: "Customer interview — Acme Co.", done: false, tag: "Research", time: "2:00 PM" },
                      { t: "Draft Q4 roadmap brief", done: false, tag: "Strategy" },
                      { t: "Approve marketing assets", done: false, tag: "Brand" },
                    ].map((task) => (
                      <div
                        key={task.t}
                        className="flex items-center gap-3 py-3 group"
                      >
                        {task.done ? (
                          <CheckCircle2 className="h-4 w-4 text-success flex-none" />
                        ) : (
                          <Circle className="h-4 w-4 text-ink-muted flex-none" />
                        )}
                        <span
                          className={`flex-1 text-[14px] ${
                            task.done ? "text-ink-muted line-through" : "text-ink"
                          }`}
                        >
                          {task.t}
                        </span>
                        <span className="text-[11px] text-ink-muted border border-hairline rounded-full px-2 py-0.5">
                          {task.tag}
                        </span>
                        {task.time && (
                          <span className="text-[11px] text-ink-muted flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {task.time}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Progress */}
                <Card className="col-span-12 sm:col-span-6 lg:col-span-5">
                  <CardHeader title="Weekly progress" sub="On pace to hit goal" />
                  <div className="flex items-center gap-6 mt-2">
                    <Ring value={72} />
                    <div className="space-y-2 flex-1">
                      {[
                        { l: "Completed", v: 72, c: "bg-primary" },
                        { l: "In progress", v: 18, c: "bg-warning" },
                        { l: "Blocked", v: 10, c: "bg-ink-muted" },
                      ].map((s) => (
                        <div key={s.l}>
                          <div className="flex justify-between text-[12px] text-ink-soft">
                            <span>{s.l}</span>
                            <span className="tabular-nums">{s.v}%</span>
                          </div>
                          <div className="h-1 rounded-full bg-secondary overflow-hidden mt-1">
                            <div
                              className={`h-full ${s.c} rounded-full`}
                              style={{ width: `${s.v}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Calendar */}
                <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <CardHeader title="October" sub="Week 43" />
                  <MiniCal />
                </Card>

                {/* AI assistant */}
                <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground grid place-items-center">
                      <Sparkles className="h-3 w-3" />
                    </div>
                    <p className="text-[13px] font-medium">AI Assistant</p>
                  </div>
                  <p className="text-[13px] text-ink-soft leading-relaxed">
                    You have 3 deep-focus blocks open this week. Want me to schedule the Q4 roadmap brief into Thursday morning?
                  </p>
                  <button className="mt-4 text-[12px] font-semibold inline-flex items-center gap-1 text-primary">
                    Schedule it <ChevronRight className="h-3 w-3" />
                  </button>
                </Card>

                {/* Activity */}
                <Card className="col-span-12 lg:col-span-4">
                  <CardHeader title="Activity" />
                  <div className="space-y-3 mt-2">
                    {[
                      { who: "Maya", what: "completed", target: "Design audit" },
                      { who: "Jonas", what: "commented on", target: "Pricing copy" },
                      { who: "Iris", what: "assigned you", target: "Launch checklist" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13px]">
                        <div className="h-6 w-6 rounded-full bg-secondary grid place-items-center text-[10px] font-semibold text-ink flex-none">
                          {a.who[0]}
                        </div>
                        <p className="text-ink-soft leading-snug">
                          <span className="text-ink font-medium">{a.who}</span> {a.what}{" "}
                          <span className="text-ink">{a.target}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="hidden lg:block absolute left-4 -translate-y-1/2 top-1/2 z-10"
        >
          <div className="rounded-2xl border border-hairline bg-surface shadow-float p-4 w-52">
            <div className="flex items-center gap-2 text-ink-soft text-[12px]">
              <TrendingUp className="h-3.5 w-3.5 text-success" /> Productivity
            </div>
            <p className="font-display text-3xl font-semibold tracking-tight mt-2">
              +24%
            </p>
            <p className="text-[11px] text-ink-muted">vs last week</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="hidden lg:block absolute right-4 top-[40%] z-10"
        >
          <div className="rounded-2xl border border-hairline bg-surface shadow-float p-4 w-56">
            <div className="flex items-center gap-2">
              <Flag className="h-3.5 w-3.5 text-warning" />
              <p className="text-[12px] font-medium text-ink">Milestone reached</p>
            </div>
            <p className="text-[12px] text-ink-soft mt-1.5 leading-snug">
              Mobile App v2 — Beta shipped to 1,200 testers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease }}
      className={`rounded-2xl border border-hairline bg-surface p-4 shadow-soft ${className}`}
    >
      {children}
    </motion.div>
  );
}

function CardHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="flex items-end justify-between mb-3">
      <p className="text-[13px] font-semibold text-ink">{title}</p>
      {sub && <p className="text-[11px] text-ink-muted">{sub}</p>}
    </div>
  );
}

function Ring({ value }: { value: number }) {
  const c = 2 * Math.PI * 28;
  return (
    <div className="relative h-20 w-20 flex-none">
      <svg viewBox="0 0 64 64" className="-rotate-90 h-full w-full">
        <circle cx="32" cy="32" r="28" fill="none" stroke="oklch(0.92 0.003 100)" strokeWidth="6" />
        <motion.circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="oklch(0.30 0.04 165)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-lg font-semibold tabular-nums">{value}%</span>
      </div>
    </div>
  );
}

function MiniCal() {
  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  return (
    <div>
      <div className="grid grid-cols-7 gap-1 text-[10px] text-ink-muted mb-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="text-center">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => {
          const isMonth = d > 0 && d <= 31;
          const isToday = d === 23;
          const hasDot = [5, 9, 14, 20, 23, 28].includes(d);
          return (
            <div
              key={i}
              className={`aspect-square grid place-items-center rounded-md text-[11px] relative ${
                isToday
                  ? "bg-primary text-primary-foreground font-semibold"
                  : isMonth
                  ? "text-ink hover:bg-secondary"
                  : "text-ink-muted/40"
              }`}
            >
              {isMonth ? d : ""}
              {hasDot && !isToday && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-primary" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- LOGOS ---------------- */
function Logos() {
  const logos = ["Linear", "Vercel", "Notion", "Loom", "Arc", "Framer"];
  return (
    <section className="border-y border-hairline bg-surface/50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-8">
        <p className="text-[13px] text-ink-muted">Trusted by 12,000+ teams shipping calmly</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {logos.map((l) => (
            <span
              key={l}
              className="font-display text-[18px] font-medium tracking-tight text-ink-soft/70 hover:text-ink transition-colors"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const items = [
    {
      icon: ListChecks,
      title: "A workspace that stays out of the way.",
      body: "Capture, organize, and prioritize without ceremony. MTask keeps the surface quiet so the work stays loud.",
      cta: "Explore tasks",
    },
    {
      icon: KanbanSquare,
      title: "Boards that mirror how you actually ship.",
      body: "List, kanban, calendar, timeline — switch views without losing context. One source of truth, many ways to see it.",
      cta: "See views",
    },
    {
      icon: BarChart3,
      title: "Signals, not dashboards.",
      body: "Quiet analytics surface what matters: velocity, focus time, and where work gets stuck. No vanity metrics.",
      cta: "View insights",
    },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-[13px] uppercase tracking-[0.18em] text-ink-muted mb-5">
            — Why MTask
          </p>
          <h2 className="font-display text-[40px] lg:text-[56px] leading-[1.02] tracking-[-0.03em] font-semibold">
            Built for the way focused teams actually work.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] border border-hairline bg-surface p-8 lg:p-10 shadow-soft hover:shadow-float transition-shadow min-h-[360px] flex flex-col"
              >
                <div className="h-10 w-10 rounded-xl border border-hairline bg-background grid place-items-center">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-[26px] leading-[1.1] tracking-[-0.02em] font-semibold mt-10">
                  {f.title}
                </h3>
                <p className="text-[15px] text-ink-soft mt-4 leading-relaxed font-light flex-1">
                  {f.body}
                </p>
                <a href="#" className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink mt-8 group">
                  {f.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI SECTION ---------------- */
function AISection() {
  return (
    <section className="py-32 border-t border-hairline">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <AIColumn
            eyebrow="Task scheduling"
            title="Let MTask plan the boring parts."
            body="Drop tasks into your week and MTask arranges them around meetings, energy, and deadlines — protecting your deep work automatically."
            visual={<SchedulingVisual />}
          />
          <AIColumn
            eyebrow="Smart calendar"
            title="A calendar that defends your focus."
            body="See conflicts before they happen, reclaim fragmented time, and reschedule with a single keystroke. Calm by design."
            visual={<CalendarVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function AIColumn({
  eyebrow,
  title,
  body,
  visual,
}: {
  eyebrow: string;
  title: string;
  body: string;
  visual: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className="rounded-[24px] border border-hairline bg-surface p-8 lg:p-12 shadow-soft flex flex-col"
    >
      <p className="text-[12px] uppercase tracking-[0.18em] text-ink-muted">— {eyebrow}</p>
      <h3 className="font-display text-[34px] lg:text-[42px] leading-[1.05] tracking-[-0.02em] font-semibold mt-4 max-w-md">
        {title}
      </h3>
      <p className="text-[15px] text-ink-soft font-light leading-relaxed mt-5 max-w-md">{body}</p>
      <div className="mt-10 flex-1 grid place-items-center">{visual}</div>
    </motion.div>
  );
}

function SchedulingVisual() {
  return (
    <div className="relative w-full max-w-md">
      <svg
        viewBox="0 0 400 60"
        className="absolute -top-10 -left-8 w-32 text-ink-muted/30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M2 30 C 60 2, 120 58, 180 30 S 320 2, 398 30" />
      </svg>
      <div className="space-y-2">
        {[
          { t: "Deep work · Roadmap brief", d: "9:00 – 11:00", c: "bg-primary/8 border-primary/20" },
          { t: "Standup", d: "11:15 – 11:30", c: "bg-secondary border-hairline" },
          { t: "Customer call · Acme", d: "2:00 – 2:45", c: "bg-secondary border-hairline" },
          { t: "Focus · Design review", d: "3:00 – 4:30", c: "bg-primary/8 border-primary/20" },
        ].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            className={`rounded-xl border px-4 py-3 flex items-center justify-between ${b.c}`}
          >
            <span className="text-[13px] font-medium text-ink">{b.t}</span>
            <span className="text-[11px] text-ink-muted tabular-nums">{b.d}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CalendarVisual() {
  return (
    <div className="relative w-full max-w-md">
      <svg
        viewBox="0 0 200 60"
        className="absolute -top-8 -right-4 w-28 text-ink-muted/30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M4 40 Q 60 4, 110 30 T 196 12" />
      </svg>
      <div className="rounded-2xl border border-hairline bg-background p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-display font-semibold tracking-tight">This week</p>
          <Calendar className="h-4 w-4 text-ink-muted" />
        </div>
        <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] text-ink-muted mb-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md text-[12px] grid place-items-center ${
                i === 2 ? "bg-primary text-primary-foreground font-semibold" : "bg-surface border border-hairline text-ink"
              }`}
            >
              {20 + i}
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-1.5">
          {[
            { h: "10:00", t: "1:1 with Maya", c: "border-l-primary" },
            { h: "13:00", t: "Lunch — blocked", c: "border-l-ink-muted" },
            { h: "15:30", t: "Design crit", c: "border-l-warning" },
          ].map((e, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 pl-3 py-1.5 border-l-2 ${e.c}`}
            >
              <span className="text-[11px] text-ink-muted tabular-nums w-10">{e.h}</span>
              <span className="text-[13px] text-ink">{e.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative rounded-[28px] border border-hairline bg-surface px-8 py-20 lg:py-28 text-center overflow-hidden shadow-soft"
        >
          <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
          <div className="relative">
            <h2 className="font-display text-[44px] lg:text-[72px] leading-[1] tracking-[-0.035em] font-semibold max-w-3xl mx-auto">
              Work smarter,
              <br />
              every day.
            </h2>
            <p className="mt-6 text-[17px] text-ink-soft font-light max-w-lg mx-auto">
              Join the teams shipping calmly with MTask. Free for up to 5 people. Forever.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <PillButton>Start for free</PillButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Tasks", "Boards", "Calendar", "Analytics", "AI Assistant"],
    },
    { title: "Company", links: ["About", "Customers", "Changelog", "Careers", "Press"] },
    { title: "Resources", links: ["Docs", "Guides", "API", "Status", "Community"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA", "Cookies"] },
  ];
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-white grid place-items-center">
                <div className="h-2.5 w-2.5 rounded-sm bg-[#0A0A0A]" />
              </div>
              <span className="font-display font-semibold tracking-tight text-[17px]">MTask</span>
            </div>
            <p className="text-[13px] text-white/50 mt-5 max-w-xs leading-relaxed">
              The calm, intelligent task workspace for focused teams.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">
                {c.title}
              </p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] text-white/75 hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="font-display text-[80px] sm:text-[140px] lg:text-[200px] leading-[0.9] tracking-[-0.05em] font-semibold text-white/95">
            MTask.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} MTask Labs Inc. Made calmly.
          </p>
          <div className="flex items-center gap-2">
            {[Github, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-white/15 grid place-items-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
