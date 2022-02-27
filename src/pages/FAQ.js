import React from "react";
import Layout from "../components/baseLayout/Layout";

const Question = ({ title, answer, open }) => (
  <div className="p-8 bg-base-300 rounded-xl">
    <button className="flex items-center justify-between w-full">
      <h1 className="font-bold">{title}</h1>

      <span className="bg-neutral text-neutral-content rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 12H6"
          />
        </svg>
      </span>
    </button>

    <p className="mt-6 text-sm">{answer}</p>
  </div>
);

const FAQ = () => (
  <Layout>
    <section className="bg-base-100 rounded-xl">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-4xl font-semibold">Frequently asked questions</h1>

        <div className="mt-8 space-y-8 lg:mt-12">
          <Question
            title="How i can play for my appoinment ?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque
      nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam
      recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"
          />

          <div className="p-8 bg-base-300 rounded-xl">
            <button className="flex items-center justify-between w-full">
              <h1 className="font-semibold text-gray-700 dark:text-white">
                Is the cost of the appoinment covered by private health
                insurance?
              </h1>

              <span className="bg-primary rounded-full text-primary-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="p-8 bg-base-300 rounded-xl">
            <button className="flex items-center justify-between w-full">
              <h1 className="font-semibold text-gray-700 dark:text-white">
                Do i need a referral?
              </h1>

              <span className="bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="p-8 bg-base-300 rounded-xl">
            <button className="flex items-center justify-between w-full">
              <h1 className="font-semibold text-gray-700 dark:text-white">
                What are your opening house?
              </h1>

              <span className="bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="p-8 bg-base-300 rounded-xl">
            <button className="flex items-center justify-between w-full">
              <h1 className="font-semibold text-gray-700 dark:text-white">
                What can i expect at my first consultation?
              </h1>

              <span className="bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
