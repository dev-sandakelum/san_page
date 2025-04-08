
import Image from "next/image";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Instagram, TikTok, Youtube } from "@/components/ui_by_me/Cards";


let web_data = {
  'is_logged_in': false,
  'is_guest_logging_allowed': true,
  'user': {
    'name': 'John Doe',
    'picture': 'https://example.com/picture.jpg',
  },
  'session': { 'user_web_acc_key': '1234567890' },
}

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
  function signOut(User_id: string = '', user_web_acc_key: string = '') {
    if (web_data.user.name === User_id && web_data.session.user_web_acc_key === user_web_acc_key) {
      web_data.is_logged_in = false;
      web_data.user = { name: '', picture: '' };
      // window.location.href = '/';
    } else {
      // -----++++---- create alert window after
      alert('Invalid user data');
    };

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
            <div className="flex items-center justify-center ">
              <div className="w-[320px] h-[320px]  rounded-full bg-accent-foreground ">
                <div className="w-[304px] h-[304px]  rounded-full bg-accent "></div></div>
              <Image alt="" src={'/Untitled-6.png'} width={500} height={500} className="rounded-full absolute w-[240px] h-[240px] " />
            </div>
            <div className="text:1xl md:text-2xl lg:text-4xl flex flex-col gap-2 items-center md:items-start mb-6">

              <h1 className=" sm:text-[2rem] capitalize text-[1.5rem] ">HASITHA SANDAKELUM</h1>

              <p className=" text-[1rem] text-gray-500 font-light capitalize">Digital creator</p>

              <div className="flex gap-2 mt-2">
                
                <p className=" text-[1rem] font-light underline">
                  dev.sandakelum@gmail.com
                </p>
              </div>


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
