import Link from 'next/link';
import React from 'react';

export default function NoBookFound() {
  return (
    <div className="flex flex-col text-center my-10">
      <img
        className="mx-auto"
        src="/assets/icons/Nomads Sitting on Floor.png"
        width={200}
      />
      <h4 className="font-thin mt-5">No books found, let's read a book</h4>
      <button className="py-2 px-4 text-white bg-pink-400 mx-32 rounded-md mt-2">
        <Link href="/explore">Explore</Link>
      </button>
    </div>
  );
}
