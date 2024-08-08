import React from "react";

const Error = () => {
  return (
    <div className="error sm:block md:hidden">
      <main className="errorContent">
        <div className="container">
          <h2 className="errorText">
            Sorry, the page you were looking for was not found.
          </h2>
          <button
            className="errorBtn"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Return to home
          </button>
        </div>
      </main>
    </div>
  );
};

export default Error;
