import { Card } from "./ui/card"
import { ArrowUpDown, Briefcase, Tv } from "lucide-react"
import { Button } from "./ui/button"
import { MoreVertical } from "lucide-react"

export function AllTransactions() {
  const transactions = [
    {
      id: 1,
      amount: "+38 EUR",
      description: "Transfer",
      icon: ArrowUpDown,
      positive: true,
    },
    {
      id: 2,
      amount: "40 USD",
      description: "Transfer",
      icon: ArrowUpDown,
      positive: false,
    },
    {
      id: 3,
      amount: "+640 USD",
      description: "Freelance",
      icon: Briefcase,
      positive: true,
    },
    {
      id: 4,
      amount: "15 EUR",
      description: "Disney Plus",
      icon: Tv,
      positive: false,
    },
  ]

  return (
    <Card className="bg-transparent border-none p-0">
      <h2 className="text-base font-normal text-zinc-400 mb-4">Last Transactions</h2>
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center gap-3 rounded-xl bg-secondary p-4 hover:bg-zinc-900/80 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80">
              <transaction.icon className="h-6 w-6 text-zinc-400  " />
            </div>
            <div className="flex-1">
              <p className={`text-2xl font-medium ${transaction.positive ? "text-green-400" : "text-white"}`}>
                {transaction.amount}
              </p>
              <p className="text-sm text-zinc-500">{transaction.description}</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
