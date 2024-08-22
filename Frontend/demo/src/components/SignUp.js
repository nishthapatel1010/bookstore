import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Sign Up</h3>
              
              {/* Name field */}
              <div className="mt-4">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border px-3 py-1 rounded-md w-full outline-none"
                    {...register("name", { required: "Full name is required" })}
                  />
                </label>
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email field */}
              <div className="mt-4">
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border px-3 py-1 rounded-md w-full outline-none"
                    {...register("email", { required: "Email is required" })}
                  />
                </label>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password field */}
              <div className="mt-4">
                <label>
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="border px-3 py-1 rounded-md w-full outline-none"
                    {...register("password", { required: "Password is required" })}
                  />
                </label>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-around mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 rounded-md text-white cursor-pointer hover:bg-pink-400 duration-300"
                >
                  Sign Up
                </button>
                <p className="flex items-center">
                  Have an account?{" "}
                  <Link
                    to="/login"
                    className="underline text-blue-500 ml-1 cursor-pointer"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
