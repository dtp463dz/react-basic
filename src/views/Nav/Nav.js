import React from "react";
import './Nav.scss';
import {

    NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/Todo" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>

                {/* <Link to="/">Home</Link>
                <Link to="/Todo">Todos</Link>
                <Link to="/about">About</Link> */}


            </div>
        )
    }
}

export default Nav;