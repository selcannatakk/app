import React from 'react'
import axios from 'axios'

const ToDoForm = ({setTodos, fetchData}) => {

    const [newTodo, setNewTodo] = useState({
        'body': ''
    })

    const handleChange = (e) => {
        setNewTodo(prev => ({
            ...prev,
            'body': e.target.value
        }))
    }
    const postTodo = async () =>{
        try {
            await axios.post(`http://127.0.0.1:8000/api/todo/`, newTodo)
            setNewTodo({ 'body': '' })
//             setTodos(prevTodos => [...prevTodos, newTodo])
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }

// onChange={handleChange} value={newTodo.body}

    return (
        <div>
            <input type="text" placeholder="Add Todo" value={newTodo.body}
                className="input input-bordered input-info w-full max-w-xs"
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        postTodo();
                    }
                }} />
            <button onClick={postTodo} className="btn btn-primary ml-2">Add todo</button>
        </div>
    )
}


export default ToDoForm