import "./App.css";

const App = ({ name }) => {
  return (
    <div className="App">
      <header className="App-header">
        My first react app
        <h3>
          Hello,
          {name}!
        </h3>
      </header>
    </div>
  );
};

export default App;
