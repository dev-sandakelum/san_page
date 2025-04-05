"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PersonStanding,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

const data = {
  user: {
    name: "User",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Top projects",
      url: "/topProjects",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Chat AI",
          url: "/topProjects/chat_app",
        },
      ],
    },
    {
      title: "Games",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "test",
          url: "#",
        },
      ],
    },
    {
      title: "Mini-works",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Whatsapp stickers",
          url: "/mini/wA_stickers",
        }, {
          title: "minecraft textures",
          url: "#",
        }, {
          title: "art-works",
          url: "#",
        },

      ],
    },
    {
      title: "About me",
      url: "#",
      icon: PersonStanding,
      items: [
        {
          title: "General",
          url: "#",
        },{
          title: "TimeLine",
          url: "#",
        },{
          title: "Contact",
          url: "/About/Contact",
        },

      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "not yet",
      url: "#",
      icon: Frame,
    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image alt="" src={'/san_.png'} width={50} height={50} className=" overflow-hidden rounded-lg" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Hasitha_san_</span>
                  <span className="truncate text-xs">Digital creator</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
