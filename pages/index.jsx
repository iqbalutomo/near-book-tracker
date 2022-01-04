import Image from "next/image";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 font-nunito font-bold bg-[#E8EEF3] h-full">
      <Nav />
      <div className="bg-white p-4 rounded-xl">
        <h1 className="text-xl">Build Your Library</h1>
        <p className="text-sm font-normal">
          Start reading from anywhere and mark a book as read
        </p>
        <div className="flex justify-center">
          <Image
            src={"/../public/assets/icons/Nomads Trekking.svg"}
            width={200}
            height={200}
          />
        </div>
        <button className="py-2 px-4 text-white bg-black rounded-md">
          Explore
        </button>
      </div>
      <div>
        <h1 className="text-xl my-5">Popular</h1>
        <div className="flex gap-4 overflow-x-auto">
          <img className="rounded-md" src="/cover.jpeg" width={150} />
          <img className="rounded-md" src="/cover.jpeg" width={150} />
          <img className="rounded-md" src="/cover.jpeg" width={150} />
          <img className="rounded-md" src="/cover.jpeg" width={150} />
          <img className="rounded-md" src="/cover.jpeg" width={150} />
        </div>
      </div>
    </div>
  );
}
