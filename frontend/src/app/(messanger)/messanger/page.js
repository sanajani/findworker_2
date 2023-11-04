// import '../globals.css'
import Conversations from "@/components/conversations/Conversations"
import Message from "@/components/message/Message"

const page = () => {
  return (
    <div className="flex  h-screen">
        {/* chat menu */}
        <div className="flex-[3.5]">
            {/* chat menu wraaper */}
            <div className="p-3 h-full">
                <input type="text" placeholder="Search for friends" className="w-[90%] py-3  border-b-2 outline-none" />
                <Conversations/>
            </div>
        </div>
        {/* chat box */}
        <div className="flex-[5.5]">
            {/* chat box wraaper */}
            <div className="p-3 h-full flex flex-col justify-between">
                {/* chat box top */}
                <div className="h-full overflow-y-scroll pr-3">
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                </div>
                {/* chat box bottom */}
                <div className="mt-1 flex items-center justify-between">
                    <textarea placeholder="write something... " className="w-[80%] h-24 p-3 border-2 outline-none resize-none"></textarea>
                    <button className="w-20 h-10 rounded-md bg-green-500 text-white cursor-pointer">Submit</button>
                </div>
            </div>
        </div>
        {/* chat online */}
        <div className="flex-[3]">
            {/* chat online wraaper */}
            <div className="p-3 h-full">
                
            </div>
        </div>
    </div>
  )
}

export default page