import React from "react";
import { SignupAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateAccount() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const googleLogIn = async () => {
    let response = GoogleSignInAPI();
    console.log(response);
  };
  const signup = async () => {
    try {
      const res = await SignupAPI(credentials.email, credentials.password);
      toast.success("Account created successfully");
      navigate("/home");
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Account could not be created");
    }
  };
  return (
    <div className="bg-gray-400 ">
      <div className="flex min-h-screen items-center justify-center">
        <div className="min-h-1/2 bg-white rounded-2xl ">
          <div className="sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
            <svg
              viewBox="0 0 24 24"
              className=" h-12 w-12 text-sky-500"
              fill="currentColor"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <h1 className="text-black text-2xl font-sans">
              Create your account
            </h1>
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, email: event.target.value })
              }
              className="w-full p-2 bg-white rounded-md  border border-gray-300 focus:border-blue-300"
              placeholder="Phone, email, username"
              type="email"
              name="correo"
              id=""
            />
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
              className="w-full p-2 bg-white rounded-md border border-gray-300 "
              placeholder="password"
              type="password"
              name="correo"
              id=""
            />

            <button
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
              onClick={signup}
            >
              Create Account
            </button>

            <p>
              Already have an account?{" "}
              <span
                className="font-semibold text-sky-500 cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                Log in
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
