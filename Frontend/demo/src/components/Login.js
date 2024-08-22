import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* Close Button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="pt-3">
                <span>Email</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border px-3 py-1 rounded-md w-80 outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <br />
              <div>
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                  className="border px-3 py-1 rounded-md w-80 outline-none"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <br />
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="px-3 py-1 bg-pink-500 rounded-md w-37 cursor-pointer hover:bg-pink-400 duration-300"
                >
                  Login
                </button>
                <p>
                  Not Registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
