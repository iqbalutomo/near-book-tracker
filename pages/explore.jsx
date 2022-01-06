import React, { useState } from 'react';
import Nav from '../components/Nav';

export default function explore() {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="">
      <Nav />
      <h1 className="text-2xl mb-2">Explore</h1>
      <input
        className="w-full h-10 text-xl p-2 rounded-md mb-8"
        type="text"
        placeholder="Search book title"
      />
      <div className="grid grid-cols-2 gap-8 items-center">
        <img
          onClick={() => setIsModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => setIsModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => setIsModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => setIsModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => setIsModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => setIsModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
      </div>
      {isModal && (
        <div className="absolute top-0 left-0">
          <div className="fixed py-6 px-4 z-20 h-full bg-black bg-opacity-80">
            <div className="bg-white rounded-md p-4 h-full overflow-scroll">
              <div className="flex justify-between absolute right-8 top-9">
                <div></div>
                <div className="shadow-lg p-2 rounded-full">
                  <svg
                    onClick={() => setIsModal(false)}
                    class="w-5 h-5"
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
                </div>
              </div>
              <img
                className="rounded-md mx-auto mb-5"
                src="/cover.jpeg"
                width={150}
              />
              <div className="text-center mb-4">
                <h1 className="text-xl">Rick Riordan Magnus Chase</h1>
                <h4 className="font-thin">Creator Book</h4>
              </div>
              <h2>Description</h2>
              <p className="font-thin text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas molestias nesciunt ipsum dolores eveniet. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Ut, repellat.
              </p>
              <hr className="my-4" />
              <div className="font-normal">
                <ul className="flex justify-between mb-2">
                  <li>Publisher</li>
                  <li>Grand Central</li>
                </ul>
                <ul className="flex justify-between mb-2">
                  <li>Published</li>
                  <li>Not Available</li>
                </ul>
                <ul className="flex justify-between mb-2">
                  <li>ISBN</li>
                  <li>9780062571373</li>
                </ul>
                <ul className="flex justify-between mb-2">
                  <li>Pages</li>
                  <li>Not Available</li>
                </ul>
                <ul className="flex justify-between mb-2 pb-10">
                  <li>Category</li>
                  <li>Not Available</li>
                </ul>
              </div>
              <div className="fixed bottom-6 right-0 left-0 mx-4 bg-pink-400 text-white py-3 rounded-b-md text-center">
                Add to Library
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
