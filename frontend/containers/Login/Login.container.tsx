import { useForm, SubmitHandler } from "react-hook-form";
import withPublicLayout from "@/frontend/layouts/Public.layout";

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<Inputs>();

  const handleLogin: SubmitHandler<Inputs> = (data) => {
    console.log("login: ", data);
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
