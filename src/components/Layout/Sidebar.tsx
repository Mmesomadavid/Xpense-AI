"use client"

import { LayoutDashboard, Wallet, FolderOpen, Settings, MessageSquare, AlertCircle, X } from "lucide-react"
import type { PageType } from "./dashboard-layout"

type SidebarProps = {
  currentPage: PageType
  onPageChange: (page: PageType) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function Sidebar({ currentPage, onPageChange, isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const navItems: { label: string; icon: any; page: PageType }[] = [
    { label: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
    { label: "Wallets", icon: Wallet, page: "wallets" },
    { label: "Categories", icon: FolderOpen, page: "categories" },
    { label: "Settings", icon: Settings, page: "settings" },
  ]

  const handleNavClick = (page: PageType) => {
    onPageChange(page)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-none bg-sidebar-background transition-transform duration-300 md:relative md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo/Brand */}
        <div className="flex h-16 items-center justify-between border-none px-6">
          <h1 className="text-lg font-semibold text-sidebar-foreground uppercase">
            XPense.<span className="text-orange-400">AI</span>
          </h1>
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden">
            <X className="h-5 w-5 text-sidebar-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map(({ label, icon: Icon, page }) => (
            <button
              key={page}
              onClick={() => handleNavClick(page)}
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
        <div className="border-none space-y-1 p-4">
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
    </>
  )
}
