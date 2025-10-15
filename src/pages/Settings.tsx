"use client"

import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { GripVertical } from "lucide-react"

export default function Settings() {
  const wallets = [
    { name: "Cash", amount: "675 USD" },
    { name: "Revolut", amount: "897.01 EUR" },
    { name: "Bank of America", amount: "4588.11 USD" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
      {/* Left Column - Settings Content */}
      <div className="space-y-8 max-w-xl">
        {/* Salary Day Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground">Salary Day</h2>
          <p className="text-sm text-muted-foreground">
            Analytics are calculated for one month, starting from the salary day.
          </p>
          <Select defaultValue="8">
            <SelectTrigger className="w-full bg-[#0a0a0a] border-[#2a2a2a] h-12">
              <SelectValue placeholder="Select day" />
            </SelectTrigger>
            <SelectContent className="bg-[#0a0a0a] border-[#2a2a2a]">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <SelectItem key={day} value={day.toString()}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Your Wallets Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground">Your Wallets</h2>
          <p className="text-sm text-muted-foreground">You can change the order by dragging</p>
          <div className="space-y-3">
            {wallets.map((wallet, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#2a2a2a] p-4">
                <div className="flex items-center gap-4">
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{wallet.name}</p>
                    <p className="text-lg font-semibold text-foreground">{wallet.amount}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Remove Account Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground">Remove account</h2>
          <p className="text-sm text-muted-foreground">
            Be aware that removing account will erase all the data you have
          </p>
          <Button className="w-full bg-red-900 hover:bg-red-800 text-white font-medium h-11">Remove account</Button>
        </div>
      </div>
      
      {/* Right Column - User Profile Card */}
      <div className="lg:w-[330px]">
        <Card className="bg-none border-none p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Pavel Keyzik" />
              <AvatarFallback>PK</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium text-foreground">Pavel Keyzik</p>
          </div>

          <Button className="w-full bg-white text-black hover:bg-white/90 font-medium">
            Sign Out
          </Button>
        </Card>
      </div>
    </div>
  )
}
