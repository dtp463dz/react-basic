import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

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
        arrJobs: [
            { id: 'abcJob1', title: 'Dev', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '400' },
            { id: 'abcJob3', title: 'BA', salary: '1000' },
        ]
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
                <AddComponent />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />

            </>

        )
    }
}

export default MyComponent;