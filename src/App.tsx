"use client"

import { useState } from "react"
import { DashboardLayout } from "./components/Layout/dashboard-layout"
import Dashboard from "./pages/Dashboard"
import Wallets from "./pages/Wallets"
import Categories from "./pages/Categories"
import Settings from "./pages/Settings"

export type PageType = "dashboard" | "wallets" | "categories" | "settings"

export default function App() {
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
    <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  )
}
