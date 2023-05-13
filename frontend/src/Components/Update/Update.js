import React, { useEffect, useState } from "react";
import API from "../../Util/API";
import './Update.css'

export default function Update({ guest, setNumbers }) {
  const [formState, setFormState] = useState({
    guests: 0,
    houses: 0,
  });

  const [message, setMessage] = useState("");

  const handleFormChange = (e) => {
    setMessage("")
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    API.update(guest._id, formState)
      .then((res) => {
        setMessage("Saved");
        API.getNumbers()
          .then((res) => {
            setNumbers(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => setMessage("Error"));
  };

  useEffect(() => {
    if (guest.guests || guest.houses) {
      setFormState({ guests: guest.guests, houses: guest.houses });
    }
  }, [guest.guests, guest.houses]);

  return (
    <>
      <div className="flex justify-center items-center">
        <form
          className="special max-w-md mt-3 p-2 rounded-lg shadow-2xl shadow-green-500 z-10"
          id="update"
          onSubmit={formSubmit}
        >
        <div className="text-center text-white">{guest?.email}</div>
        <div className="text-center text-green-400">Please enter the number of guests and houses. Leave it zero and update if you can't come.</div>
          <div className="max-w-xs form-floating mt-6 mb-3">
            <input
              type="number"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white dark:bg-slate-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 dark:text-slate-200 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="guests"
              name="guests"
              value={formState.guests}
              onChange={handleFormChange}
              placeholder=" "
              required
              min="0"
            />
            <label
              className="text-gray-700 dark:text-slate-300"
              htmlFor="guests"
            >
              Number of Guests:
            </label>
          </div>
          <div className="max-w-xs form-floating mt-6 mb-3">
            <input
              type="number"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white dark:bg-slate-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 dark:text-slate-200 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="houses"
              name="houses"
              value={formState.houses}
              onChange={handleFormChange}
              placeholder=" "
              required
              min="0"
            />
            <label
              className="text-gray-700 dark:text-slate-300"
              htmlFor="houses"
            >
              Number of Houses:
            </label>
          </div>
          <div className="frosting"></div>
          <div className="flex items-center justify-center p-6 rounded-b">
            <button
              type="submit"
              className="p-1 hover:scale-105 hover:text-white bg-red-400 dark:bg-blue-700 rounded-lg shadow-inner drop-shadow-xl"
            >
              Update
            </button>
          </div>
            <div className="text-center">{message}</div>
        </form>
      </div>
    </>
  );
}
