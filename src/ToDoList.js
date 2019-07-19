import React from 'react'
import ToDoListItem from './ToDoListItem'
import './Styles.css'
import axios from 'axios'

export default class ToDoList extends React.Component{
    constructor(){
        super()
        this.state = {
            list_title: "",
            current_value: '',
            todos: [

            ]
        }

        this.deleteToDoByIndex = this.deleteToDoByIndex.bind(this)
    }

    deleteToDoByIndex(index){
        this.setState(prevState => (
            {
                todos: [...prevState.todos.slice(0, index), ...prevState.todos.slice(index+1)],
            }
        ))
    }

    //using component with life-cycle method
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/5")
        .then(data=> this.setState({todos:[{id: data.data.id, title: data.data.title, completed: data.data.completed}]}))
        .catch(error=>console.log(error))
    }

    render(){
        return(
            <div className="todo-list">
                <h2>To-Do List</h2>
                <label>Title</label><br />
                <input 
                placeholder="Enter Title..."
                type="text"
                value={this.state.list_title}
                onChange= {(event) => { this.setState({ list_title: event.target.value}) }}
                />
                <br />

                {
                    this.state.todos.map((todo, index) => {
                        return(                            
                                <ToDoListItem 
                                    key={index}
                                    index={index}
                                    deleteToDoByIndex={this.deleteToDoByIndex} 
                                    title={todo.title} 
                                    completed={todo.completed}/>                            
                        )
                    })
                }

                <input
                placeholder="To-Do Item Name..."
                type="text"
                value={this.state.current_value}
                onChange={(event) => { this.setState({current_value: event.target.value }) } }
                />
                <button onClick={() => {
                    this.setState(prevState =>
                    ({ todos: prevState.todos.concat(
                            { title: this.state.current_value, completed: false }
                        ),
                        current_value: ''
                        }))
                    }}> Add Item to List</button>
            </div>
        )
    }
}