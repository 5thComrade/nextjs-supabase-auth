import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(401).json({ status: 401, message: "Unauthorized" });
}
