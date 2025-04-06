import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Colors } from "./colors";
import { log } from "console";
import './color.css';

type MycardProps = {
  data: any;    
};
let color:any = "";

export const Mycard =({data}: MycardProps) => {
  let _color = data["color"];
   
  let text_color = "text_" + _color ;
  let border_color = "border_" + _color;
  let bg_color = "bg_" + _color;
  console.warn(border_color)
  return (
    <Card className={`${border_color} bg-muted/50 aspect-video rounded-xl md:w-auto w-[90%] max-w-[400px] sm:scale-100 scale-90 flex flex-col justify-center border `}>
      <CardHeader>
        <CardTitle className={text_color}>{data["title"]}</CardTitle>
        <CardDescription>
          {data["description"]}
          <CardContent>
            <ul className="list-disc ">
              {data["list"].map((item: any) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </CardDescription>
      </CardHeader>
      <Link href={data["link"]} className="px-8 w-full">
        <Button className={`w-full ${bg_color}`}>
          Try..
        </Button>
      </Link>
    </Card>
  );
}
