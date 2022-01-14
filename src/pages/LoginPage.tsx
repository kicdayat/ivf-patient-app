import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { FormLabel, Input } from "components/forms";
import { Button, SsoButton } from "components/elements";
import { useAuth } from "contexts/authContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Handle Storing Token
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await login({ email, password });
      setIsLoading(false);
      toast.success("You are logged in!");
      navigate("/dashboard");
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.message || "Login failed");
    }
  };

  console.log({ user });

  return (
    <div className="min-h-screen bg-primary-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <a
              href={process.env.REACT_APP_WEBSITE_URL}
              className="flex justify-center -ml-8"
            >
              <img
                className="h-14 object-contain"
                src="/asha-ivf.png"
                alt="Logo Asha IVF"
              />
            </a>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {`Don't have an account?`}{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline"
              >
                Sign up for free
              </Link>
            </p>
          </div>
          <form
            className="mt-8 space-y-6 accent-primary"
            onSubmit={handleLogin}
          >
            <div>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <div className="mt-1">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <FormLabel htmlFor="password">Password</FormLabel>
              <div className="mt-1">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                isLoading={isLoading}
                shadow="small"
                className="w-full"
              >
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <SsoButton provider="google" text="Sign in with Google" />
              <SsoButton provider="facebook" text="Sign in with Facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
