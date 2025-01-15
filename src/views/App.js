import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo.js';
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
          Simple TODO App with React.js
        </p>

        {/* <MyComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
