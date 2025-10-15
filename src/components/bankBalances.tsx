import { Card } from "./ui/card"

export function BankBalances() {
  const balances = [
    { name: "Cash", amount: "675", currency: "USD" },
    { name: "Revolut", amount: "897.01", currency: "EUR" },
    { name: "Bank of America", amount: "4588.11", currency: "USD" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {balances.map((balance) => (
        <Card key={balance.name} className="bg-secondary border-zinc-800 p-5 hover:bg-zinc-900 transition-colors rounded-2xl">
          <p className="text-md text-zinc-400 mb-2">{balance.name}</p>
          <p className="text-3xl font-semibold text-white">
            {balance.amount} {balance.currency}
          </p>
        </Card>
      ))}
    </div>
  )
}
