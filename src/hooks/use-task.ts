import useLocalStorage from "use-local-storage-state"
import { TASK_KEY, TaskState, type Task } from "../models/task"
import { delay } from "../helpers/utils"
import { useState } from "react"

export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, {
        defaultValue: []
    })
    const [isUpdatingTask, setIsUpdatingTask] = useState(false)
    const [isDeletingTask, setisDeletingTask] = useState(false)

    function prepareTask() {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TaskState.Creating
        }])
    }

    async function updateTask(id: string, payload: { title: Task["title"] }) {
        setIsUpdatingTask(true)
        await delay(1000)

        setTasks(
            tasks.map((task) => task.id === id ? { ...task, state: TaskState.Created, ...payload } : task)
        )

        setIsUpdatingTask(false)
    }

    function updateTaskStatus(id: string, concluded: boolean) {
        setTasks(
            tasks.map((task) => task.id === id ? { ...task, concluded } : task)
        )
    }

    async function deleteTask(id: string) {
        setisDeletingTask(true)

        await delay(1000)
        setTasks(tasks.filter((task) => task.id !== id))

        setisDeletingTask(false)
    }

    return {
        prepareTask,
        updateTask,
        updateTaskStatus,
        deleteTask,
        isUpdatingTask,
        isDeletingTask
    }


}