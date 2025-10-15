import { Card } from "./ui/card"
import { Check, Diamond } from "lucide-react"

export function Subscriptions() {
  const subscriptions = [
    {
      id: 1,
      name: "Bank Account Fee",
      amount: "16.55 USD",
      icon: Diamond,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      id: 2,
      name: "Disney Plus",
      amount: "15 EUR",
      icon: Check,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
    },
    {
      id: 3,
      name: "Netflix",
      amount: "9.99 USD",
      icon: Check,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
    },
    {
      id: 4,
      name: "Spotify",
      amount: "9.99 EUR",
      icon: Check,
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
    },
  ]

  return (
    <Card className="bg-transparent border-none p-0">
      <h2 className="text-base font-normal text-zinc-400 mb-4">All Subscriptions</h2>
      <div className="space-y-2">
        {subscriptions.map((subscription) => (
          <div
            key={subscription.id}
            className="flex items-center gap-3 rounded-xl bg-zinc-900/60 p-4 hover:bg-zinc-900/80 transition-colors"
          >
            <div className={`flex h-9 w-9 items-center justify-center rounded-full ${subscription.iconBg}`}>
              <subscription.icon className={`h-4 w-4 ${subscription.iconColor}`} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{subscription.name}</p>
            </div>
            <p className="text-sm text-zinc-400">{subscription.amount}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
