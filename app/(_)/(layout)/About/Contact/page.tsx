import React from "react";

export function User_chat(text: any) {
  let border_color = "border-amber-500";
  console.log(text);

  return (
    <div className="w-full flex justify-end">
      <p
        className={`border-2 ${border_color} border-r-4 w-fit p-2 max-w-60% mb-2`}
      >
        <sup>you</sup>
        <hr className={`w-full border-b ${border_color}`}/>
        <p>{text["text"]}</p>
      </p>
    </div>
  );
}
export function Sever_chat(text: any) {
  let border_color = "border-blue-500";
  return (
    <div className="w-full flex justify-start">
      <p
        className={`border-2 ${border_color} border-r-4 w-fit p-2 max-w-60% mb-2`}
      >
      <sup>@Admin</sup>
      <hr className={`w-full border-b ${border_color}`}/>
        <p>{text["text"]}</p>
      </p>
    </div>
  );
}

export default function page() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full max-w-[600px] border-x h-full overflow-hidden flex flex-col">
        <div className="w-full h-full overflow-x-hidden overflow-y-scroll">
          <User_chat text={"hi how are u"} />
          <Sever_chat text={"hi how are u"} />
          <User_chat text={"hi how are u"} />
          <Sever_chat text={"hi how are u"} />
          <User_chat text={"hi how are u"} />
          <Sever_chat text={"hi how are u"} />
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
