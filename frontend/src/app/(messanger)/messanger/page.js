"use client"
import ChatOnline from "@/components/chatOnline/ChatOnline"
import Conversations from "@/components/conversations/Conversations"
import Message from "@/components/message/Message"
import api from "@/utils/api"
// import {  } from "react"
import { useEffect, useState } from "react"

import { useSelector } from "react-redux"

const page = () => {

    const [conversation, setConversation] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])




    const { user: currentUserInfo } = useSelector((state) => state.isAuthState)
    // console.log(currentUserInfo);


    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await api.get(`/api/conversation/${currentUserInfo._id}`)
                // console.log('this is get conversation line 21',res);
                setConversation(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getConversations()
    }, [currentUserInfo._id])

    useEffect(() => {
        const getMessages = async () => {
            // const res = await api.get(`/api/messages/6564b7a4d8b2a7e4c6f064d4`)
            try {
                const res = await api.get(`/api/messages/${currentUserInfo?._id}`)
    console.log('hello world',res);
                
                setMessages(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getMessages()
    },[currentUserInfo?._id])




    return (
        <div className="flex  h-screen">
            {/* chat menu */}
            <div className="flex-[3.5]">
                {/* chat menu wraaper */}
                <div className="p-3 h-full">
                    <input type="text" placeholder="Search for friends" className="w-[90%] py-3  border-b-2 outline-none" />
                    {
                        conversation.map((conversation, index) => {
                            return <div onClick={() => setCurrentChat(conversation)} key={index}>
                             <Conversations conversation={conversation}  currentUser={currentUserInfo} />
                            </div>
                        })
                    }
                </div>
            </div>
            {/* chat box */}
            <div className="flex-[6.5]">
                {/* chat box wraaper */}
                {
                    currentChat ?
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
                                <button className="w-20 h-10 rounded-md bg-green-600 hover:bg-green-800 text-white cursor-pointer">Submit</button>
                            </div>
                        </div>
                        : <h1>Open a Conversation to Start a chat.</h1>
                }
            </div>
            {/* chat online */}
            <div className="flex-[2.8] h-screen">
                {/* chat online wraaper */}
                <div className="p-3 h-full overflow-y-scroll">
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                </div>
            </div>
        </div>
    )
}

export default page