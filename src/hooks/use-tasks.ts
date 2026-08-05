import useLocalStorage from "use-local-storage-state"
import { TASK_KEY, TaskState, type Task } from '../models/task'

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASK_KEY, {
        defaultValue: []
    })

    return {
        tasks,
        createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length
    }
}