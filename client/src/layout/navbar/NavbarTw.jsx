import React, { useEffect, useState } from 'react';
import './Navbar.scss';

const NavbarTw = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: 'John',
    isSeller: true,
  };

  return (
    <div className={`sticky top-0 flex flex-col items-center justify-center`}>
      <div
        className={`flex w-full justify-center transition duration-200 ${
          active ? 'bg-white text-black' : 'bg-fiverr-dark-green text-white'
        }`}
      >
        <div className="flex w-full max-w-7xl justify-between px-5 py-5">
          <div className="text-3xl font-semibold">
            <span>fiverr</span>
            <span className="text-fiverr-green">.</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign In</span>
            {!currentUser?.isSeller ? <span>Become a seller</span> : null}
            {!currentUser ? (
              <button className="rounded border border-white px-5 py-2 transition duration-200 ease-in-out hover:border-fiverr-green hover:bg-fiverr-green hover:text-white">
                Join
              </button>
            ) : null}
            {currentUser ? (
              <div
                className="relative flex items-center gap-3"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span>{currentUser?.username}</span>
                {open ? (
                  <div className="absolute right-0 top-11 flex w-56 flex-col gap-3 rounded-lg border-2 border-slate-300 bg-white p-5 text-slate-600">
                    {currentUser?.isSeller ? (
                      <>
                        <span>Gigs</span>
                        <span>Add New Gig</span>
                      </>
                    ) : null}
                    <span>Orders</span>
                    <span>Messages</span>
                    <span>Logout</span>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className={`rotate-x-90 flex w-full justify-center border-t-[1px] border-slate-400 transition-all duration-500 ${
          active
            ? 'rotate-x-0 h-auto bg-white text-black'
            : 'rotate-x-90 h-0 text-white'
        }`}
      >
        <div className="flex w-full max-w-7xl justify-between px-5 py-5">
          <span>menu 1</span>
          <span>menu 2</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarTw;
