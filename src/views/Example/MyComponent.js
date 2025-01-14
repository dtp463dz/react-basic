import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    /**
     * JSX => return block
     * fragment
     */


    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Dev', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '400' },
            { id: 'abcJob3', title: 'BA', salary: '1000' },
        ]
    }

    // them job moi o state
    addNewJob = (job) => {
        console.log('>>> check job from parent: ', job) // kiem tra xem da dc them chưa
        // them moi vao state
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({
            // arrJobs: [...this.state.arrJobs, job]  /// ... là toán tử copy
            arrJobs: currentJobs
        })
    }

    // delete job
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);  // filter: lọc với điều kiện 
        this.setState({
            arrJobs: currentJobs
        })
    }

    // hàm để gọi API để lấy dữ liệu
    componentDidMount() {
        console.log('>>> run component did mount')
    }
    // hàm goị API so sánh hiện tại và tương lai
    componentDidUpdate(prevProps, prevState) {
        console.log('>> run did update: ', 'prev state: ', prevState, 'current state: ', this.state);

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
                <AddComponent
                    addNewJob={this.addNewJob}

                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>

        )
    }
}

export default MyComponent;