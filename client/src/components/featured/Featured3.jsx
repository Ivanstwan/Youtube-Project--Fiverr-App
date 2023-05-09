import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Featured3() {
  return (
    <div className="mb-16 flex w-full justify-center bg-indigo-950">
      <div className="flex w-full max-w-7xl py-24">
        <div className="grid w-full grid-cols-9 gap-4">
          <div className="col-span-4 pl-4 pr-24">
            <p className="mb-6 text-xl text-white">
              <b>fiverr</b> business.
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white">
              A solution built for{' '}
              <span className="font-normal italic">business</span>
            </h2>
            <p className="mb-6 font-semibold text-white">
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>
            <ul className="mb-8">
              <li className="pb-2 text-sm font-semibold text-white">
                <span className="pr-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xl text-slate-600"
                  />
                </span>
                Talent matching
              </li>
              <li className="pb-2 text-sm font-semibold text-white">
                <span className="pr-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xl text-slate-600"
                  />
                </span>
                Dedicated account management
              </li>
              <li className="pb-2 text-sm font-semibold text-white">
                <span className="pr-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xl text-slate-600"
                  />
                </span>
                Team collaboration tools
              </li>
              <li className="pb-2 text-sm font-semibold text-white">
                <span className="pr-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xl text-slate-600"
                  />
                </span>
                Business payment solutions
              </li>
            </ul>
            <Link
              to="/"
              className="rounded bg-fiverr-green px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Fiverr Business
            </Link>
          </div>
          <div className="col-span-5">
            <img
              alt="Fiverr Business freelancers"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured3;
