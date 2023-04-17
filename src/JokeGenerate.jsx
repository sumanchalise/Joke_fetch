import React, { useState } from "react";

export default function JokeGenerate() {
  const [joke, setJoke] = useState([]);
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
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div
        className="shadow text-xl font-semibold border-black border-2 bg-slate-100 hover:border-blue-500 hover:bg-blue-500  hover:cursor-pointer hover:text-white rounded-lg overflow-hidden p-3 w-fit"
        onClick={handleClick1}
      >
        <button>Generate Joke</button>
      </div>

      <div className="flex w-5/6 items-center">
        {joke.map((joke) => (
          <div
            key={joke.id}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-xl md:text-4xl rounded-2xl font-medium border p-2 bg-slate-100">
              {joke.joke}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
