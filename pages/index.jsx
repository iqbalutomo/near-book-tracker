import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import useStore from '../lib/store';

export default function Home() {
  const state = useStore();

  return (
    <>
      <Nav />
      <div className="bg-white p-4 rounded-xl">
        <h1 className="text-xl">Build Your Library</h1>
        <p className="text-sm font-normal">
          Start reading from anywhere and mark a book as read
        </p>
        <div className="flex justify-center">
          <Image
            src={'/../public/assets/icons/Nomads Trekking.svg'}
            width={200}
            height={200}
          />
        </div>
        <Link href="/explore">
          <button className="py-2 px-4 text-white bg-black rounded-md">
            Explore
          </button>
        </Link>
      </div>
      <div>
        <h1 className="text-xl my-5">Popular</h1>
        <div className="flex gap-4 overflow-x-auto">
          <img
            onClick={() => state.setModal(true)}
            className="rounded-md"
            src="/cover.jpeg"
            width={150}
          />
          <img
            onClick={() => state.setModal(true)}
            className="rounded-md"
            src="/cover.jpeg"
            width={150}
          />
          <img
            onClick={() => state.setModal(true)}
            className="rounded-md"
            src="/cover.jpeg"
            width={150}
          />
          <img
            onClick={() => state.setModal(true)}
            className="rounded-md"
            src="/cover.jpeg"
            width={150}
          />
          <img
            onClick={() => state.setModal(true)}
            className="rounded-md"
            src="/cover.jpeg"
            width={150}
          />
        </div>
      </div>
      {state.modal && <Modal />}
    </>
  );
}
