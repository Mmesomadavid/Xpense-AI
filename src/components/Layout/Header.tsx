"use client"

import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import type { PageType } from "./dashboard-layout"

type HeaderProps = {
  currentPage: PageType
}

export function Header({ currentPage }: HeaderProps) {
  // Capitalize first letter for display
  const formatTitle = (page: PageType) => {
    return page.charAt(0).toUpperCase() + page.slice(1)
  }

  return (
    <header className="flex h-16 items-center justify-between border-none bg-background px-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">
          {formatTitle(currentPage)}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        {currentPage === "dashboard" && (
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Wallet
          </Button>
        )}
        {currentPage === "wallets" && (
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Transaction
          </Button>
        )}
        {currentPage === "categories" && (
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        )}
        {currentPage === "settings" && (
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            New Setting
          </Button>
        )}
      </div>
    </header>
  )
}
