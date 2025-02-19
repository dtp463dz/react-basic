import React from "react";
// import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/hoa2.jpg';
import { connect } from "react-redux";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // this.props.history.push('/todo')
        }, 3000)
    }
    handleDeleteUser = (user) => {
        console.log('>> check user delete', user);
        this.props.deleteUserRedux(user);

    }
    render() {
        console.log('>>> check props: ', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello World From HomePage
                </div>
                <div>
                    <img src={logo} style={{ width: '300px', height: '400px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

// state của Redux (rootReducer.js)
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete })
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));  // random Color