import { getAuth, currentUser } from "@clerk/nextjs/server";

export async function GET(req) {
  const user = await currentUser();
  const { userId, getToken } = getAuth(req);
  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const token = await getToken();
  return new Response(JSON.stringify({ token, user:user }), { status: 200 });
}


