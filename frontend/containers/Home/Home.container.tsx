import type { ReactElement } from "react";
import PublicLayout from "@/frontend/layouts/Public.layout";
import type { NextPageWithLayout } from "@/pages/_app";

const Home: NextPageWithLayout = () => {
  return (
    <main className="mt-4">
      <h1 className="text-xl font-light">Welcome</h1>
      <p className="font-light">
        This is a simple application that demonstrates how to implement
        authentication in a NextJS application using Supabase.
      </p>
      <p className="font-light">
        As developers we know how difficult it is to add authentication into our
        apps and with all the auth providers/services available today it just
        becomes more difficult. I am sure there are several ways to add
        authentication to a NextJS app, this is just one way.
      </p>
      <br />
      <p className="font-light text-sm">
        Note: The source code for this application is available on Github. I am
        always open to discuss ways to improve app security using NextJS and
        Supabase.
      </p>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
