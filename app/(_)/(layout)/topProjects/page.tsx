
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Description } from "@radix-ui/react-dialog";
import Link from "next/link";
import React from "react";
import { topProjectsData } from "./data";
import { Mycard } from "@/components/mycard";

export default function Page() {
  return (
    <>
      <div className="grid auto-rows-min sm:gap-4 gap-1 min-w-[400px] md:grid-cols-2 lg:grid-cols-3 max-w-screen mx-auto overflow-x-hidden">
        {topProjectsData.map((item, index) => (
          <Mycard key={index} data={item} />
        ))}
        
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
      </div>
    </>
  );
}
