import withPrivateLayout from "@/frontend/layouts/Private.layout";

function Dashboard() {
  return (
    <main className="mt-4">
      <h1 className="text-xl font-light">Hey User!</h1>
      <p className="font-light">{`This is a protected page, if you are able to view this page that means you're authentication was successful.`}</p>
    </main>
  );
}

export default withPrivateLayout(Dashboard);
