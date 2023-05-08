import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const NavbarTw = () => {
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };
    const handleScrollMenu = () => {
      window.scrollY > 80 ? setActiveMenu(true) : setActiveMenu(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollMenu);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: 'John',
    isSeller: true,
  };

  return (
    <div
      className={`sticky top-0 z-10 flex flex-col items-center justify-center`}
    >
      <div
        className={`flex w-full justify-center transition duration-200 ${
          active || pathname !== '/'
            ? 'bg-white text-black'
            : 'bg-fiverr-dark-green text-white'
        }`}
      >
        <div className="flex w-full max-w-7xl justify-between px-5 py-5">
          <div className="text-3xl font-semibold">
            <Link to="/">
              <span>fiverr</span>
              <span className="text-fiverr-green">.</span>
            </Link>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/">Fiverr Business</Link>
            <Link to="/">Explore</Link>
            <Link to="/">English</Link>
            <Link to="/">Sign In</Link>
            {!currentUser?.isSeller ? <span>Become a seller</span> : null}
            {!currentUser ? (
              <button className="rounded border border-white px-5 py-2 transition duration-200 ease-in-out hover:border-fiverr-green hover:bg-fiverr-green hover:text-white">
                Join
              </button>
            ) : null}
            {currentUser ? (
              <div
                className="relative flex cursor-pointer items-center gap-3"
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
                        <Link to="/mygigs">Gigs</Link>
                        <Link to="/add">Add New Gig</Link>
                      </>
                    ) : null}
                    <Link to="/orders">Orders</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/">Logout</Link>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className={`rotate-x-90 flex w-full justify-center border-t-[0px] border-slate-400 transition-all  ${
          activeMenu || pathname !== '/'
            ? 'rotate-x-0 h-auto border-t-[1px] bg-white text-black duration-500'
            : 'rotate-x-90 h-0'
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
