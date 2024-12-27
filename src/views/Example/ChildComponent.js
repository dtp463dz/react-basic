import React from 'react';

class ChildComponent extends React.Component {
    state = {
        firstname: '',
        lastname: '',
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() // hàm ko tải lại website
        console.log('>> check data input: ', this.state)
    }

    render() {
        console.log('>> check props: ', this.props)

        // let name = this.props.name;
        // let age = this.props.age;

        let { name, age } = this.props;
        return (
            <>
                <div>
                    Child Component Name: {name} - {age}
                </div>
            </>

        )
    }
}

export default ChildComponent;