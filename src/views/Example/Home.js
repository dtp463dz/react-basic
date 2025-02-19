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

    render() {
        console.log('>>> check props: ', this.props.dataRedux)
        return (
            <>
                <div>
                    Hello World From HomePage
                </div>

                <div>
                    <img src={logo} style={{ width: '300px', height: '400px', marginTop: '20px' }} />
                </div>
            </>
        )
    }
}

// state của Redux (rootReducer.js)
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));  // random Color