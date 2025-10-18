"use client"

import type React from "react"

import type { ReactNode } from "react"
import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"

export type PageType = "dashboard" | "wallets" | "categories" | "settings"

interface DashboardLayoutProps {
  children: ReactNode
  currentPage: PageType
  onPageChange: React.Dispatch<React.SetStateAction<PageType>>
}

export function DashboardLayout({ children, currentPage, onPageChange }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background dark">
      <Sidebar
        currentPage={currentPage}
        onPageChange={onPageChange}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header
          currentPage={currentPage}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Content outlet */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
