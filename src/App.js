import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleClick = () => {
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
        setData(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className=" flex gap-5 flex-col justify-center">
      <div className="flex  flex-col items-center justify-center ml-3 pt-5 gap-2">
        <div className="border-2 rounded-lg p-2 font-semibold text-4xl bg-slate-50 ">
          Want a smile on your face?
        </div>
        <div
          className="shadow  text-3xl font-bold border-black border-2 bg-slate-100 hover:border-blue-500 hover:bg-blue-500  hover:cursor-pointer hover:text-white rounded-lg overflow-hidden p-3"
          onClick={handleClick}
        >
          <button>Get Joke</button>
        </div>
      </div>
      {data.map((joke) => (
        <div
          key={joke.id}
          className="flex flex-col items-center justify-center"
        >
          <div className="text-center text-4xl font-semibold border p-2 rounded-lg bg-slate-50 max-w-[80%]">
            {joke.joke}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
