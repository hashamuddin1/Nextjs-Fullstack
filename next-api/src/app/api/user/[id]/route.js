import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request,content) {
  console.log(content.params.id)
  const data = user.filter((item) => item.id == content.params.id);
  return NextResponse.json(data[0], { status: 200 });
}
