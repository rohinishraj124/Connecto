// app/api/create/route.js
import { StreamChat } from 'stream-chat';
import clerk from '@clerk/clerk-sdk-node';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

const forumSlugs = [
  "python-chat",
  "javascript-chat",
  "devops-chat",
  "data-structures-chat",
  "nextjs-chat",
  "ml-chat",
  "react-chat",
  "opensource-chat",
];

export async function POST(req) {
  try {
    const { userId } = await req.json();

    const serverClient = StreamChat.getInstance(apiKey, apiSecret);
    const token = serverClient.createToken(userId);

    // Create the user on Stream (if not already present)
    await serverClient.upsertUser({ id: userId });

    // Update Clerk publicMetadata with token
    await clerk.users.updateUser(userId, {
      publicMetadata: { token },
    });

    console.log(`✅ Created token for ${userId}:`, token);

    // Create channels for the user if not already created
    await Promise.all(
      forumSlugs.map(async (slug) => {
        const channel = serverClient.channel('messaging', slug, {
          image: 'https://getstream.io/random_png/?name=react',
          name: slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          created_by_id: userId,
        });
        await channel.create(); // ensure channel is created
        channel.addMembers([userId]);
      })
    );

    return Response.json({ token });
  } catch (err) {
    console.error("❌ Error creating token:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
