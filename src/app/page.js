"use client";

import React from "react";
import "./globals.css";
import { userDataValidation } from "./schemas";

import { useFormik } from "formik";

const hobbie = [
  { label: "cycling", value: "cycling" },
  { label: "hiking", value: "hiking" },
  { label: "photography", value: "photography" },
  { label: "cooking", value: "cooking" },
  { label: "antiquing", value: "antiquing" },
  { label: "watching sports", value: "watching sports" },
  { label: "driving", value: "driving" },
  { label: "museum visits", value: "museum visits" },
  { label: "gardening", value: "gardening" },
  { label: "swimming", value: "swimming" },
  { label: "entertaining", value: "entertaining" },
];
const country = [
  { lable: "Iceland", value: "Iceland" },
  { lable: "India", value: "India" },
  { lable: "Indonesia", value: "Indonesia" },
  { lable: "Iran", value: "Iran" },
  { lable: "Iraq", value: "Iraq" },
  { lable: "Ireland", value: "Ireland" },
  { lable: "Israel", value: "Israel" },
  { lable: "Italy", value: "Italy" },
  { lable: "Baden", value: "Baden" },
  { lable: "Bahamas, The", value: "Bahamas, The" },
  { lable: "Bahrain", value: "Bahrain" },
  { lable: "Bangladesh", value: "Bangladesh" },
  { lable: "Barbados", value: "Barbados" },
  { lable: "Bavaria", value: "Bavaria" },
  { lable: "Belarus", value: "Belarus" },
  { lable: "Belgium", value: "Belgium" },
  { lable: "Belize", value: "Belize" },
  { lable: "Benin (Dahomey)", value: "Benin (Dahomey)" },
  { lable: "Bolivia", value: "Bolivia" },
  { lable: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { lable: "Botswana", value: "Botswana" },
  { lable: "Brazil", value: "Brazil" },
  { lable: "Brunei", value: "Brunei" },
  { lable: "Brunswick and Lüneburg", value: "Brunswick and Lüneburg" },
  { lable: "Bulgaria", value: "Bulgaria" },
  { lable: "Burkina Faso (Upper Volta)" },
  { lable: "Burma", value: "Burma" },
  { lable: "Burundi", value: "Burundi" },
];
const App = () => {
  const initialValues = {
    name: "",
    Hobbies: "",
    Gender: "",
    Address: "",
    countryValue: "",
  };
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userDataValidation,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  console.log(errors);
  // console.log(Formik);
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          User Information
        </h1>
        <form
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`w-full  px-3 py-2 ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300"
              } border border-gray-300 rounded-md focus:outline-none  ${
                errors.name && touched.name
                  ? "focus: border-red-500"
                  : "focus:border-indigo-500"
              }`}
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="user name"
            />
            {errors.name && touched.name ? (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.name}
              </span>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Address
            </label>
            <textarea
              className={`w-full  px-3 py-2 ${
                errors.Address && touched.Address
                  ? "border-red-500"
                  : "border-gray-300"
              } border border-gray-300 rounded-md focus:outline-none  ${
                errors.Address && touched.Address
                  ? "focus: border-red-500"
                  : "focus:border-indigo-500"
              }`}
              type="Address"
              id="Address"
              name="Address"
              placeholder="address"
              value={values.Address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Address && touched.Address ? (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.Address}
              </span>
            ) : null}
          </div>
          <label
            htmlFor="hs-select-label"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Country
          </label>
          <div className="mb-4">
            <select
              // onChange={handleCountryChange}
              onChange={handleChange}
              onBlur={handleBlur}
              name="countryValue"
              value={values.countryValue}
              id="hs-select-label"
              className={`w-full  px-3 py-2 ${
                errors.countryValue && touched.countryValue
                  ? "border-red-500"
                  : "border-gray-300"
              } border border-gray-300 rounded-md focus:outline-none  ${
                errors.country && Valuetouched.countryValue
                  ? "focus: border-red-500"
                  : "focus:border-indigo-500"
              }`}
            >
              {country.map((Country, i) => (
                <option key={i} value={Country.value}>
                  {Country.lable}
                </option>
              ))}
            </select>
            {errors.countryValue && touched.countryValue ? (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.countryValue}
              </span>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Gender"
            >
              Gender
            </label>

            <div className="grid grid-cols-2 gap-2">
              <label
                htmlFor="hs-radio-on-right"
                className={`flex p-3  w-full bg-white border ${
                  errors.Gender && touched.Gender
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400`}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Male
                </span>
                <input
                  type="radio"
                  name="Gender"
                  value={"Male"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // className={`w-full  px-3 py-2 ${errors.name?"border-red-500":"border-gray-300"} border border-gray-300 rounded-md focus:outline-none  ${errors.name?"focus: border-red-500":"focus:border-indigo-500"}`}

                  className={`shrink-0 ml-auto mt-0.5 ${
                    errors.Gender && touched.Gender
                      ? "border-red-500"
                      : "border-gray-900"
                  } rounded-full text-blue-600 pointer-events-none focus:ring-blue-500  dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800`}
                  id="hs-radio-on-right"
                />
              </label>

              <label
                htmlFor="hs-radioradio-on-right"
                className={`flex p-3  w-full bg-white border ${
                  errors.Gender && touched.Gender
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400`}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Female
                </span>
                <input
                  type="radio"
                  name="Gender"
                  value={"Female"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="shrink-0 ml-auto mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radioradio-on-right"
                />
              </label>
            </div>
            {errors.Gender && touched.Gender ? (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.Gender}
              </span>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Hobbies"
            >
              Hobbies
            </label>
            <div className="mb-4">
              <select
                name="Hobbies"
                value={values.Hobbies}
                onChange={handleChange}
                onBlur={handleBlur}
                id="hs-select-label"
                className={`w-full  px-3 py-2 ${
                  errors.Hobbies && touched.Hobbies
                    ? "border-red-500"
                    : "border-gray-300"
                } border border-gray-300 rounded-md focus:outline-none  ${
                  errors.Hobbies && touched.Hobbies
                    ? "focus: border-red-500"
                    : "focus:border-indigo-500"
                }`}
              >
                {hobbie.map((Hobbie, i) => (
                  <option key={i} value={Hobbie.value}>
                    {Hobbie.label}
                  </option>
                ))}
              </select>
              {errors.Hobbies && touched.Hobbies ? (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {errors.Hobbies}
                </span>
              ) : null}
            </div>
          </div>
          <button
            className="w-full bg-indigo-900 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};
export default App;
