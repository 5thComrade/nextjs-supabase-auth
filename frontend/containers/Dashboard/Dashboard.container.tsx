import {
  createServerSupabaseClient,
  Session,
  User,
} from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import withPrivateLayout from "@/frontend/layouts/Private.layout";

type Props = {
  initialSession: Session;
  user: User;
};

function Dashboard({ initialSession, user }: Props) {
  return (
    <main className="mt-4">
      <h1 className="text-xl font-light">Hey User!</h1>
      <div className="font-light text-sm bg-gray-300 rounded my-3 px-2 py-1">
        <p>Your email: {user?.email}</p>
        <p>Email confirmed at: {user?.confirmed_at}</p>
        <p>Last sign in: {user?.last_sign_in_at}</p>
      </div>

      <p className="font-light">{`This is a protected page, if you are able to view this page that means you're authentication was successful.`}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: user,
    },
  };
};

export default withPrivateLayout(Dashboard);
