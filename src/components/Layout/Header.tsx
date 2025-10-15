import { Button } from "../ui/button"
import { Plus } from "lucide-react"

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-none  bg-background px-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Wallet
        </Button>
      </div>
    </header>
  )
}
