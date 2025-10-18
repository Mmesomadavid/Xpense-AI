"use client"

import type React from "react"

import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import {
  Search,
  Copy,
  SettingsIcon,
  MoreVertical,
  Plus,
  Info,
  ArrowUpRight,
  Check,
  Diamond,
  Pizza,
  Hotel,
  Candy,
  Plane,
  Utensils,
  Car,
  Shirt,
  MoreHorizontal,
} from "lucide-react"

const Wallets = () => {
  const transactions = [
    { date: "Jan 1, 2024", amount: "9.99 USD", description: "Netflix", icon: "netflix", type: "expense" },
    { date: "", amount: "25 USD", description: "Pizza", icon: "pizza", type: "expense" },
    { date: "Dec 30, 2023", amount: "+25 USD", description: "Transfer", icon: "transfer", type: "income" },
    { date: "Dec 26, 2023", amount: "+1224 USD", description: "Salary", icon: "salary", type: "income" },
    { date: "Dec 25, 2023", amount: "140 USD", description: "Hotel room", icon: "hotel", type: "expense" },
    { date: "", amount: "28 USD", description: "Candies", icon: "candy", type: "expense" },
    { date: "", amount: "684 USD", description: "Trip to Norway", icon: "plane", type: "expense" },
  ]

  const categories = [
    { name: "Food", spent: 838.1, limit: 1000, currency: "USD", icon: "food", color: "bg-orange-500" },
    { name: "Travel", spent: 156, limit: 500, currency: "USD", icon: "travel", color: "bg-gray-500" },
    { name: "Clothes", spent: 5, limit: 0, currency: "USD", icon: "clothes", color: "bg-gray-500", over: true },
    { name: "Others", spent: 3577.46, limit: 5000, currency: "USD", icon: "others", color: "bg-gray-500" },
  ]

  const subscriptions = [
    { name: "Bank Account Fee", amount: "16.55 USD", icon: "diamond", color: "bg-blue-500" },
    { name: "Netflix", amount: "9.99 USD", icon: "check", color: "bg-green-500" },
  ]

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  const getTransactionIcon = (icon: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      netflix: (
        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
        </div>
      ),
      pizza: (
        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
          <Pizza className="w-4 h-4 text-orange-500" />
        </div>
      ),
      transfer: (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4 text-gray-400" />
        </div>
      ),
      salary: (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
        </div>
      ),
      hotel: (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <Hotel className="w-4 h-4 text-gray-400" />
        </div>
      ),
      candy: (
        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
          <Candy className="w-4 h-4 text-orange-500" />
        </div>
      ),
      plane: (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <Plane className="w-4 h-4 text-gray-400" />
        </div>
      ),
    }
    return iconMap[icon] || <div className="w-8 h-8 rounded-full bg-gray-700" />
  }

  const getCategoryIcon = (icon: string, color: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      food: <Utensils className="w-4 h-4" />,
      travel: <Car className="w-4 h-4" />,
      clothes: <Shirt className="w-4 h-4" />,
      others: <MoreHorizontal className="w-4 h-4" />,
    }
    return (
      <div className={`w-8 h-8 rounded-full ${color}/20 flex items-center justify-center`}>
        <div className={`${color.replace("bg-", "text-")}`}>{iconMap[icon]}</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {/* Icons row - positioned on the right */}
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
            <SettingsIcon className="h-4 w-4" />
          </Button>
        </div>

        {/* Title and Add Transaction button row */}
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-foreground truncate" title="Bank of America (USD)">
            {truncateText("Bank of America (USD)", 7)}
          </h1>
          <Button className="bg-white text-black hover:bg-white/90 font-medium whitespace-nowrap">
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Transactions Only */}
        <div className="lg:col-span-2 space-y-4">
          {/* Transactions List */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-foreground">Transactions</h2>
            <div className="space-y-3">
              {transactions.map((transaction, index) => (
                <div key={index}>
                  {transaction.date && <p className="text-sm text-muted-foreground mb-2">{transaction.date}</p>}
                  <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getTransactionIcon(transaction.icon)}
                        <div>
                          <p
                            className={`text-base font-medium ${transaction.type === "income" ? "text-green-500" : "text-foreground"}`}
                          >
                            {transaction.amount}
                          </p>
                          <p className="text-sm text-muted-foreground">{transaction.description}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Stats, Categories and Subscriptions */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Expected Balance</p>
              <p className="text-xl font-semibold">4588.11 USD</p>
            </div>
            <div className="flex-1 flex items-start gap-2">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Days Before Salary</p>
                <p className="text-xl font-semibold">6 days</p>
              </div>
              <Info className="h-4 w-4 text-muted-foreground mt-6" />
            </div>
          </div>

          {/* Limits by Category */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-foreground">Limits by Category</h2>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <Card key={index} className="bg-[#1a1a1a] border-[#2a2a2a] p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(category.icon, category.color)}
                      <div>
                        <p className="text-sm font-medium text-foreground">{category.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">
                        {category.spent} {category.currency}
                      </p>
                      <p className="text-xs text-muted-foreground">{category.over ? "over" : "left"}</p>
                    </div>
                  </div>
                  <Progress
                    value={category.over ? 100 : (category.spent / category.limit) * 100}
                    className={`h-1 ${category.over ? "[&>div]:bg-red-500" : "[&>div]:bg-primary"}`}
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Subscriptions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-foreground">Subscriptions</h2>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {subscriptions.map((subscription, index) => (
                <Card key={index} className="bg-[#1a1a1a] border-[#2a2a2a] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${subscription.color}/20 flex items-center justify-center`}>
                        {subscription.icon === "diamond" ? (
                          <Diamond className={`w-4 h-4 ${subscription.color.replace("bg-", "text-")}`} />
                        ) : (
                          <Check className={`w-4 h-4 ${subscription.color.replace("bg-", "text-")}`} />
                        )}
                      </div>
                      <p className="text-sm font-medium text-foreground">{subscription.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{subscription.amount}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallets;