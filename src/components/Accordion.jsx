import AccordionItem from "./AccordionItem";
export default function Accordion({ data, isOpen, setIsOpen }) {
  return (
    <div>
      <ul className="mt-5">
        {data.map((item) => (
          <AccordionItem
            item={item}
            question={item.question}
            answer={item.answer}
            num={item.id}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
