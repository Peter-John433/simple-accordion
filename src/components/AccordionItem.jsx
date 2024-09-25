import { useState } from "react";
export default function AccordionItem({ question, answer, num }) {
  const [isOpen, setIsOpen] = useState(false);
  const myColor = {
    color: "red",
  };
  return (
    <div>
      <div className=" flex flex-col justify-center items-center px-5 lg:px-0">
        <li
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`
          bg-blue-500 shadow-sm 
          shadow-[#0d0d0d] text-[white] 
          mb-4 w-full lg:w-1/2 px-5 lg:px-10 py-2 ${
            isOpen
              ? "transition duration-500 hover:bg-black hover:text-[yellow]"
              : ""
          }`}
        >
          <div
            className={`flex justify-between items-center ${
              isOpen ? "questionColor" : ""
            }`}
          >
            <span>{num < 9 ? `0${num}` : `${num + 1}`}</span>
            <span className="text-[12px] lg:text-[14px] font-[600]">
              {question}
            </span>
            <button
              className={isOpen ? "transition duration-200 rotate-180" : ""}
            >
              {isOpen ? "-" : "+"}
            </button>
          </div>
          {isOpen && (
            <p className="text-[13px] pt-[10px] text-center">{answer}</p>
          )}
        </li>
      </div>
    </div>
  );
}
