import React from "react";

export default function MainComponent({ setActive }) {
  return (
    <div className="h-full w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center justify-center mb-8 mt-4">
        <h1 className="text-2xl font-bold">MySpace</h1>
      </div>

      <h2 className="text-sm uppercase text-gray-500 mb-4 ml-2">Menu</h2>
      <ul className="space-y-2">
        <li className="px-4 py-3 bg-primary rounded-lg cursor-pointer flex items-center">
          <i className="fas fa-shopping-cart mr-3"></i>
          Dashboard
        </li>
        <li
          className="px-4 py-3 hover:bg-gray-700 rounded-lg cursor-pointer flex items-center"
          onClick={() => setActive("profile")}
        >
          <i className="fas fa-user mr-3"></i>
          Profile
        </li>
        <li
          className="px-4 py-3 hover:bg-gray-700 rounded-lg cursor-pointer flex items-center"
          onClick={() => setActive("weather")}
        >
          <i className="fas fa-cloud mr-3"></i>
          Weather
        </li>
        <li
          className="px-4 py-3 hover:bg-gray-700 rounded-lg cursor-pointer flex items-center"
          onClick={() => setActive("quote")}
        >
          <i className="fas fa-quote-right mr-3"></i>
          Quote
        </li>
        <li
          className="px-4 py-3 hover:bg-gray-700 rounded-lg cursor-pointer flex items-center"
          onClick={() => setActive("notes")}
        >
          <i className="fas fa-sticky-note mr-3"></i>
          Notes
        </li>
      </ul>
    </div>
  );
}
