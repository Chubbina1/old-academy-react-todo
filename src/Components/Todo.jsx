import React from 'react'




class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { todos:[
        "todo 1",
        "todo 2",
        "todo 3",
      ] };
    }

render() {
    return (
        <div>
            <h1>avto</h1>
           {
            this.state.todos?.length > 0 ? 

             
            <div>
                <ul>
                    {
                        this.state.todos.map((todo) => (
                            <li>{todo}</li>
                        ))
                    }
                </ul>
            </div> : <p>no todos</p>
           }
        </div>
    )
}
}

export default Todo
