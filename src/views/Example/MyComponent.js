import React from 'react';

class MyComponent extends React.Component {
    /**
     * JSX => return block
     * fragment
     */
    state = {
        name: 'Dean',
        school: 'PNK',
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my component, my name is {this.state.name}
                </div>

                <div className='second'>
                    My school: {this.state['school']}
                </div>
            </>

        )
    }
}

export default MyComponent;