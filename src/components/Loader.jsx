import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-fu;; h-full flex justify-center items-center">
        <div className="w-[1-vw] h-[10vw] rounded-full">Loading...</div>

      </div>
    </Html>
  );
};

export default Loader;
