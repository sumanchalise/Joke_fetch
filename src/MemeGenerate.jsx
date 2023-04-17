import React, { useState } from "react";

export default function MemeGenerate() {
  const [meme, setMeme] = useState([]);
  const [index, setIndex] = useState(0);

  const handleGenerateMeme = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "aeabd7b9c7msh8cddc9f5cc5c999p14db35jsnf21f5cff04f6",
        "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
      },
    };

    fetch("https://programming-memes-images.p.rapidapi.com/v1/memes", options)
      .then((response) => response.json())
      .then((response) => {
        setMeme(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % meme.length);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="shadow text-xl font-semibold border-black border-2 bg-slate-100 hover:border-blue-500 hover:bg-blue-500  hover:cursor-pointer hover:text-white rounded-lg overflow-hidden p-3"
        onClick={handleGenerateMeme}
      >
        <button>Generate MEME</button>
      </div>

      <div>
        {meme.length > 0 && (
          <div key={meme[index].id} className="text-3xl text-center">
            <div className="text-blue-700">
              <img
                src={meme[index].image}
                alt=""
                height={400}
                width={450}
              ></img>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center absolute bottom-5">
        {meme.length > 0 && (
          <div
            className="flex hover:cursor-pointer border-2 border-black px-5  py-2 rounded-xl w-fit text-2xl font-semibold bg-slate-200 hover:bg-blue-200 hover:border-blue-400"
            onClick={handleNext}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
}
