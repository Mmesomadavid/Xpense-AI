"use client"

import { LayoutDashboard, Wallet, FolderOpen, Settings, MessageSquare, AlertCircle } from "lucide-react"
import type { PageType } from "./dashboard-layout"

type SidebarProps = {
  currentPage: PageType
  onPageChange: (page: PageType) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const navItems: { label: string; icon: any; page: PageType }[] = [
    { label: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
    { label: "Wallets", icon: Wallet, page: "wallets" },
    { label: "Categories", icon: FolderOpen, page: "categories" },
    { label: "Settings", icon: Settings, page: "settings" },
  ]

  return (
    <aside className="flex w-64 flex-col border-none bg-sidebar-background">
      {/* Logo/Brand */}
      <div className="flex h-16 items-center border-none px-6">
        <h1 className="text-lg font-semibold text-sidebar-foreground uppercase">
          XPense.<span className="text-orange-400">AI</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map(({ label, icon: Icon, page }) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors 
              ${
                currentPage === page
                  ? "bg-secondary text-secondary-foreground"
                  : "text-sidebar-foreground/70 hover:bg-secondary hover:text-secondary-foreground"
              }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      {/* Footer links */}
      <div className="border-none p-4 space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          <MessageSquare className="h-4 w-4" />
          Give feedback
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          <AlertCircle className="h-4 w-4" />
          Report issue
        </a>
      </div>
    </aside>
  )
}
