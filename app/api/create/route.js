import { StreamChat } from 'stream-chat';

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const user_id = "user_2yx29jZgAONcGkfnnEcuCcvyYbE";

export async function GET() {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);
    console.log(token);
    return Response.json({
        message: "success"
    })
}