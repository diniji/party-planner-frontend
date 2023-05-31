import axios from 'axios';

const myURL = "https://party-planner-backend.onrender.com"


const getAllTasks = (setTask) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
    setTask(data)
    })
}

const addTask = (title, setTitle, setTask) => {
    axios.post(`${myURL}/saveMyTask`, { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllTasks(setTask)
    })
}

const updateTask = (taskId, title, setTitle, setTask, setEditing) => {
    axios.put(`${myURL}/editMyTask`, { _id: taskId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllTasks(setTask)
    })
}

const deleteTask = (_id, setTask) => {
    axios.post(`${myURL}/deleteMyTask`, { _id })
    .then((data) => {
        console.log(data)
        getAllTasks(setTask)
    })
}

export { getAllTasks, addTask, updateTask, deleteTask };