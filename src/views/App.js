import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo.js';
import Nav from './Nav/Nav.js';
import Home from './Example/Home.js';
import ListUser from './Users/ListUser.js';
import DetailUser from './Users/DetailUser.js';
// toastity
import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


/**
 * 2 Components: class component / function component (function / arrow)
 * JSX
 */

function App() {
  // const App = () =>{}
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/todo" element={<ListTodo />}>
            </Route>
            <Route path="/about" element={<MyComponent />} >
            </Route>
            <Route path="/user" element={<ListUser />} >
            </Route>
            <Route path="/user/:id" element={<DetailUser />} >
            </Route>
          </Routes>
        </header>

        {/* // toastity */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
