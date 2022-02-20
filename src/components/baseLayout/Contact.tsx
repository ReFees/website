import React from "react";

const Contact = () => (
  <div className="mb-2 pb-8 shadow-lg bg-base-200 text-neutral-content rounded-box">
    <div className="p-10 text-base-content rounded-box">
      <div className="grid h-20 place-items-center">
        <span className="footer-title">Contact us</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="w-full pr-16 input input-bordered"
            />
            <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
