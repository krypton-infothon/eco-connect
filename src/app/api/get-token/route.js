

import { checkIfSessionExists } from '@/lib/checkLoggedIn.js'

import { auth } from "@clerk/nextjs/server";
import axios from "axios";

import { NextResponse } from 'next/server';
export async function GET(req) {
  const { userId, getToken } = await auth()
  const token = await getToken();
  await axios.get('http://localhost:5050', {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
      "X-User-Id": userId,
    },
  }).then((response) => {
    console.log(response)


  })
  const redirectUrl = new URL("/home", req.nextUrl.origin);
  return NextResponse.redirect(redirectUrl)

}


