import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" link="click for link" />
      <div className="container my-3 ">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
