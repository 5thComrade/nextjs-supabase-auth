import type { ReactElement } from "react";
import { useState } from "react";
import axios from "axios";
import {
  createServerSupabaseClient,
  Session,
  User,
} from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import PrivateLayout from "@/frontend/layouts/Private.layout";
import type { NextPageWithLayout } from "@/pages/_app";

type Props = {
  session: Session;
  user: User;
};

const Dashboard: NextPageWithLayout = ({ session, user }: Props) => {
  const [apiUser, setApiUser] = useState<User>();

  const handlePrivateApiCall = async () => {
    try {
      const data = await axios.get("/api/private/user");
      setApiUser(data.data.data);
    } catch (err) {
      console.error("api error: ", err);
    }
  };

  return (
    <main className="mt-4">
      <h1 className="text-xl font-light">Hey User!</h1>

      <p className="font-light">{`This is a protected page, if you are able to view this page that means you're authentication was successful.`}</p>

      <button
        onClick={handlePrivateApiCall}
        className="bg-sky-700 text-white font-light text-sm px-3 py-1 mt-4 rounded"
      >
        Call Private API
      </button>

      {apiUser && Object.keys(apiUser).length > 0 && (
        <div className="font-light text-sm bg-gray-300 rounded my-3 px-2 py-1">
          <p>Your email: {apiUser?.email}</p>
          <p>Email confirmed at: {apiUser?.confirmed_at}</p>
          <p>Last sign in: {apiUser?.last_sign_in_at}</p>
        </div>
      )}
    </main>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const supabase = createServerSupabaseClient(ctx);
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!session)
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };

//   return {
//     props: {
//       session: session,
//       user: user,
//     },
//   };
// };

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export default Dashboard;
