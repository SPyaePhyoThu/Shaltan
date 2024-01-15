import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract shoeImageId from the URL parameters
    const { shoeImageId } = req.query;
    console.log("Received shoeImageId:", shoeImageId);

    // Ensure shoeImageId is a valid number before using it in the query
    if (!shoeImageId || isNaN(+shoeImageId)) {
      return res.status(400).json({ error: "Invalid shoeImageId" });
    }

    const images = await prisma.image.findMany({
      where: {
        shoeId: +shoeImageId,
      },
    });

    return res.status(200).json(images);
  } catch (error) {
    return res.status(500).json(error);
  }
}
