import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="flex-shrink-0 relative w-56 h-72 rounded-[40px] bg-zinc-900/80 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="absolute bottom-0 w-full left-0">
        <div className="flex items-center px-8 justify-between mb-5">
          <h5>{data.fileSize}</h5>
          <span className="bg-zinc-700 w-7 h-7 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <FiDownload color="white" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } pt-3 pb-4 flex items-center justify-center`}
          >
            <h3 className="text-md">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
