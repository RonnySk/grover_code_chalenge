import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../../models/product";
import { connectToDB } from "../../../../../utils/database";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectToDB();

    const allSubscriptions = await Product.find({});

    return new Response(JSON.stringify(allSubscriptions), { status: 201 });
  } catch (error) {}
};
