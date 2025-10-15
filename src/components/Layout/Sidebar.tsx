import { LayoutDashboard, Wallet, FolderOpen, Settings, MessageSquare, AlertCircle } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-none bg-sidebar-background">
      {/* Logo/Brand */}
      <div className="flex h-16 items-center border-none  px-6">
        <h1 className="text-lg font-semibold text-sidebar-foreground">XPense.<span className="text-orange-400">AI</span></h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          <Wallet className="h-4 w-4" />
          Wallets
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          <FolderOpen className="h-4 w-4" />
          Categories
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          <Settings className="h-4 w-4" />
          Settings
        </a>
      </nav>

      {/* Footer links */}
      <div className="border-none p-4 space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          <MessageSquare className="h-4 w-4" />
          Give feedback
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-secondary hover:text-secondary-foreground"
        >
          <AlertCircle className="h-4 w-4" />
          Report issue
        </a>
      </div>
    </aside>
  )
}
