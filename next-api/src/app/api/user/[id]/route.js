import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request,content) {
  console.log(content.params.id)
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
