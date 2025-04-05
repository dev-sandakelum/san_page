import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { List } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="border grid auto-rows-min sm:gap-4 gap-1 place-items-center md:place-items-stretch min-w-[400px] md:grid-cols-2 lg:grid-cols-3 max-w-screen mx-auto overflow-x-hidden">
        <Card className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90">
          <CardHeader>
            <CardTitle>Ai chat app</CardTitle>
            <CardDescription>
              created with google gemini api
              <CardContent>
                <ul className=" list-disc text-">
                  <li>No storage system</li>
                  <li>Safe & fast</li>
                  <li>you can access without fee</li>
                </ul>
              </CardContent>
            </CardDescription>
          </CardHeader>
          <Link href={"./topProjects/chat_app"} className="px-8 w-full">
            <Button className="w-full">Try..</Button>
          </Link>
        </Card>

        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
        <div className="bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90"></div>
      </div>
    </>
  );
}
