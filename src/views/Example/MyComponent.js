import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {
    /**
     * JSX => return block
     * fragment
     */

    /*
    state = {
        name: 'Dean',
        school: 'PNK',
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('Click me')
    }
    */
    state = {
        firstname: '',
        lastname: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Dev', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '400' },
            { id: 'abcJob3', title: 'BA', salary: '1000' },
        ]
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
        console.log('>> call render: ', this.state)
        return (
            <>
                {/* <div className='first'>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my component, my name is {this.state.name}
                </div>

                <div className='second'>
                    My school: {this.state['school']}
                </div>

                <div className='third'>
                    <button onClick={() => this.handleClickButton()}>Click Me</button>
                </div> */}

                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstname}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastname}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstname}
                    age={'21'}
                    address={'Ha Noi'}
                    arrJobs={this.state.arrJobs}
                />

            </>

        )
    }
}

export default MyComponent;