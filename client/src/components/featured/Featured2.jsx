import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Featured2() {
  return (
    <div className="flex w-full justify-center bg-teal-50">
      <div className="flex w-full max-w-7xl py-24">
        <div className="grid w-full grid-cols-9 gap-4">
          <div className="col-span-4 pl-4 pr-12">
            <h2 className="mb-6 text-3xl font-semibold">
              The best part? Everthing.
            </h2>
            <ul>
              <li className="pb-4 text-slate-700">
                <h6 className="flex items-center pb-2 font-semibold">
                  <span className="pr-2">
                    <FontAwesomeIcon icon={faCheck} className="text-xl" />
                  </span>
                  Stick to your budget
                </h6>
                <p>
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing.
                </p>
              </li>
              <li className="pb-4 text-slate-700">
                <h6 className="flex items-center pb-2 font-semibold">
                  <span className="pr-2">
                    <FontAwesomeIcon icon={faCheck} className="text-xl" />
                  </span>
                  Get quality work done quickly
                </h6>
                <p>
                  Hand your project over to a talented freelancer in minutes,
                  get long-lasting results.
                </p>
              </li>
              <li className="pb-4 text-slate-700">
                <h6 className="flex items-center pb-2 font-semibold">
                  <span className="pr-2">
                    <FontAwesomeIcon icon={faCheck} className="text-xl" />
                  </span>
                  Pay when you're happy
                </h6>
                <p>
                  Upfront quotes mean no surprises. Payments only get released
                  when you approve.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-span-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KI5CnJ9u5ok"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured2;
