import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter a valid username"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Please enter a valid email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter a valid password"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Password entered is not matches the current password"
    )
    .required("Please enter a valid confirm password"),
});

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="my-4 text-2xl font-bold text-center text-sky-700">
          Sign Up Form
        </h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { isSubmitting }) => {}}>
          {({ isSubmitting }) => {
            return (
              <Form>
                {/* Username */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="name">
                    Username
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="name"
                    id="name"
                  />
                  <ErrorMessage name="name">
                    {(msg) => (
                      <span className="font-small text-red-500">{msg}</span>
                    )}
                  </ErrorMessage>
                </div>
                {/* Email */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="email">
                    Email
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <span className="font-small text-red-500">{msg}</span>
                    )}
                  </ErrorMessage>
                </div>
                {/* Password */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="name">
                    Password
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <span className="font-small text-red-500">{msg}</span>
                    )}
                  </ErrorMessage>
                </div>
                {/* Confirm Password */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="name">
                    Confirm Password
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                  <ErrorMessage name="confirmPassword">
                    {(msg) => (
                      <span className="font-small text-red-500">{msg}</span>
                    )}
                  </ErrorMessage>
                </div>
                {isSubmitting && (
                  <button
                    type="button"
                    className="mt-4 min-w-full text-white bg-sky-400 dark:bg-sky-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-3 text-center"
                    disabled>
                    Submitting...
                  </button>
                )}
                {!isSubmitting && (
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="mt-4 min-w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-sky-600 dark:hover:bg-blue-700 dark:focus:ring-sky-800">
                    Submit
                  </button>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
