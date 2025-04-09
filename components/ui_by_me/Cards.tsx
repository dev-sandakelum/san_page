import React from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { YouTubeSubscriberCounter } from "../youtube-subscriber-counter/counter";

export function Youtube() {
  return (
    <Card className={` border-red-400 bg-muted/50 aspect-video rounded-xl flex justify-center flex-col p-6 max-w-[400px] sm:scale-100 scale-85`}>
      <CardHeader>Youtube</CardHeader>
      <div className=" -mt-4 flex gap-3 items-center ">
        <Image
          alt=""
          src={
            "https://yt3.googleusercontent.com/QL8r67PPwEOvv6Scm5cV9wH1-aQcUO0zEBoFSYwDGodSUuB963jFCqYEqpAr9ORR4ktdnOKYOA=s160-c-k-c0x00ffffff-no-rj"
          }
          width={50}
          height={50}
          className="rounded-full shadow-lg shadow-red-500 border border-background"
        />
        <div className="">
          <p>HASITHA SANDAKELUM</p>
          <CardDescription>
            <YouTubeSubscriberCounter />
          </CardDescription>
        </div>
      </div>
      <div className="">
        <Link
          href={"https://www.youtube.com/@hasitha_sandakelum"}
          className="w-full"
        >
          <Button className="w-[100%] bg-red-500 hover:bg-red-700 text-white transition ">Subscribe</Button>
        </Link>
      </div>  
    </Card>
  );
}
export async function Instagram() {
  let count_of_followers:any = 0;
  let pic = "/Untitled-6.png";
  const url =
    `https://instagram230.p.rapidapi.com/user/details?username=${process.env.INSTAGRAM_USERNAME}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3036335a10mshd6af09905ffde9cp1226c5jsn3cee5481f5f0",
      "x-rapidapi-host": "instagram230.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    count_of_followers = JSON.parse(result)["data"]["user"]["edge_followed_by"]["count"];
    console.log(JSON.parse(result));
    if (JSON.parse(result)["data"]["user"]["profile_pic_url"] !== undefined) {
      pic = JSON.parse(result)["data"]["user"]["profile_pic_url"];
    }
  } catch (error) {
    console.error(error);
  }
  return (
    <Card className={`border-purple-400 bg-muted/50 aspect-video rounded-xl flex justify-center flex-col p-6 max-w-[400px] sm:scale-100 scale-85`}>
      <CardHeader>Instagram</CardHeader>
      <div className=" -mt-4 flex gap-3 items-center ">
        <Image
          alt=""
          src={pic}
          width={50}
          height={50}
          className="rounded-full  shadow-lg shadow-purple-500 border border-background"
        />
        <div className="">
          <p>@Hasitha_san_</p>
          <CardDescription>{count_of_followers} Followers</CardDescription>
        </div>
      </div>
      <div className="">
        <Link href={"#"} className="w-full">
          <Button className="w-[100%] bg-purple-500 hover:bg-purple-700 text-white transition ">Follow</Button>
        </Link>
      </div>
    </Card>
  );
}
export async function TikTok() {
  let count_of_followers = 0;
  let pic = "/Untitled-6.png";
  const url = `https://tiktok-api23.p.rapidapi.com/api/user/info?uniqueId=${process.env.TIKTOK_SEC_UID}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3036335a10mshd6af09905ffde9cp1226c5jsn3cee5481f5f0",
      "x-rapidapi-host": "tiktok-api23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result: any = await response.text();
    count_of_followers =
      JSON.parse(result)["userInfo"]["stats"]["followerCount"];
    pic = JSON.parse(result)["userInfo"]["user"]["avatarLarger"];
  } catch (error) {
    console.error(error);
  }

  return (
    <Card className={`border-blue-700 bg-muted/50 aspect-video rounded-xl flex justify-center flex-col p-6 max-w-[400px] sm:scale-100 scale-85`}>
      <CardHeader>Tiktok</CardHeader>
      <div className=" -mt-4 flex gap-3 items-center ">
        <Image
          alt=""
          src={pic}
          width={50}
          height={50}
          className="rounded-full shadow-lg shadow-blue-500 border border-background"
        />
        <div className="">
          <p>Hasitha_san_</p>
          <CardDescription>{count_of_followers} Followers</CardDescription>
        </div>
      </div>
      <div className="">
        <Link href={"https://www.tiktok.com/@hasitha_san_"} className="w-full">
          <Button className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white transition ">Follow</Button>
        </Link>
      </div>
    </Card>
  );
}
