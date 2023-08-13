import React, { useEffect, useState } from "react";

const SearchBox = ({ setKeyword }) => {
  const [data, setData] = useState("");

  const handleSubmit = () => {
    setKeyword(data);
  };

  useEffect(() => {
    if (data === "") {
      setKeyword("");
    }
  }, [data]);

  return (
    <>
      <div className="flex w-full mx-auto">
        <input
          className="py-2 w-full outline-none px-5 font-semibold"
          type="text"
          placeholder=" search"
          name="search"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="py-2 px-10 bg-orange-500 text-slate-100 font-semibold "
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBox;
