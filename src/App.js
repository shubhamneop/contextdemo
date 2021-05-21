import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { NewContext } from "./NewContext";
import DemoHoc from "./DemoHoc";
import PortalDemo from "./PortalDemo";
import MouseTracker from "./RenderProps";
import ErrorB from "./ErrorBoundary";
import NewProvider from "./NewContext";
let num = [1, 2, 3, 4, 5, 6, 7];
function Mult() {
  return (
    <>
      <p>Map method</p>
      <ul>
        {num.map((n, index) => (
          <React.Fragment key={index}>
            <li>{n * 2 + 1}</li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
function Apps() {
  const context = useContext(NewContext);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          context data <code>{context}</code> & count {count}
        </p>
        <div>
          <button onClick={incrementHandler} style={{ marginRight: "5px" }}>
            Increment
          </button>
          <button onClick={() => count !== 0 && decrementHandler()}>
            Decrement
          </button>
        </div>
        <br />
        <button onClick={openModal}>PortalDemo</button>

        <DemoHoc text="local prop" />
        <Mult />
        <PortalDemo show={show} modalClosed={closeModal}>
          React Dom Portal Demo
        </PortalDemo>
        <MouseTracker />
      </header>
    </div>
  );
}

function App() {
  return (
    <ErrorB>
      <NewProvider>
        <Apps />
      </NewProvider>
    </ErrorB>
  );
}

export default App;
