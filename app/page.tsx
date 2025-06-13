import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-0">
      <div className="bg-[#1a1a1a] w-[80%] h-auto mx-auto rounded-2xl mt-25 p-5 pb-10 text-white flex flex-col items-center justify-center">
        <Image
          src="/profile picture.jpg"
          alt="image here"
          width={400}
          height={400}
          className="w-[40%] h-auto mb-10 rounded-full mt-10"
        />
        <h1 className="text-3xl font-bold mb-2 md:text-5xl ">Raphael Dev</h1>
        <p className="text-[16px] font-bold mb-10 text-lime-400 md:text-xl ">
          London, United Kingdom
        </p>

        <p className="mb-10 md:text-2xl">
          &ldquo;Front-end developer and avid reader.&rdquo;
        </p>

        <div className="flex flex-col items-center justify-center w-[300px] gap-3.5 md:gap-5">
          <button className="bg-[#313131] p-2 w-full font-bold rounded-2xl hover:bg-lime-500 cursor-pointer ease-in-out duration-300 md:w-[500px] md:text-2xl">
            GitHub
          </button>
          <button className="bg-[#313131] p-2 w-full font-bold rounded-2xl hover:bg-lime-500 cursor-pointer ease-in-out duration-300 md:w-[500px] md:text-2xl">
            Frontend Mentor
          </button>
          <button className="bg-[#313131] p-2 w-full font-bold rounded-2xl hover:bg-lime-500 cursor-pointer ease-in-out duration-300 md:w-[500px] md:text-2xl">
            Linkedin
          </button>
          <button className="bg-[#313131] p-2 w-full font-bold rounded-2xl hover:bg-lime-500 cursor-pointer ease-in-out duration-300 md:w-[500px] md:text-2xl">
            Twitter
          </button>
          <button className="bg-[#313131] p-2 w-full font-bold rounded-2xl hover:bg-lime-500 cursor-pointer ease-in-out duration-300 md:w-[500px] md:text-2xl">
            Instagram
          </button>
        </div>
      </div>
    </main>
  );
}
