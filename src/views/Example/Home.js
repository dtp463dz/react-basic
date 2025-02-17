import React from "react";
// import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/hoa2.jpg';

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // this.props.history.push('/todo')
        }, 3000)
    }

    render() {
        console.log('>>> check props: ', this.props)
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


// export default withRouter(Home);
export default Color(Home);  // random Color