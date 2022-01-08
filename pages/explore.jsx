import React, { useState } from 'react';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import useStore from '../lib/store';

export default function explore() {
  const state = useStore();

  return (
    <>
      <Nav />
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl mb-2 mt-1">Explore</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-shuffle font-bold"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
          />
          <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
        </svg>
      </div>
      {/* <input
        className="w-full h-10 text-xl p-2 rounded-md mb-8"
        type="text"
        placeholder="Search book title"
      /> */}
      <label className="relative block mb-8">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-pink-400"
          placeholder="Search book title..."
          type="text"
          name="search"
        />
      </label>
      <div className="grid grid-cols-2 gap-8 items-center">
        <img
          onClick={() => state.setModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => state.setModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => state.setModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => state.setModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => state.setModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
        <img
          onClick={() => state.setModal(true)}
          className="rounded-md"
          src="/cover.jpeg"
          width={250}
        />
      </div>
      {state.modal && <Modal />}
    </>
  );
}
