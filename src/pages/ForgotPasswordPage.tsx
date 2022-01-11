import { Link } from "react-router-dom";
import { FormLabel, Input } from "components/forms";
import { Button } from "components/elements";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-primary-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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
              Forgot Password
            </h2>
            <p className="mt-2 text-gray-600 text-center">
              Please enter your email address below and we will send you a link
              to reset your password
            </p>
          </div>
          <form
            className="mt-8 space-y-6 accent-primary"
            action="#"
            method="POST"
          >
            <div>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <div className="mt-1">
                <Input id="email" type="email" />
              </div>
            </div>

            <div>
              <Button shadow="small" className="w-full">
                Send
              </Button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            {/* {`Or`}{' '} */}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline"
            >
              back to login page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
