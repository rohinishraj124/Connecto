'use client';

import { useState, useEffect } from 'react';
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const userId = 'user_2yx29jZgAONcGkfnnEcuCcvyYbE';
const userName = 'happy';
const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yeXgyOWpaZ0FPTmNHa2ZubkVjdUNjdnlZYkUifQ.KXtGyPbY7J5Kc_HvrQswwAwavhYFP9ebu7mzq4JorWI';

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const getChannelName = (slug) => {
  const formatted = slug
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return `${formatted} Discussion`;
};


const ChatForum = ({ slug }) => {
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: `https://getstream.io/random_png/?name=${slug}`,
      members: [userId],
    });

    const setupChannel = async () => {
      await channel.watch();
      await channel.update({ name: getChannelName(slug) });
      setChannel(channel);
    };

    setupChannel();
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
