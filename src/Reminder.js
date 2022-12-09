import { useEffect, useState } from "react";

const Reminder = () => {
    const [data, setData] = useState('')
    const [invoke, setInvoke] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/reminder')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setInvoke(true)
        })
    }, [invoke])

    const handleDelete = (id) => {
        fetch('http://localhost:8000/reminder/' + id, {
            method: "DELETE"
        })
        .then((res) => {
            setInvoke(false)
        })
    }

    return (
        <div className="reminder">
            { data && data.map((list) => (
                <div className="list" key={ list.id }>
                    <h1>{ list.reminder[0].toDo }</h1>
                    <i onClick={() => handleDelete(list.id)} className="bi bi-trash"></i>
                </div>
            ))}
        </div>
    );
}
 
export default Reminder;