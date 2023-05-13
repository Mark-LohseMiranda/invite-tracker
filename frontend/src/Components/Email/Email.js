import React, { useState } from "react";
import API from "../../Util/API";

export default function Email({ setGuest }) {
  const [form, setForm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    API.findEmail(form)
      .then((res) => {
        setGuest(res.data);
      })
      .catch((err) =>
        setErrorMsg("Email not found, please contact party coordinator")
      );
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <form
          className="mt-3 bg-slate-200/90 p-2 rounded-lg shadow-2xl shadow-green-500 z-10"
          id="email"
          onSubmit={formSubmit}
        >
          <div className="form-floating mt-6 mb-3 xl:w-96">
            <input
              type="text"
              className="form-control w-full block px-3 py-1.5 text-base font-normal text-gray-700 bg-white dark:bg-slate-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 dark:text-slate-200 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              name="email"
              value={form}
              onChange={(e) => {
                setForm(e.target.value);
              }}
              placeholder=" "
              required
            />
            <label
              className="text-gray-700 dark:text-slate-300"
              htmlFor="email"
            >
              Email:
            </label>
          </div>
          <div className="flex items-center justify-center p-6 rounded-b">
            <button
              type="submit"
              className="p-1 hover:scale-105 hover:text-white bg-sky-300 dark:bg-blue-700 rounded-lg drop-shadow-xl"
            >
              Check
            </button>
          </div>
      <div className="text-center text-red-700">{errorMsg}</div>
        </form>
      </div>
    </>
  );
}
