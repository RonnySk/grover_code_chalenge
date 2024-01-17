import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../../../../models/product";
import { connectToDB } from "../../../../../../utils/database";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    connectToDB();

    // const oneProduct = await Product.findById({subscriptionId});
  } catch (error) {
    console.log(error);
  }
}
