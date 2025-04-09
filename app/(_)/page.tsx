import Image from "next/image";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Instagram, TikTok, Youtube } from "@/components/ui_by_me/Cards";
import Info_main from "@/components/info/Info-main";
import { CardDescription } from "@/components/ui/card";
import "../animation.css";

let web_data = {
  is_logged_in: false,
  is_guest_logging_allowed: true,
  user: {
    name: "John Doe",
    picture: "https://example.com/picture.jpg",
  },
  session: { user_web_acc_key: "1234567890" },
};

// controlling unit
export default function ControllerX() {
  // method selection

  // if user data was already losted
  if (web_data.is_logged_in === false) {
    // redirect to login page
    // window.location.href = '/login';
  }

  // if user data was not supposed to be losted
  if (web_data.user === null) {
    // redirect to home page
    web_data.is_logged_in = false;
    // window.location.href = '/';
  }

  // sign out
  function signOut(User_id: string = "", user_web_acc_key: string = "") {
    if (
      web_data.user.name === User_id &&
      web_data.session.user_web_acc_key === user_web_acc_key
    ) {
      web_data.is_logged_in = false;
      web_data.user = { name: "", picture: "" };
      // window.location.href = '/';
    } else {
      // -----++++---- create alert window after
      alert("Invalid user data");
    }
  }
  // Path_adder(['hh', 'g']);
  return (
    <>
      <SidebarInset suppressHydrationWarning className="h-lvh overflow-scroll">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 fixed bg-background" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 items-center">
          <div className="flex items-center justify-center md:gap-[60px] gap-4 flex-col md:flex-row md:mb-[20px]">
            <div className="flex items-center justify-center rounded-full shadowPulse">
              <div className="w-[320px] h-[320px]  rounded-full bg-transparent overflow-hidden">
                <div className="w-[304px] h-[304px] rounded-full bg-accent absolute z-3 "></div>
                <div className="w-[320px] h-[320px] rounded-full overflow-hidden relative animate-spin">
                  <div className="w-[800px] h-[800px] bg-gradient-to-b from-purple-600 via-blue-400 to-red-500 absolute z-2 "></div>
                </div>
              </div>
              <Image
                alt=""
                src={"/san_.png"}
                width={500}
                height={500}
                className="rounded-full absolute w-[240px] h-[240px] z-4"
              />
            </div>
            <div className="bg-[#ffffff0c] text:1xl md:text-2xl lg:text-4xl flex flex-col items-center md:items-start mb-6 border-2 p-2 rounded-2xl md:min-w-[400px] lg:min-w-[500px]">
              <h1 className=" sm:text-[2rem] capitalize text-[1.5rem] md:pl-4 pt-4">
                HASITHA SANDAKELUM
              </h1>


              <CardDescription><Info_main/></CardDescription>

              
            </div>
          </div>

          <div className="grid auto-rows-min md:gap-4 gap-2 md:grid-cols-2 lg:grid-cols-3 ">
            <Youtube />
            <Instagram />
            <TikTok />
          </div>

          <div className="h-10 md:h-0"></div>
        </div>
      </SidebarInset>
    </>
  );
}
