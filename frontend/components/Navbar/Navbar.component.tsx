import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  routes: { id: number; name: string; route: string }[];
};

function Navbar({ routes }: Props) {
  const router = useRouter();

  return (
    <nav>
      {routes.map((item) => {
        return (
          <button key={item.id}>
            <Link href={item.route}>
              <div
                className={`flex flex-col items-center space-y-1 transition duration-100 ease-in-out ${
                  router.pathname === item.route
                    ? "text-sky-700"
                    : "text-stone-900"
                }  hover:text-sky-700`}
              >
                <p className="text-xs">{item.name}</p>
              </div>
            </Link>
          </button>
        );
      })}
    </nav>
  );
}

export default Navbar;
