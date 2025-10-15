import { BankBalances } from "../components/bankBalances"
import { AllTransactions } from "../components/allTransactions"
import { TotalMoney } from "../components/totalMoney"
import { Subscriptions } from "../components/Subscriptions"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Bank Balances Section */}
      <BankBalances />

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AllTransactions />
        <TotalMoney />
        <Subscriptions />
      </div>
    </div>
  )
}
