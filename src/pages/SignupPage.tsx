import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import OtpInput from "components/otp-input/OtpInput";
import { FormLabel, Input } from "components/forms";
import { Button, SsoButton } from "components/elements";
import { signup, verifyPin, updateUserDetail } from "services/auth-service";

const metrics = [
  {
    id: 1,
    stat: "800+",
    emphasis: "Patients",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "2500+",
    emphasis: "Consultations",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "20+",
    emphasis: "Doctors",
    rest: "lacus nibh integer quis.",
  },
];

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await signup({ identity: email });
      setIsLoading(false);
      toast.success(res.message);
      setStep(2);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await verifyPin({ identity: email, verification_pin: otp });
      setToken(res.data);
      setIsLoading(false);
      setStep(3);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleUpdateDetail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await updateUserDetail({
        email,
        name,
        phone_number: phone,
        password,
        token,
      });
      setIsLoading(false);
      toast.success("Registration Complete. Please Login");
      navigate("/login");
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-primary-100">
      <div className="min-h-screen max-w-7xl mx-auto flex flex-col justify-center lg:grid grid-cols-2 gap-10">
        <div className="hidden lg:flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-lg font-bold tracking-wide uppercase text-primary-800">
              Valuable Metrics
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              ullam.
            </p>
            <p className="mt-5 text-lg text-gray-600">
              Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
              quis in viverra tristique sem. Ornare feugiat viverra eleifend
              fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus
              laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus
              quis at.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-primary-700">
                    {item.stat}
                  </span>
                  <span className="mt-1 block text-base text-gray-600">
                    <span className="font-medium text-black">
                      {item.emphasis}
                    </span>{" "}
                    {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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
                  Create new account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  {`Already have an account?`}{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
              {step === 1 ? (
                <form
                  onSubmit={handleRegister}
                  className="mt-8 space-y-6 accent-primary"
                >
                  <div>
                    <FormLabel htmlFor="email">Email address</FormLabel>
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
                    <Button
                      type="submit"
                      shadow="small"
                      className="w-full"
                      isLoading={isLoading}
                    >
                      Sign up
                    </Button>
                  </div>
                </form>
              ) : step === 2 ? (
                <form
                  onSubmit={handleOTP}
                  className="mt-8 space-y-6 accent-primary"
                >
                  <div>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      isInputNum
                      inputStyle="text-2xl mx-1 w-12 p-2 border rounded-md border-gray-300 font-medium"
                      containerStyle="flex justify-center mb-4"
                      // separator={<span>-</span>}
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      shadow="small"
                      className="w-full"
                      isLoading={isLoading}
                    >
                      Verify
                    </Button>
                  </div>
                </form>
              ) : step === 3 ? (
                <form
                  onSubmit={handleUpdateDetail}
                  className="mt-8 space-y-6 accent-primary"
                >
                  <div>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <div className="mt-1">
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <div className="mt-1">
                      <Input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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

                  <div>
                    <Button
                      type="submit"
                      shadow="small"
                      className="w-full"
                      isLoading={isLoading}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              ) : null}

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
                  <SsoButton provider="google" text="Sign up with Google" />
                  <SsoButton provider="facebook" text="Sign up with Facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
