import React from 'react';
import './Featured.scss';

const Featured = () => {
  return (
    <div className="flex h-[600px] w-full justify-center bg-fiverr-dark-green">
      <div className="flex w-full max-w-7xl px-5">
        <div className="left flex flex-1 flex-col justify-center gap-8">
          <h2 className="text-[2.15rem] font-bold text-white">
            Find the perfect{' '}
            <span className="font-normal italic">freelance</span> services for
            your business
          </h2>
          <div className="flex items-center justify-between rounded-sm bg-white">
            <div className="flex flex-1 items-center">
              <img
                src="./img/search.png"
                alt="search icon"
                className="h-5 px-4"
              />
              <input type="text" className="h-12 flex-1 outline-none" />
            </div>
            <button className="h-12 bg-fiverr-green px-8 text-white">
              Search
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-white">
            <span>Popular:</span>
            <div className="flex gap-4">
              <button className="rounded-full border-2 border-white px-3 py-2">
                Web Design
              </button>
              <button className="rounded-full border-2 border-white px-3 py-2">
                WordPress
              </button>
              <button className="rounded-full border-2 border-white px-3 py-2">
                Logo Design
              </button>
              <button className="rounded-full border-2 border-white px-3 py-2">
                AI Services
              </button>
            </div>
          </div>
        </div>
        <div className="right flex-1">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
