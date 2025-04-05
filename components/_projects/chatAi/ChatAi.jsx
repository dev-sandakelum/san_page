"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ChatAi() {
  const [text, setText] = useState("");
  const [Output, setOutput] = useState("");
  const [waiting, setWaiting] = useState(false);

  let chat = [];
  async function Ai({ _prompt }) {
    setText("");
    setWaiting(true);
    setOutput("");
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Explain how AI works";

    const result = await model.generateContent(text);

    let formattedResponse = result.response
      .text()
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text
      .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic text
      .replace(/```(.*?)```/gs, "<pre><code>$1</code></pre>") // Code blocks
      .replace(/\n/g, "<br>");

    // console.log(result.response.text());
    //   return result.response.text();
    // setOutput(result.response.text());
    setWaiting(false);
    setOutput(formattedResponse);
  }

  return (
    <div className="flex w-full items-center justify-center h-min">
      {/* <Ai /> */}
      <div className="max-w-auto w-full h-full flex flex-col-reverse overflow-x-hidden">
        <div className="w-full h-auto flex flex-col px-4 py-2">
          <p dangerouslySetInnerHTML={{ __html: Output }}></p>
          {waiting && <div>Loading...</div>}
        </div>
        <div className=" w-full h-auto  px-2 ">
          {/* input */}
          <div className="flex justify-center overflow-hidden px-2 md:px-4">
            <Textarea
              type="text"
              className=" w-full border-none focus:outline-none self-auto"
              placeholder="Ask anything"
              onChange={(e) => setText(e.target.value)}
            />
            <Input
              type="button"
              value=">"
              className="w-[40px] h-[40px] flex justify-center items-center "
              onClick={() => Ai(text)}
            />
          </div>
          {/* input-end */}
        </div>
      </div>
    </div>
  );
}
