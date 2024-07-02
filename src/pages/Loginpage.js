import React from "react";
import twitter from "../assets/Twitter X.png";
import { useForm, Controller } from "react-hook-form";

const Loginpage = () => {
  console.log("started loginpage");

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log();
  };

  return (
    <div>
      <div className="loginpage">
        <div className="loginpage_logo">
          <img src={twitter} alt="" />
        </div>
        <div className="loginpage_content">
          <h1>Happening now</h1>
          <h3>Join Today.</h3>

          <form
            className="flex flex-col w-80 pl-16 mt-8 space-y-2"
            onSubmit={handleSubmit}
          >
            <label
              for="region"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                autocomplete="address-level1"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label className="block text-base font-medium text-gray-900">
              Password
            </label>
            <input type="password" />
            <button>SignIn</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
