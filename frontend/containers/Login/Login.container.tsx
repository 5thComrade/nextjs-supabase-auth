import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabaseBrowserClient } from "@/frontend/lib/supabase";
import withPublicLayout from "@/frontend/layouts/Public.layout";

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();

  const handleLogin: SubmitHandler<Inputs> = async (loginData) => {
    const { data, error } = await supabaseBrowserClient.auth.signInWithPassword(
      {
        email: loginData.email,
        password: loginData.password,
      }
    );

    if (error) {
      toast.error("Login unsuccessful!");
      return;
    }

    router.replace("/protected/dashboard");
    console.log("login", data);
    toast.success("Welcome back!");
  };
  return (
    <main className="mt-4">
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit(handleLogin)} className="mt-4">
        <div className="flex flex-col mb-2">
          <label className="text-sm">Email</label>
          <input
            placeholder="email@example.com"
            type="email"
            className="border border-gray-300 rounded-md w-full px-3 py-1 md:w-1/2"
            {...register("email", {
              required: true,
            })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <label className="text-sm">Password</label>
          <input
            placeholder="password"
            type="password"
            className="border border-gray-300 rounded-md w-full px-3 py-1 md:w-1/2"
            {...register("password", {
              required: true,
            })}
          />
        </div>

        <button
          type="submit"
          className="w-full px-2 py-1 font-light text-sm rounded-lg transition-colors duration-1000 text-gray-50 bg-orange-600 md:w-1/2"
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default withPublicLayout(Login);
