import ChatForum from "@/components/chatForum";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page({ params }) {
  const user = await currentUser();
  const slug = params.slug;

  // Fetch token from API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: user.id }),
    cache: "no-store",
  });

  const data = await res.json();
  const token = data?.token;

  return (
    <ChatForum
      slug={slug}
      clerkUser={{
        id: user.id,
        name: user.firstName,
        token, // ✅ token is now guaranteed
      }}
    />
  );
}
