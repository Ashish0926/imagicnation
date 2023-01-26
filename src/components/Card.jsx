import React, { useState } from "react";
import { download, copyIcon, copyApproved } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  const [copied, setcopied] = useState(false);

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full object-cover bg-white flex justify-center items-center text-black text-xs font-bold">
              {name[0].toUpperCase()}
            </div>
            <p className="text-white font-semibold text-sm ">{name}</p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(prompt);
                setcopied(true);
                setTimeout(() => {
                  setcopied(false);
                }, 1500);
              }}
              className="outline-none bg-transparent border-none"
            >
              <img
                src={copied ? copyApproved : copyIcon}
                alt="download"
                title={copied ? "copied" : "copy prompt to clipboard"}
                className="w-6 h-6 object-contain invert"
              />
            </button>
            <button
              type="button"
              onClick={() => {
                downloadImage(_id, photo);
              }}
              className="outline-none bg-transparent border-none"
            >
              <img
                src={download}
                alt="download"
                title="download image"
                className="w-6 h-6 object-contain invert"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
