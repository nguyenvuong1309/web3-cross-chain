import Image from "next/image";
import {
 sendMessage,
 getMessages,
} from "helpers";
import { useState } from "react";


const Page = () => {
  const [text,setText] = useState<any>("");
  const [messageReceive,setMessageReceive] = useState<any>([])

  const send =()=>{
    sendMessage("0x25bE1016Cd01747E8ED5e22ddA4aD0449653f66F",text)
    setText("")
  }

  const get = async ()=>{
    const res = await getMessages("0x25bE1016Cd01747E8ED5e22ddA4aD0449653f66F")
    console.log("🚀 ~ get ~ res:", res)
    setMessageReceive(res)
  }
  
  return (
    <div className="flex-1 justify-between flex flex-col h-full max-h-[calc(100vh-6rem)]">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <div className="relative w-8 sm:w-12 h-8 sm:h-12">
              <Image
                width={'50px'}
                height={'50px'}
                src="https://i.pinimg.com/originals/46/4a/7a/464a7a44c9e7c6e9e4e65453607cc205.jpg"
                alt="profile picture"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col leading-tight">
            <div className="text-xl flex items-center">
              <span className="text-gray-700 mr-3 font-semibold">
                chatPartner.name
              </span>
            </div>

            <span className="text-sm text-gray-600">chatPartner.email</span>
          </div>

        </div>
      </div>
      <div className="w-full h-96 flex">
        <div className="w-full bg-yellow-600 flex-col justify-center" onClick={send}>
          <div className="w-20 h-10 bg-slate-700 flex justify-center items-center">send</div>
          <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
        </div>
        <div className="w-full bg-green-600 flex justify-center" onClick={get}>
          <div className="w-20 h-10 bg-slate-700 flex justify-center items-center">get</div>
          <div >
          {messageReceive && messageReceive.map((message: any, index: any) => (
            <div key={index}>{message?.content}</div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
