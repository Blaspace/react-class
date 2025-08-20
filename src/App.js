import Header from "./components/Header";

function App() {
  const msg = "hello world";

  return (
    <div>
      <Header text={msg} number={40} />
    </div>
  );
}

export default App;
