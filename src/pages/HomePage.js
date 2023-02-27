import React from "react";

const HomePage = () => {
  return (
    <div className="minH-[100vh] h-[100vh] w-full flex justify-center items-center bg-grayLight">
      <div className="w-[70%] h-[90%] shadow-2xl flex flex-row bg-white">
        <div className="w-[50%] h-[100%] ">
          <img
            src="https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[50%] h-[100%] flex flex-col px-8 justify-center">
          <form>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex flex-col gap-2">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full h-12 px-4 py-3 outline-none border border-purple-500 rounded-xl"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full h-12 px-4 py-3 outline-none border border-purple-500 rounded-xl"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 max-w-[150px] bg-purple-400 rounded-lg mx-auto hover:bg-purple-500 hover:-translate-y-1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
