import React from 'react';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import useStore from '../lib/store';

export default function library() {
  const state = useStore();

  return (
    <div className="h-screen">
      <Nav />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Library Page</h1>
        <select className="py-1 px-2 rounded-md bg-[#16ADAD] text-white">
          <option defaultValue value="all">
            All
          </option>
          <option value="readingList">Reading List</option>
          <option value="readingNow">Reading Now</option>
          <option value="finished">Finished</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-8 items-center mt-5 pb-10">
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
