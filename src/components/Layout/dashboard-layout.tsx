"use client"

import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"

export type PageType = "dashboard" | "wallets" | "categories" | "settings"

interface DashboardLayoutProps {
  children: ReactNode
  currentPage: PageType
  onPageChange: React.Dispatch<React.SetStateAction<PageType>>
}

export function DashboardLayout({
  children,
  currentPage,
  onPageChange,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background dark">
      {/* Sidebar */}
      <Sidebar currentPage={currentPage} onPageChange={onPageChange} />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header currentPage={currentPage} />

        {/* Content outlet */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
