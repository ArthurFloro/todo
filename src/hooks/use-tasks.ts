import useLocalStorage from "use-local-storage-state"
import { TASK_KEY, TaskState, type Task } from '../models/task'
import { useEffect, useState } from "react"
import { delay } from "../helpers/utils"

export default function useTasks() {
    const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, {
        defaultValue: []
    })
    const [isLoadingTasks, setIsLoadingTasks] = useState(true)

    useEffect(() => {
        let isMounted = true; // Previne atualizações de estado se o componente for desmontado

        async function simulateLoading() {
            await delay(2000)
            if (isMounted) {
                setIsLoadingTasks(false)
            }
        }

        simulateLoading()

        return () => {
            isMounted = false
        }
    }, []) // Array vazio: roda apenas na montagem (on mount)

    return {
        tasks: tasksData,
        createdTasksCount: tasksData.filter((task) => task.state === TaskState.Created).length,
        concludedTasksCount: tasksData.filter((task) => task.concluded).length,
        isLoadingTasks
    }
}