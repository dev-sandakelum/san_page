import React from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { YouTubeSubscriberCounter } from "../youtube-subscriber-counter/counter";

export function Youtube() {
  return (
    <Card className="bg-muted/50 aspect-video rounded-xl flex justify-center flex-col p-6 max-w-[400px]">
      <CardHeader>Youtube</CardHeader>
      <div className=" -mt-4 flex gap-3 items-center ">
        <Image
          alt=""
          src={"/channels_profile.jpg"}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="">
          <p>HASITHA SANDAKELUM</p>
          <CardDescription>
            <YouTubeSubscriberCounter />
          </CardDescription>
        </div>
      </div>
      <div className="">
        <Link href={"https://www.youtube.com/@hasitha_sandakelum"} className="w-full">
          <Button className="w-[100%]">Subscribe</Button>
        </Link>
      </div>
    </Card>
  );
}
export function Instagram() {
  return (
    <Card className="bg-muted/50 aspect-video rounded-xl flex justify-center flex-col p-6 max-w-[400px]">
      <CardHeader>Instagram</CardHeader>
      <div className=" -mt-4 flex gap-3 items-center ">
        <Image
          alt=""
          src={"/temp_sticker/path3.png"}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="">
          <p>@Hasitha_san_</p>
          <CardDescription>1.9K Followers</CardDescription>
        </div>
      </div>
      <div className="">
        <Link href={"#"} className="w-full">
          <Button className="w-[100%]">Follow</Button>
        </Link>
      </div>
    </Card>
  );
}
export function TikTok() {
  return (
    <Card className="bg-muted/50 aspect-video rounded-xl flex justify-center flex-col p-6 max-w-[400px]">
      <CardHeader>Tiktok</CardHeader>
      <div className=" -mt-4 flex gap-3 items-center ">
        <Image
          alt=""
          src={"/temp_sticker/path3.png"}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="">
          <p>Hasitha_san_</p>
          <CardDescription>1.9K Followers</CardDescription>
        </div>
      </div>
      <div className="">
        <Link href={"#"} className="w-full">
          <Button className="w-[100%]">Follow</Button>
        </Link>
      </div>
    </Card>
  );
}
