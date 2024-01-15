import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract shoeImageId from the URL parameters
    const { sizeId } = req.query;
    console.log("Received shoeImageId:", sizeId);

    // Ensure sizeId is a valid number before using it in the query
    if (!sizeId || isNaN(+sizeId)) {
      return res.status(400).json({ error: "Invalid sizeId" });
    }

    const Sizes = await prisma.size.findMany({
      where: {
        shoeId: +sizeId,
      },
    });

    return res.status(200).json(Sizes);
  } catch (error) {
    return res.status(500).json(error);
  }
}
