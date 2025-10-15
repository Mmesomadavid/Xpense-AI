import { Card } from "./ui/card"
export function TotalMoney() {
  const totals = [
    { amount: "5263.11", currency: "USD" },
    { amount: "897.01", currency: "EUR" },
  ]

  return (
    <Card className="bg-transparent border-none p-0">
      <h2 className="text-base font-normal text-zinc-400 mb-4">Total Money</h2>
      <div className="space-y-3">
        {totals.map((total) => (
          <div
            key={total.currency}
            className="flex items-center justify-between rounded-xl bg-secondary p-5 hover:bg-zinc-900/80 transition-colors"
          >
            <p className="text-3xl font-semibold text-white">{total.amount}</p>
            <p className="text-xl font-medium text-white">{total.currency}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
