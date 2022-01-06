import Link from 'next/link';
import React, { useState } from 'react';

export default function Nav() {
  const [isModal, setIsModal] = useState(false);

  return (
    <div>
      <div className="pb-5 font-nunito font-bold">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <svg
              onClick={() => setIsModal(true)}
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
            <h1 className="text-2xl font-secular">NearBook.</h1>
          </div>
          <button className="font-bold py-2 px-4 bg-[#16ADAD] text-white rounded-md">
            login
          </button>
        </div>
      </div>
      {isModal && (
        <div className="absolute top-0 left-0 p-4 py-5 w-full h-full z-20 text-white bg-black bg-opacity-80">
          <svg
            onClick={() => setIsModal(false)}
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <div className="text-center">
            <h1 className="text-4xl font-secular font-bold mt-20 mb-10">
              <Link href="/">NearBook.</Link>
            </h1>
            <ul className="text-2xl font-nunito font-semibold">
              <li>Library</li>
              <li className="my-8">
                <Link href="/explore">Explore</Link>
              </li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
