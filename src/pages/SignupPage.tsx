import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { FormLabel, Input } from "components/forms";
import { Button, SsoButton } from "components/elements";

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
  const [pin, setPin] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      identity: email,
      app: "IVF",
    };

    console.log("CALL API REGISTER");

    // const res = await fetch('https://elife-products.com:3900/v2/register', {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // })
    // const json = await res.json();
    toast.success(
      "OTP sent to your email, please check your INBOX or SPAM in registered email."
    );
    setStep(2);
  };

  const handleOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      identity: email,
      verification_pin: pin,
      app: "IVF",
    };

    console.log("Call API OTP");

    // const res = await fetch(
    //   "https://elife-products.com:3900/v2/register/verify",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );
    // const json = await res.json();
    // setToken(json.data);
    setToken(
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlX25hbWUiOm51bGwsInR6IjoiQXNpYS9KYWthdGEiLCJpbnN0aXR1dGlvbl90eXBlIjpudWxsLCJpYXQiOjE2MzQ2MTM0NDN9.A1krvyiCxLr-uptXFwXcVwLPb4idYRgVsy4cC3WhkwwP_0HaWs2nDuadmOSgoBcRsfyZmajoHA5_Fq6adF8sJpIvqy1ztVwhH9rz6XFLr0hDPuYm0qPYzWM1B7_yTpB4Q45ako-M8hLI7VtKL_DRr2kBq4Gympq2b2Sp-70WSC0"
    );
    setStep(3);
  };

  const handleUpdateDetail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      password: password,
      phone_number: phone,
    };

    console.log("Call API UPDATE DETAIL");

    // const res = await fetch(
    //   "https://elife-products.com:3900/v2/register/detail",
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-type": "application/json",
    //       "Authorization": `Bearer ${token}`
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );
    // const json = await res.json();
    window.localStorage.setItem(
      "accessToken",
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzN2Q5YzU2LWRjY2QtNDk2OC1iMmE3LWI3MjRjNzQyNGMyMyIsIm5hbWUiOm51bGwsInBob25lX251bWJlciI6Iis2Mjg1MjcxNDA0MTcwIiwiZW1haWwiOiJrdG1jaHljNUB0ZW1wb3JhcnktbWFpbC5uZXQiLCJ1c2VybmFtZSI6Imt0bWNoeWM1Iiwicm9sZV9uYW1lIjpudWxsLCJ0eiI6IkFzaWEvSmFrYXRhIiwiaW5zdGl0dXRpb25fdHlwZSI6bnVsbCwiaWF0IjoxNjM0NjIzNzgwLCJwYXNzd29yZCI6IiQyYSQxMyRINW9haWZDVS83Z2V4MFdWUWtpMFJPQ0hQSkJ4aWhxY0J6bnZFZHJxSXdtQjYyMWs2Wk1TMiJ9.Hf8gGczYuOh80-hGORi6QaK5SPlodEZ8BdibWRvp7-KOw1qbguzL6E1FW3Sf2alFgrtUXIAFdNSbt5CWbjpjFUK4hnu8fKNk_UIL7UNTRbbXn9DqDJi4QtYTR3K2k_LhsHmX9be86Q-LCEtrjHXptMJ3N5gNq906RwypKFGTK4w"
    );

    navigate("/dashboard");
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
                <Link to="/" className="flex justify-center -ml-8">
                  <img
                    className="h-14 object-contain"
                    src="/asha-ivf.png"
                    alt="Logo Asha IVF"
                  />
                </Link>
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
                    <Button type="submit" shadow="small" className="w-full">
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
                    <FormLabel htmlFor="otp">OTP</FormLabel>
                    <div className="mt-1">
                      <Input
                        id="otp"
                        type="text"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Button type="submit" shadow="small" className="w-full">
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
                    <Button type="submit" shadow="small" className="w-full">
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
