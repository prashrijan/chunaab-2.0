import { Home, User, Contact, LogOut, Mail, Vote } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import Image from "next/image";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Profile",
        url: "#",
        icon: User,
    },
    {
        title: "Elections",
        url: "#",
        icon: Vote,
    },
    {
        title: "Support",
        url: "#",
        icon: Contact,
    }
]

export function AppSidebar() {
    return (
        <Sidebar className="border-r border-border/40 bg-gradient-to-b from-background via-background/95 to-background/90 dark:from-background dark:via-slate-950/95 dark:to-slate-900/90">
            {/* Header with application name and icon */}
            <SidebarHeader className="border-b border-border/40 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 dark:border-slate-800/60">
                <div className="flex flex-col items-center gap-3 py-6 px-4">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 blur-xl rounded-full"></div>
                        <div className="relative bg-background dark:bg-slate-900/80 rounded-full p-3 shadow-lg border border-border/50 dark:border-slate-700/60 dark:shadow-2xl">
                            <Image
                                src="/chunaab-logo.svg"
                                alt="chunaab-logo"
                                width={32}
                                height={32}
                                className="drop-shadow-sm dark:drop-shadow-md dark:brightness-110"
                            />
                        </div>
                    </div>
                    <div className="text-center space-y-1">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                            Chunaab
                        </h2>
                        <p className="text-xs text-white/80 font-medium tracking-wide">
                            Digital Voting Platform
                        </p>
                    </div>
                </div>
            </SidebarHeader>

            {/* Main content with menu items */}
            <SidebarContent className="flex-1 py-6">
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2 px-4">
                            {items.map((item, index) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="group relative h-12 rounded-lg transition-all duration-200 hover:bg-primary/10 dark:hover:bg-primary/20 hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-primary/5 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <a href={item.url} className="flex items-center gap-4 px-4">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-md shadow-sm border  border-slate-700/50 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 group-hover:border-primary/20 dark:group-hover:border-primary/30 transition-all duration-200">
                                                <item.icon className="h-4 w-4  text-white/70 transition-colors duration-200" />
                                            </div>
                                            <span className="font-medium text-white  transition-colors duration-200">
                                                {item.title}
                                            </span>
                                            {/* Hover indicator */}
                                            <div className="absolute right-2 w-1 h-6 bg-primary dark:bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer with user profile */}
            <SidebarFooter className="border-t border-border/40 border-slate-800/60 bg-gradient-to-r  from-slate-900/50 to-slate-800/30 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* User image with enhanced styling */}
                        <div className="relative">
                            <div className="h-11 w-11 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 p-0.5">
                                <img
                                    src="https://github.com/shadcn.png"
                                    alt="User avatar"
                                    className="h-full w-full object-cover rounded-full border border-background dark:border-slate-800"
                                />
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 dark:bg-green-400 border-2 border-background dark:border-slate-900 rounded-full shadow-sm"></div>
                        </div>

                        {/* User details with improved typography */}
                        <div className="flex flex-col min-w-0 flex-1">
                            <span className="text-sm font-semibold text-foreground dark:text-white truncate">
                                John Doe
                            </span>
                            <span className="text-xs text-muted-foreground dark:text-white/70 flex items-center gap-1.5 truncate">
                                <Mail className="h-3 w-3 flex-shrink-0" />
                                john@example.com
                            </span>
                        </div>
                    </div>

                    {/* Enhanced logout button */}
                    <button
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-background dark:bg-slate-800/60 hover:bg-destructive/10 dark:hover:bg-red-500/20 hover:text-destructive dark:hover:text-red-400 border border-border/50 dark:border-slate-700/50 hover:border-destructive/20 dark:hover:border-red-500/30 transition-all duration-200 hover:shadow-md dark:hover:shadow-xl active:scale-95 group"
                        title="Sign out"
                    >
                        <LogOut className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                    </button>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}