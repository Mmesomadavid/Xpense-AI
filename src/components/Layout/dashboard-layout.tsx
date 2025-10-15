"use client"

import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import Dashboard from "../../pages/Dashboard"
import Wallets from "../../pages/Wallets"
import Categories from "../../pages/Categories"
import Settings from "../../pages/Settings"

export type PageType = "dashboard" | "wallets" | "categories" | "settings"

export function DashboardLayout() {
  const [currentPage, setCurrentPage] = useState<PageType>("dashboard")

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "wallets":
        return <Wallets />
      case "categories":
        return <Categories />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background dark">
      {/* Sidebar */}
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header currentPage={currentPage} />

        {/* Content outlet */}
        <main className="flex-1 overflow-auto p-6">{renderPage()}</main>
      </div>
    </div>
  )
}
