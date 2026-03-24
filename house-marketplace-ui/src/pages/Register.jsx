import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const Register = () => {
  const [accountType, setAccountType] = useState("user");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agencyName: "",
    licenseNumber: "",
    officeAddress: "",
    website: "",
    yearsInBusiness: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center pt-44 pb-6">
        <div className="flex items-center gap-2">
          <FiHome className="text-base text-blue-500 " />
          <span className="text-xs text-blue-600">
            <Link to="/">Back to HomeMarket</Link>
          </span>
        </div>

        <p className="text-2xl pt-4">Create Your Account</p>
        <p className="text-gray-500 text-xs pb-4">
          Join HomeMarket and start finding your dream home today
        </p>
      </div>

      <div className="container m-auto max-w-xl pb-40">
        <form
          className="shadow-md bg-white rounded-md px-6 py-8 mb-8"
          onSubmit={handleSubmit}
        >
          <div className="bg-gray-100 p-1 rounded-lg flex gap-1 mb-4">
            <button
              type="button"
              onClick={() => setAccountType("user")}
              className={`w-1/2 rounded-md py-2 text-sm transition-colors ${
                accountType === "user"
                  ? "bg-white text-blue-600 shadow-sm font-medium"
                  : "text-gray-600"
              }`}
            >
              Register as User
            </button>
            <button
              type="button"
              onClick={() => setAccountType("agency")}
              className={`w-1/2 rounded-md py-2 text-sm transition-colors ${
                accountType === "agency"
                  ? "bg-white text-blue-600 shadow-sm font-medium"
                  : "text-gray-600"
              }`}
            >
              Register as Agency
            </button>
          </div>

          {accountType === "user" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 pl-1 pb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-500 pl-1 pb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
          <div className="pt-4">
            <label className="text-sm text-gray-500 pl-1">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="pt-4">
            <label className="text-sm text-gray-500 pl-1">Phone Number</label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {accountType === "agency" && (
            <>
              <div className="pt-4">
                <label className="text-sm text-gray-500 pl-1">Agency Name</label>
                <input
                  name="agencyName"
                  type="text"
                  placeholder="Dream Homes Realty"
                  required={accountType === "agency"}
                  value={formData.agencyName}
                  onChange={handleChange}
                  className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 pl-1 pb-1">
                    License/Registration Number
                  </label>
                  <input
                    name="licenseNumber"
                    type="text"
                    placeholder="AG-123456"
                    required={accountType === "agency"}
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-500 pl-1 pb-1">
                    Years in Business
                  </label>
                  <input
                    name="yearsInBusiness"
                    type="number"
                    min="0"
                    placeholder="5"
                    value={formData.yearsInBusiness}
                    onChange={handleChange}
                    className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="pt-4">
                <label className="text-sm text-gray-500 pl-1">Office Address</label>
                <input
                  name="officeAddress"
                  type="text"
                  placeholder="123 Main Street, City"
                  required={accountType === "agency"}
                  value={formData.officeAddress}
                  onChange={handleChange}
                  className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="pt-4">
                <label className="text-sm text-gray-500 pl-1">Website (optional)</label>
                <input
                  name="website"
                  type="url"
                  placeholder="https://youragency.com"
                  value={formData.website}
                  onChange={handleChange}
                  className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-transparent w-full pl-2 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="btn container mt-6 bg-blue-600 text-white">
            Sign Up
          </button>
          <p className="text-sm mt-3">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              <Link to="/user/signin">Sign In</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
