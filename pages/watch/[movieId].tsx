import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Navbar from "@/components/Navbar";

/**
 * Watch page: plays a single movie inline. The movie id comes from the route.
 */
const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="relative w-full max-w-5xl aspect-video">
          <video className="w-full h-full" controls autoPlay src="/api/movies" />
          <button
            onClick={() => router.push("/")}
            className="absolute top-4 left-4 flex items-center gap-2 text-white bg-zinc-800/80 rounded-md px-3 py-2 hover:bg-zinc-700 transition"
          >
            <AiOutlineArrowLeft />
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Watch;
