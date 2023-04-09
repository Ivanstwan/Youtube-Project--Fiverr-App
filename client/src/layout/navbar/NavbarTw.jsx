import React from 'react';

const NavbarTw = () => {
  return (
    <div className="flex justify-center bg-fiverr-dark-green text-white">
      <div className="container flex items-center justify-between py-5">
        <div className="text-3xl font-semibold">
          <span>fiverr</span>
          <span className="text-fiverr-green">.</span>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a seller</span>
          <button className="rounded border border-white px-5 py-2 transition duration-200 ease-in-out hover:border-fiverr-green hover:bg-fiverr-green hover:text-white">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTw;
