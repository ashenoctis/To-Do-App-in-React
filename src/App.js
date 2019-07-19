import React from 'react'
import ToDoList from './ToDoList'
import {Link, Route, Switch} from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route path='/todos' component={ToDoList} />
                    <Route path='/profile' component={Profile} />                    
                </Switch>   
                <Navigation />             
            </React.Fragment>
        )
    }
}

const Profile = () =>{
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}

const Navigation = () =>{
    return(
        <div>
            <Link to='/todos'>ToDo List</Link>
            <Link to='/profile'>Profile</Link>
        </div> 
    )    
}

export default App //can also be used before class declaration