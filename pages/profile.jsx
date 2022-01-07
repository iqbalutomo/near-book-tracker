import React, { useState } from 'react';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import NoBookFound from '../components/NoBookFound';
import useStore from '../lib/store';

export default function profile() {
  const [activeTab, setActiveTab] = useState('readingList');
  const state = useStore();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="h-full">
      <Nav />
      <div className="text-center px-6">
        <div className="flex justify-evenly mt-2 mb-4">
          <img src="/assets/icons/Nomads Avatar.png" width={150} />
        </div>
        <h1 className="text-xl">John Doe</h1>
        <p className="font-thin mb-8">Book my life. instagram: @iqbalutomo</p>
      </div>
      <div className="flex justify-between text-xl">
        <div
          onClick={() => {
            setActiveTab('readingList');
            scrollTop();
          }}
        >
          <h4 className={activeTab === 'readingList' ? 'text-[#16ADAD]' : ''}>
            Reading List
          </h4>
        </div>
        <div
          onClick={() => {
            setActiveTab('readingNow');
            scrollTop();
          }}
        >
          <h4 className={activeTab === 'readingNow' ? 'text-[#16ADAD]' : ''}>
            Reading Now
          </h4>
        </div>
        <div
          onClick={() => {
            setActiveTab('finished');
            scrollTop();
          }}
        >
          <h4 className={activeTab === 'finished' ? 'text-[#16ADAD]' : ''}>
            Finished
          </h4>
        </div>
      </div>
      <div className="mt-5 mb-20">
        {activeTab === 'readingList' && (
          <div className="grid grid-cols-2 gap-8">
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
        )}
        {activeTab === 'readingNow' && <NoBookFound />}
        {activeTab === 'finished' && (
          <div>
            <img
              onClick={() => state.setModal(true)}
              className="rounded-md"
              src="/cover.jpeg"
              width={150}
            />
          </div>
        )}
      </div>
      {state.modal && <Modal />}
    </div>
  );
}
