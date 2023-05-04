import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  routes: { id: number; name: string; route: string }[];
  privateNav: boolean;
};

function Navbar({ routes, privateNav }: Props) {
  const router = useRouter();

  return (
    <nav className="flex gap-4 bg-gray-300 px-4 py-2">
      {routes.map((item) => {
        return (
          <button key={item.id}>
            <Link href={item.route}>
              <div
                className={`${
                  router.pathname === item.route
                    ? "text-sky-700"
                    : "text-stone-900"
                }  hover:text-sky-700`}
              >
                <p className="text-base">{item.name}</p>
              </div>
            </Link>
          </button>
        );
      })}
      {privateNav ? <button>Logout</button> : null}
    </nav>
  );
}

export default Navbar;
