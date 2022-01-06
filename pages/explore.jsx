import React, { useState } from 'react';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import useStore from '../lib/store';

export default function explore() {
  const state = useStore();

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
    </div>
  );
}
