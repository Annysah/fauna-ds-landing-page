import React from "react";
import logo from "../logo.png";

function App() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 min-h-screen">
        <header className="flex justify-between items-center">
          <img src={logo} width="200" height="200" alt="" />
          <button className="bg-black text-white font-medium p-4 w-60 rounded-full shadow-xl">
            <a href="https://github.com/Annysah/fauna-design-system">
              View on Github <i className="fa-brands fa-github"></i>
            </a>
          </button>
        </header>

        <section>
          <div className="text-center">
            <h1 className="text-6xl font-bold mt-8 mb-8">
              Simplify Your Design Process <br /> with Our Intuitive System
            </h1>
            <p className="text-xl mb-12">
              Spend less time on tedious tasks and more time on innovation.
            </p>
          </div>
        </section>

        <section>
          <div class="flex align-center justify-center gap-6">
            <div class="bg-yellow-50 p-4 shadow-2xl rounded-xs w-80 h-50">
              <h2 className="text-3xl text-yellow-800 font-bold">Docs</h2>
              <p className="text-yellow-800 my-4 text-lg">
                Learn how to get started with Fauna Design System components
              </p>
              <p className="text-yellow-800 font-bold">
                <a href="https://main--65d0e39cdd1f9d1d0b431f38.chromatic.com/?path=/docs/style-guide-colors--docs">
                  Explore{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </p>
            </div>
            <div class="bg-green-50 p-4 shadow-2xl rounded-xs w-80 h-50">
              <h2 className="text-3xl text-green-800 font-bold">Demo</h2>
              <p className="text-green-800 my-4 text-lg">
                Check out a quick demo of how the Fauna Design System can be
                used
              </p>
              <p className="text-green-800 font-bold">
                <a href="https://annysah.github.io/fauna-ds-demo/">
                  Explore{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </p>
            </div>
            <div class="bg-red-50 p-4 shadow-2xl rounded-xs w-80 h-50">
              <h2 className="text-3xl text-red-900 font-bold">Resource</h2>
              <p className="text-red-800 my-4 text-lg">
                View the technical article on Fauna Design System
              </p>
              <p className="text-red-800 font-bold">
                <a href="https://dev.to/annysah/fauna-design-system-3epe-temp-slug-4183767?preview=ba089fe3b841467f10f5208eb20a60a46bf2218884279a229db00c95e4cb9ae8741ce8c998f09f4b053e980a76ea7a5574665488dfba9960be2554b6">
                  Explore{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center sticky top-[100vh]">
          <p className="text-sm">&copy; 2024 Fauna Design System</p>
        </footer>
      </div>
    </>
  );
}

export default App;
