"use client"
import "../globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Separator } from "@radix-ui/react-separator";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Path_adder } from "@/components/path/Path_loc";
import { usePathname } from "next/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const paths: string = usePathname();


  return (

    <SidebarInset suppressHydrationWarning className=" overflow-y-hidden h-lvh">
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 fixed bg-background" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb className="ml-6 md:ml-0">
            <BreadcrumbList>
              <Path_adder path={paths} />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 h-full border overflow-y-scroll">

        {children}


      </div>
    </SidebarInset>
  );
}
