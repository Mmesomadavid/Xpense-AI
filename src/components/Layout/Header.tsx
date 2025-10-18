"use client"

import { Button } from "../ui/button"
import { Plus, Menu } from "lucide-react"
import type { PageType } from "./dashboard-layout"

type HeaderProps = {
  currentPage: PageType
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function Header({ currentPage, isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  // Capitalize first letter for display
  const formatTitle = (page: PageType) => {
    return page.charAt(0).toUpperCase() + page.slice(1)
  }

  return (
    <header className="flex h-16 items-center justify-between border-none bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
          <Menu className="h-6 w-6 text-foreground" />
        </button>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground uppercase">{formatTitle(currentPage)}</h2>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {currentPage === "dashboard" && (
          <Button size="sm" className="gap-2 text-xs md:text-sm">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Wallet</span>
            <span className="sm:hidden">Add</span>
          </Button>
        )}
        {currentPage === "categories" && (
          <Button size="sm" className="gap-2 text-xs md:text-sm">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Category</span>
            <span className="sm:hidden">Add</span>
          </Button>
        )}
        {currentPage === "settings" && (
          <Button size="sm" className="gap-2 text-xs md:text-sm">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">New Setting</span>
            <span className="sm:hidden">New</span>
          </Button>
        )}
      </div>
    </header>
  )
}
