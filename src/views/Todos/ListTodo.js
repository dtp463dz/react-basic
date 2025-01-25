import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
// toastity
import { toast } from 'react-toastify';
// import Color from '../HOC/Color';
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        // edit 
        editTodo: {}
    }

    addNewTodo = (todo) => {
        let currenListTodo = this.state.listTodos;
        currenListTodo.push(todo)
        this.setState({
            // listTodos: [...this.state.listTodos, todo]
            listTodos: currenListTodo
        })
        // toastity
        toast.success("Success!!!");
    }

    handleDeleteTodo = (todo) => {
        let currenListTodo = this.state.listTodos;
        currenListTodo = currenListTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currenListTodo,
        })
        // toastity
        toast.success("Delete Success!!!");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //khi nhấn save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCoy = [...listTodos] // copy lại của listTodos
            let objIndex = listTodosCoy.findIndex((item => item.id === todo.id));
            listTodosCoy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCoy,
                editTodo: {}
            })
            // toastity
            toast.success("Update Todo Succeed!!!");
            return;
        }
        // khi nhấn edit
        this.setState({
            editTodo: todo
        })

    }

    // edit
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        // let listTodos = this.state.listTodos
        let { listTodos, editTodo } = this.state; // them editTodo cho phần edit
        // hàm check obj có rỗng hay ko
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>> check empty obj: ', isEmptyObj);
        return (
            <>
                <p>
                    Simple TODO App with React.js
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />

                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {/* edit, khi obj rỗng thì là span text, khi obj có giá trị thì span sẽ có thêm input để edit obj đó  */}
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span> {index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button className='edit'
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'}
                                        </button>
                                        <button className='delete'
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default ListTodo;
// export default Color(ListTodo);