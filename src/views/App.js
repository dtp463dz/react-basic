import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
/**
 * 2 Components: class component / function component (function / arrow)
 * JSX
 */

function App() {
  // const App = () =>{}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with ReactJS
        </p>

        <MyComponent />
        {/* <MyComponent></MyComponent>*/}
      </header>
    </div>
  );
}

export default App;
