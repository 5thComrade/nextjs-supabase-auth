import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/frontend/lib/constants";
import { supabaseBrowserClient } from "@/frontend/lib/supabase";
import withPublicLayout from "@/frontend/layouts/Public.layout";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const handleSignup: SubmitHandler<Inputs> = async (signUpData) => {
    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error("Password don't match");
      return;
    }
    const { data, error } = await supabaseBrowserClient.auth.signUp({
      email: signUpData.email,
      password: signUpData.password,
    });

    if (error) {
      toast.error("SignUp unsuccessful. Try again!");
      return;
    }
    router.replace("/login");
    toast.success("Confirmation email sent to your mail id!");
  };

  return (
    <main className="mt-4">
      <h1>SignUp Form</h1>

      <form onSubmit={handleSubmit(handleSignup)} className="mt-4">
        <div className="flex flex-col mb-2">
          <label className="text-sm">Email</label>
          <input
            placeholder="email@example.com"
            type="email"
            className="border border-gray-300 rounded-md w-full px-3 py-1 md:w-1/2"
            {...register("email", {
              required: true,
              pattern: EMAIL_REGEX,
            })}
          />
          {errors.email && (
            <p className="text-[8px] text-red-500">
              Please enter a valid email id
            </p>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label className="text-sm">Password</label>
          <input
            placeholder="password"
            type="password"
            className="border border-gray-300 rounded-md w-full px-3 py-1 md:w-1/2"
            {...register("password", {
              required: true,
              pattern: PASSWORD_REGEX,
            })}
          />
          {errors.password && (
            <div className="text-[8px] bg-red-300 text-black w-full px-3 py-1 rounded mt-1 md:w-1/2">
              <p>Password should be at least 8 characters long</p>
              <p>Password should have at least 1 uppercase character</p>
              <p>Password should have at least 1 lowercase character</p>
              <p>Password should have at least 1 number character</p>
              <p>Password should have at least 1 special character(!@#$%&*)</p>
            </div>
          )}
        </div>

        <div className="flex flex-col mb-2">
          <label className="text-sm">Confirm Password</label>
          <input
            placeholder="confirm password"
            type="password"
            className="border border-gray-300 rounded-md w-full px-3 py-1 md:w-1/2"
            {...register("confirmPassword", {
              required: true,
              pattern: PASSWORD_REGEX,
            })}
          />
          {errors.confirmPassword && (
            <div className="text-[8px] bg-red-300 text-black w-full px-3 py-1 rounded mt-1 md:w-1/2">
              <p>Password should be at least 8 characters long</p>
              <p>Password should have at least 1 uppercase character</p>
              <p>Password should have at least 1 lowercase character</p>
              <p>Password should have at least 1 number character</p>
              <p>Password should have at least 1 special character(!@#$%&*)</p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-2 py-1 font-light text-sm rounded-lg transition-colors duration-1000 text-gray-50 bg-green-600 md:w-1/2"
        >
          Signup
        </button>
      </form>
    </main>
  );
}

export default withPublicLayout(SignUp);
