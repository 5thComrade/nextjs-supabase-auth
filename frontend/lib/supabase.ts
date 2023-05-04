import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabaseBrowserClient = createBrowserSupabaseClient({
  supabaseUrl: supabaseURL,
  supabaseKey: supabaseAnonKey,
});
