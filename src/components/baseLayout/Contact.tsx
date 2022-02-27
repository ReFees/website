import React from "react";

const Contact = () => (
  <section className="card max-w-4xl mx-auto overflow-hidden shadow-lg dark:bg-neutral md:flex-row md:h-48 my-10">
    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-neutral ">
      <div className="px-6 py-6 md:px-8 md:py-0 card-body">
        <h2 className="card-title md:text-neutral-content ">
          Sign Up For <span className="text-secondary">Project</span> Updates
        </h2>

        <p className="mt-2 text-sm md:text-neutral-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          obcaecati odio
        </p>
      </div>
    </div>

    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
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
  </section>
);

export default Contact;
