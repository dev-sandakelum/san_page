import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="grid auto-rows-min sm:gap-4 gap-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen ">
        <Card className="bg-muted/50 aspect-video rounded-xl md:w-auto max-w-[500px] w-[350px] sm:scale-100 scale-90">
          <CardHeader>
            <CardTitle>Sticker_pack</CardTitle>
          </CardHeader>
          <div className="w-auto p-6 gap-2 flex overflow-hidden">
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
          </div>
          <Link href={"#"} className="px-8 w-auto">
            <Button className="w-auto">add..</Button>
          </Link>
        </Card>
        <Card className="bg-muted/50 aspect-video rounded-xl md:w-auto max-w-[500px] w-[350px] sm:scale-100 scale-90">
          <CardHeader>
            <CardTitle>Sticker_pack</CardTitle>
          </CardHeader>
          <div className="w-auto p-6 gap-2 flex overflow-hidden">
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
          </div>
          <Link href={"#"} className="px-8 w-auto">
            <Button className="w-auto">add..</Button>
          </Link>
        </Card>
        <Card className="bg-muted/50 aspect-video rounded-xl md:w-auto max-w-[500px] w-[350px] sm:scale-100 scale-90">
          <CardHeader>
            <CardTitle>Sticker_pack</CardTitle>
          </CardHeader>
          <div className="w-auto p-6 gap-2 flex overflow-hidden">
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
          </div>
          <Link href={"#"} className="px-8 w-auto">
            <Button className="w-auto">add..</Button>
          </Link>
        </Card>
        <Card className="bg-muted/50 aspect-video rounded-xl md:w-auto max-w-[500px] w-[350px] sm:scale-100 scale-90">
          <CardHeader>
            <CardTitle>Sticker_pack</CardTitle>
          </CardHeader>
          <div className="w-auto p-6 gap-2 flex overflow-hidden">
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
          </div>
          <Link href={"#"} className="px-8 w-auto">
            <Button className="w-auto">add..</Button>
          </Link>
        </Card>
        <Card className="bg-muted/50 aspect-video rounded-xl md:w-auto max-w-[500px] w-[350px] sm:scale-100 scale-90">
          <CardHeader>
            <CardTitle>Sticker_pack</CardTitle>
          </CardHeader>
          <div className="w-auto p-6 gap-2 flex overflow-hidden">
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
            <Image
              alt={""}
              src={"/temp_sticker/path3.png"}
              width={80}
              height={80}
            />
          </div>
          <Link href={"#"} className="px-8 w-auto">
            <Button className="w-auto">add..</Button>
          </Link>
        </Card>
      </div>
    </>
  );
}
