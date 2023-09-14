import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Kittiwat Yasarawan",
    studentId: "650612079",
  });
};
