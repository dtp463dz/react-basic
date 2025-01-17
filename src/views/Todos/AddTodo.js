import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = (event) => {
        if (!this.state.title) {
            // undefined/null/empty =>false
            // alert('Missing required params ! ')
            toast.error("ERROR!!!");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        // khi đã thêm thành công thì chuyển title thành rỗng
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className='add-todo'>
                <input type="text" value={title}
                    onChange={(event) => this.handleChangeTitle(event)}
                />
                <button type="button" className='add'
                    onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;