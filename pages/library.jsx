import React, { useState } from 'react';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import useStore from '../lib/store';

export default function library() {
  const state = useStore();
  const [bookFilter, setBookFilter] = useState('all');

  return (
    <div className="h-screen">
      <Nav />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Library Page</h1>
        <select
          value={bookFilter}
          onChange={(e) => setBookFilter(e.target.value)}
          className="py-1 px-2 rounded-md bg-pink-400 text-white"
        >
          <option defaultValue value="all">
            All
          </option>
          <option value="readingList">Reading List</option>
          <option value="readingNow">Reading Now</option>
          <option value="finished">Finished</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-8 items-center mt-5 pb-10">
        {bookFilter === 'all' && (
          <>
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
          </>
        )}
        {bookFilter === 'readingList' && (
          <>
            <img
              onClick={() => state.setModal(true)}
              className="rounded-md"
              src="/cover.jpeg"
              width={250}
            />
          </>
        )}
        {bookFilter === 'readingNow' && <></>}
        {bookFilter === 'finished' && (
          <>
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
          </>
        )}
      </div>
      {state.modal && <Modal />}
    </div>
  );
}
