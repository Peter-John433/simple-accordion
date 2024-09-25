// import { useState } from "react";
import Accordion from "./Accordion";

const questionAndAnswer = [
  {
    question: "When did they open the London underground?",
    answer: "London underground was opened in 1863",
    id: 1,
  },
  {
    question: "Who invented the World Wide Web, and when?",
    answer: "Tim Berners-Lee, 1990",
    id: 2,
  },
  {
    question: "Who invented the iconic Little Black Dress?",
    answer: "Coco Chanel, 1920s",
    id: 3,
  },
  {
    question: "What happened on July 20th, 1969?",
    answer: "Apollo 11 landed on the Moon",
    id: 4,
  },
];

export default function AccordionComp() {
  return (
    <div>
      <Accordion data={questionAndAnswer} />
    </div>
  );
}
