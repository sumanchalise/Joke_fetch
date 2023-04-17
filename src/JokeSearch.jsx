import React, { useState } from "react";

function JokeSearch() {
  const [keyword, setKeyword] = useState("");
  const [jokes, setJokes] = useState(null);
  const [error, setError] = useState(null);
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    await fetch(`https://v2.jokeapi.dev/joke/Any?contains=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "single") {
          setError(null);
          setJokes(data.joke);
        } else if (data.type === "twopart") {
          setError(null);
          setJokes(null);
          setSetup(data.setup);
          setDelivery(data.delivery);
        } else {
          setError(data.message);
          setJokes(null);
          setSetup(null);
          setDelivery(null);
        }
      });
    setLoading(false);
  };

  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <div className="shadow text-xl font-semibold border-2 bg-slate-100 rounded-lg overflow-hidden p-2">
        Search Joke by Keyword
      </div>
      <div className="flex items-center justify-center border-2 border-black rounded-full px-3 py-1 gap-2">
        <input
          type="text"
          placeholder="Enter a keyword"
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none text-lg"
        />
        <button className="px-2 rounded-lg py-1 text-xl" onClick={handleSearch}>
          Search
        </button>
      </div>
      {jokes || setup || error ? (
        <div className="text-3xl rounded-2xl font-medium border p-2 bg-slate-100 w-5/6">
          {loading ? (
            "loading..."
          ) : error ? (
            <div className="p-3 rounded-xl">{error}</div>
          ) : (
            <div>
              {!!jokes ? (
                <p>{jokes}</p>
              ) : !!setup ? (
                <div className="flex flex-col">
                  <div>Setup: {setup}</div>
                  <div>Delivery: {delivery}</div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default JokeSearch;
