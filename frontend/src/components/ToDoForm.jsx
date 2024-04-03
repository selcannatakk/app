import React from 'react'

const ToDoForm = () => {



    return (
        <div>
            <input type="text" className="input input-bordered input-info w-full max-w-xs" placeholder="Add Todo" />
            <button className="btn btn-primary ml-2">Add todo</button>
        </div>
    )
}


export default ToDoForm