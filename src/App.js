import React, { useState } from "react";

let i = 0;
function App() {
  const [joke, setJoke] = useState([]);
  const [meme, setMeme] = useState([]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    handleClick1();
    handleNextJoke();
  };

  const handleClick3 = () => {
    handleClick1();
    handleClick2();
  };

  const handleClick1 = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "aeabd7b9c7msh8cddc9f5cc5c999p14db35jsnf21f5cff04f6",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    };
    fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", options)
      .then((response) => response.json())
      .then((response) => {
        setJoke(response);
      })
      .catch((err) => console.error(err));
  };
  const handleClick2 = () => {
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
    i += 1;
  };

  const handleNextJoke = () => {
    setIndex((prevIndex) => (prevIndex + 1) % meme.length);
    i += 1;
  };

  return (
    <div className=" flex gap-5 flex-col justify-center">
      <div className="flex  flex-col items-center justify-center ml-3 pt-5 gap-2">
        <div className="border-2 rounded-lg p-2 font-semibold text-xl md:text-3xl bg-slate-50 max-w-[80%]">
          Want a smile on your face?
        </div>
        <div className="flex gap-5">
          {i === 0 || i > 12 ? (
            <>
              <div
                className="shadow text-xl font-semibold border-black border-2 bg-slate-100 hover:border-blue-500 hover:bg-blue-500  hover:cursor-pointer hover:text-white rounded-lg overflow-hidden p-3"
                onClick={handleClick1}
              >
                <button>Generate Joke</button>
              </div>
              <div
                className="shadow text-xl font-semibold border-black border-2 bg-slate-100 hover:border-blue-500 hover:bg-blue-500  hover:cursor-pointer hover:text-white rounded-lg overflow-hidden p-3"
                onClick={handleClick3}
              >
                <button>Generate MEME</button>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center gap-5">
          <div className="w-1/3">
            {joke.map((joke) => (
              <div
                key={joke.id}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-xl md:text-4xl rounded-2xl font-medium border p-2  bg-slate-100">
                  {joke.joke}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-1/3 items-center gap-2">
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
    </div>
  );
}

export default App;
