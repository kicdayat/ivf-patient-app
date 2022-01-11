import { Link } from "react-router-dom";
import { FormLabel, Input } from "components/forms";
import { Button } from "components/elements";

const ResetPasswordPage = () => {
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
              Reset Password
            </h2>
            <p className="mt-2 text-gray-600 text-center">
              Please enter new password
            </p>
          </div>
          <form
            className="mt-8 space-y-6 accent-primary"
            action="#"
            method="POST"
          >
            <div>
              <FormLabel htmlFor="password">Password</FormLabel>
              <div className="mt-1">
                <Input id="password" type="password" />
              </div>
            </div>

            <div>
              <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
              <div className="mt-1">
                <Input id="confirm-password" type="password" />
              </div>
            </div>

            <div>
              <Button shadow="small" className="w-full">
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
