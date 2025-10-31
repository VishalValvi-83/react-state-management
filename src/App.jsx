import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";
import Testing from "./components/testing1/testing";

function App() {
  return (
    <div className="w-2xl block mx-auto border-2 card p-4 rounded-lg border-amber-100">
      <h1 className="mx-auto text-center text-2xl font-bold">Zustand Challenge</h1>
      <CounterDisplay /> 
      <Testing/>
      <CounterButtons />
    </div>
  );
}

export default App;
