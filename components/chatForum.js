"use client";

import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useCreateChatClient,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const userToken = clerkUser.token;
  const userId = clerkUser.id;
  const userName = clerkUser.name;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: `https://getstream.io/random_png/?name=${slug}`,
      name: slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client)
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100 p-4">
        <div className="text-xl font-semibold text-gray-700 p-6 bg-white rounded-lg shadow-md">
          Setting up client & connection...
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 p-2">
      <div className="w-full max-w-4xl h-full md:h-[75vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 p-8">
        <Chat client={client}>
          <Channel channel={channel} className="flex-1 flex flex-col">
            <Window>
              <ChannelHeader />
              <MessageList className="flex-1" />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>
    </div>
  );
};

export default ChatForum;
