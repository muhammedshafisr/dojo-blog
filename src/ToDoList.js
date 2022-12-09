import { useState, useEffect } from "react";

const ToDoList = () => {
    const date = new Date();
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekDay[date.getDay()];
    const [toDo, setToDo] = useState('');
    const [data, setData] = useState('');
    const [click, setClick] = useState(false);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        // getting todo list
        fetch('http://localhost:8000/toDo')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setClick('jdk')
            })
    }, [click])

    // posting new todo
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/toDo', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ toDo })
        })
            .then((res) => {
                setClick('dfks')
            })
    }

    //delete todo
    const handleDelete = (id) => {
        fetch('http://localhost:8000/toDo/' + id, {
            method: 'DELETE'
        })
            .then((res) => {
                setClick('deleted')
            })
    }

    //handling reminder
    const handleReminder = (id) => {
        const reminder = data.filter((list) => list.id === id)
        console.log(reminder)

        fetch('http://localhost:8000/reminder', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({reminder})
        })
        .then((res) => {
            setAlert(true);
            setClick('dfjsk')
        })
    }

    return (
        <div className="to-do-list">
            { alert && <div className="alert">
                Added to the reminder check it out! {
                    setTimeout(() => {
                        setAlert(false)
                    }, 2000)
                }
            </div> }
            <div className="header">
                <h2>ToDo List</h2>
                <h3>Whoop, it's {day} !</h3>
            </div>

            <div className="form-body">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add item"
                        required
                        value={toDo}
                        onChange={(e) => setToDo(e.target.value)}
                    />
                    <button onClick={() => setClick(true)}>Add</button>
                </form>
            </div>
            <div className="list">
                {data && data.map((list) => (
                    <div className="list-preview" key={ list.id }>
                        <i onClick={()=> handleReminder(list.id)} className="bi bi-bell-fill"></i>
                        <h1>{ list.toDo }</h1>
                        <i onClick={()=> handleDelete(list.id)} className="bi bi-trash"></i>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ToDoList