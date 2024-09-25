import AccordionComp from "./components/AccordionComp";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <h1 className="bg-blue-500 text-white text-center py-5 font-sans text-xl border-b-4 border-b-black">
        React Accordion template
      </h1>
      <AccordionComp />
      <div className="absolute bottom-0 bg-[black] text-white p-5 text-center w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
