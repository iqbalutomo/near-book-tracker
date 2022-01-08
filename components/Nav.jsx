import Link from 'next/link';
import React, { useState } from 'react';

export default function Nav() {
  const [isModal, setIsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [modalProfile, setModalProfile] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(false);
  const [userName, setUserName] = useState('john doe');
  const [bioProfile, setBioProfile] = useState(
    'Book my life. instagram: @iqbalutomo'
  );

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
            <Link href="/">
              <h1 className="text-2xl font-secular">NearBook.</h1>
            </Link>
          </div>
          {!isLogin ? (
            <button className="font-bold py-2 px-4 bg-[#16ADAD] text-white rounded-md">
              login
            </button>
          ) : (
            <div>
              <button
                onClick={() => setModalProfile(true)}
                className="flex justify-between gap-4 items-center font-bold py-2 px-2 bg-[#16ADAD] text-white rounded-md"
              >
                <div className="flex gap-1 items-center">
                  <img src="/assets/icons/Nomads Avatar.png" width={30} />
                  <p className="font-thin">John Doe</p>
                </div>
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {modalProfile && (
                <>
                  <div
                    onClick={() => setModalProfile(false)}
                    className="absolute inset-0"
                  ></div>
                  <div className="absolute z-10 mt-2 py-2 px-3 pr-14 font-thin text-white bg-[#16ADAD] rounded-md">
                    <button
                      onClick={() => {
                        setModalEditProfile(true);
                        setModalProfile(false);
                      }}
                      className="my-2"
                    >
                      Edit Profile
                    </button>
                    <br />
                    <button className="mb-2">Logout</button>
                  </div>
                </>
              )}
            </div>
          )}
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
              <li>
                <Link href="/library">Library</Link>
              </li>
              <li className="my-8">
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {modalEditProfile && (
        <div className="absolute top-0 left-0">
          <div className="fixed z-20 w-full h-full bg-black bg-opacity-70">
            <div className="absolute top-[10%] right-0 left-0 bg-white m-4 rounded-md">
              <div className="text-center">
                <h1 className="text-2xl mt-8 mb-5">Edit Profile </h1>
                <div className="shadow-lg p-2 rounded-full absolute top-4 right-4 ">
                  <svg
                    onClick={() => setModalEditProfile(false)}
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
                <img
                  src="/assets/icons/Nomads Avatar.png"
                  width={150}
                  className="mx-auto mb-4"
                />
                <form action="" className="px-4">
                  <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    className="text-[#16ADAD] font-bold text-sm bg-pink-200 w-full py-2 px-2 rounded-md mb-4"
                  />
                  <textarea
                    type="text"
                    onChange={(e) => setBioProfile(e.target.value)}
                    value={bioProfile}
                    className="text-[#16ADAD] font-bold text-sm bg-pink-200 w-full py-2 px-2 rounded-md mb-8 resize-none h-28"
                  />
                  <input
                    type="submit"
                    value="Edit Profile"
                    className="text-white text-xl font-bold bg-pink-400 w-full py-4 px-2 rounded-md mb-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
