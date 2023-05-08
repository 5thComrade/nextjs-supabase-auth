import {
  createServerSupabaseClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: User | {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const supabaseServerClient = createServerSupabaseClient({
    req,
    res,
  });
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();

  res.status(200).json({ data: user ?? {} });
}
