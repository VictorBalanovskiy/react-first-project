import { useState, useCallback, useEffect } from "react";
import { Counter } from "./components/counter";
import { Form } from "./components/form";
import { MessageList } from "./components/message-list";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    /// settimeout

    return () => {};
  }, []);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Form name={name} handleNameChange={handleNameChange} />
        <br />
        <br />
        <br />
        <MessageList />
      </header>
    </div>
  );
};

export default App;
