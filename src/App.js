import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
export const Context = React.createContext();
export const Context1 = React.createContext();
function App() {
  const [click, setClick] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  return (
    <Context.Provider value={[click, setClick]}>
      <main>
        <Home />
        <button className="btn" onClick={() => setModal(!modal)}>
          show modal
        </button>
      </main>
      <Context1.Provider value={[modal, setModal]}>
        <div className={modal ? "modal-overlay show-modal" : "modal-overlay "}>
          <div className="modal-container">
            <h3>modal content</h3>
            <Modal />
          </div>
        </div>
      </Context1.Provider>
      <Sidebar />
    </Context.Provider>
  );
}

export default App;
