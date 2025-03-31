import React, { useState } from "react";
import data from "../assets/data.json";

function Sylabus() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      {!show && <button
        onClick={() => setShow(!show)}
        className="cursor-pointer border bg-gray-800 hover:bg-gray-200 hover:text-gray-800 m-5 px-4 py-2 text-white font-bold rounded-md shadow-xl"
      >
        {data.Language}
      </button>}
      <div className="my-5 flex flex-col justify-center items-center">
      {show &&
        data.Terms.map((item, termIndex) =>
          item.Questions.map((it, questionIndex) => (
            <div key={`${termIndex}-${questionIndex}`} className="border w-[90%] md:w-[60%] p-2 my-1">
              <p className="font-bold">{questionIndex+1}. {it.Question}</p>
              {/* Show options only for MCQ type questions */}
              {it.Options &&
                it.Options.map((option, optionIndex) => (
                  <p key={optionIndex} className="p-2">
                    {optionIndex+1}: {option}
                  </p>
                ))}
              {it.CorrectAnswer && <p className="font-bold p-2">Answer: {it.CorrectAnswer}</p>}
            </div>
          ))
        )}
        </div>
    </div>
  );
}

export default Sylabus;
