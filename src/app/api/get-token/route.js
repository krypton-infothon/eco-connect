
import { auth } from "@clerk/nextjs/server";
import axios from "axios";
export async function GET(req) {
  const {userId, getToken} = await auth()
  const token = await getToken();
  await axios.get('http://localhost:5050', {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
      "X-User-Id": userId,
    },
  }).then((response) => {console.log(response)})
}


