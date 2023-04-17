import React, { useState } from "react";
import JokeSearch from "./JokeSearch";
import MemeGenerate from "./MemeGenerate";
import JokeGenerate from "./JokeGenerate";

function App() {
  const [searchJoke, setSearchJoke] = useState();
  const [generateJoke, setGenerateJoke] = useState();
  const [searchMeme, setSearchMeme] = useState();

  const onClickSearchJoke = () => {
    setSearchJoke(!searchJoke);
    setSearchMeme(false);
    setGenerateJoke(false);
  };
  const onClickGenerateJoke = () => {
    setGenerateJoke(!generateJoke);
    setSearchMeme(false);
    setSearchJoke(false);
  };

  const onClickSearchMeme = () => {
    setSearchMeme(!searchMeme);
    setSearchJoke(false);
    setGenerateJoke(false);
  };

  return (
    <div className=" flex gap-5 flex-col justify-center">
      <div className="flex  flex-col items-center justify-center ml-3 pt-5 gap-2 ">
        <div className="border-2 rounded-lg p-2 px-5 font-semibold text-xl md:text-3xl bg-slate-50 max-w-[80%]">
          Want a smile on your face?
        </div>
        <div className="flex gap-3">
          <div
            className="shadow text-xl font-semibold border-black border-2 bg-slate-100 hover:border-blue-500 hover:bg-blue-500  hover:cursor-pointer hover:text-white rounded-lg overflow-hidden p-3"
            onClick={onClickGenerateJoke}
          >
            <button>Generate Joke</button>
          </div>
          <div
            className="shadow text-xl font-semibold border-black border-2 bg-slate-100 hover:border-blue-500 hover:bg-blue-500  hover:cursor-pointer hover:text-white rounded-lg overflow-hidden p-3"
            onClick={onClickSearchMeme}
          >
            <button>Generate Meme</button>
          </div>
          <div
            className="shadow text-xl font-semibold border-black border-2 bg-slate-100 hover:border-blue-500 hover:bg-blue-500  hover:cursor-pointer hover:text-white rounded-lg overflow-hidden p-3"
            onClick={onClickSearchJoke}
          >
            <button>Search Joke</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>{generateJoke && <JokeGenerate />}</div>
        <div>{searchMeme && <MemeGenerate />}</div>
        <div>{searchJoke && <JokeSearch />}</div>
      </div>
    </div>
  );
}

export default App;
