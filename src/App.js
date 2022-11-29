
import { Navbar } from "./components/Navbar";
import { Characters } from "./components/Characters";




function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Characters />
      </div>
    </>
  );
}

export default App;
